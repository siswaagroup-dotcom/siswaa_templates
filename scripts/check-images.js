import { getTemplateFolders, readTemplateFiles, categories } from "./template-files.js";

const errors = [];
const templates = await getTemplateFolders();
const categoryImages = new Map();
for (const template of templates) {
  const files = await readTemplateFiles(template.dir);
  const manifest = files.find((file) => /(^|\/)images\.ts$/.test(file.relative));
  if (!manifest) {
    errors.push(`${template.id}: missing images.ts manifest`);
    continue;
  }
  const refs = [...manifest.text.matchAll(/(?:src\s*:\s*)?["'`](https?:\/\/[^"'`]+|\/[\w./-]+)["'`]/g)].map((match) => match[1]);
  const unique = [...new Set(refs)];
  if (unique.length < 8) errors.push(`${template.id}: requires at least 8 unique image or art references, found ${unique.length}`);
  const seen = categoryImages.get(template.category) || new Map();
  for (const image of unique) {
    if (seen.has(image)) errors.push(`${template.id}: image reused from ${seen.get(image)}: ${image}`);
    else seen.set(image, template.id);
  }
  categoryImages.set(template.category, seen);
}
for (const category of categories) if (!categoryImages.has(category)) errors.push(`${category}: no standalone template image manifests found`);

if (errors.length) {
  console.error(`Image check failed with ${errors.length} issue(s):\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exitCode = 1;
} else console.log(`Image check passed for ${templates.length} standalone templates with unique manifests.`);
