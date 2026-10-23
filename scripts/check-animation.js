import { getTemplateFolders, readTemplateFiles, metadataFromSource } from "./template-files.js";

const errors = [];
const templates = await getTemplateFolders();
const categoryCss = new Map();
for (const template of templates) {
  const files = await readTemplateFiles(template.dir);
  const source = files.map((file) => file.text).join("\n");
  const css = files.filter((file) => file.path.endsWith(".css")).map((file) => file.text).join("\n");
  const meta = metadataFromSource(files);
  if (!/@keyframes\s+[\w-]+|<animate|requestAnimationFrame|\.animate\s*\(/.test(source)) errors.push(`${template.id}: missing file-local automatic animation`);
  if (!/cubic-bezier\(|steps\(|spring\(/.test(source)) errors.push(`${template.id}: missing a template-specific easing curve`);
  if (!/onPointer(?:Move|Enter|Leave)|onMouse(?:Move|Enter|Leave)|onClick|addEventListener\(\s*["'](?:pointer|mouse|scroll|click)|\.addEventListener/.test(source)) errors.push(`${template.id}: missing pointer, scroll, or click interaction`);
  if (!/prefers-reduced-motion/.test(css)) errors.push(`${template.id}: missing prefers-reduced-motion handling`);
  if (/addEventListener\s*\(/.test(source) && !/removeEventListener\s*\(/.test(source)) errors.push(`${template.id}: event listener is not cleaned up`);
  if (/IntersectionObserver/.test(source) && !/\.disconnect\s*\(|\.unobserve\s*\(/.test(source)) errors.push(`${template.id}: observer cleanup missing`);
  if (!/animations\s*:\s*\[/.test(meta)) errors.push(`${template.id}: meta missing animation inventory`);
  const cssFingerprint = css.replace(/\s+/g, " ").trim();
  const previous = categoryCss.get(template.category) || new Map();
  if (cssFingerprint && previous.has(cssFingerprint)) errors.push(`${template.id}: identical animation/style CSS to ${previous.get(cssFingerprint)}`);
  if (cssFingerprint) previous.set(cssFingerprint, template.id);
  categoryCss.set(template.category, previous);
}

if (errors.length) {
  console.error(`Animation check failed with ${errors.length} issue(s):\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exitCode = 1;
} else console.log(`Animation check passed for ${templates.length} standalone templates.`);
