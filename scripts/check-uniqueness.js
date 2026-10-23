import { getTemplateFolders, readTemplateFiles, metadataFromSource, categories, expectedVariants } from "./template-files.js";

const errors = [];
const templates = await getTemplateFolders();
const groups = new Map();
for (const template of templates) {
  const files = await readTemplateFiles(template.dir);
  const source = metadataFromSource(files);
  const required = ["designName", "creativeConcept", "signatureMoment", "layoutType", "navigationType", "heroType", "footerType", "sectionOrder", "motionStyle", "interactionType", "colorPalette", "typography"];
  for (const field of required) if (!new RegExp(`\\b${field}\\s*:`).test(source)) errors.push(`${template.id}: meta missing ${field}`);
  if (!files.some((file) => /(^|\/)index\.(tsx|jsx)$/.test(file.relative))) errors.push(`${template.id}: missing self-owned index component`);
  if (!files.some((file) => /(^|\/)Header\.(tsx|jsx)$/.test(file.relative))) errors.push(`${template.id}: missing template-owned Header`);
  if (!files.some((file) => /(^|\/)Hero\.(tsx|jsx)$/.test(file.relative))) errors.push(`${template.id}: missing template-owned Hero`);
  if (!files.some((file) => /(^|\/)Footer\.(tsx|jsx)$/.test(file.relative))) errors.push(`${template.id}: missing template-owned Footer`);
  const sectionCount = files.reduce((count, file) => count + (file.text.match(/<section\b/g) || []).length, 0);
  if (sectionCount < 6) errors.push(`${template.id}: requires at least 6 authored section elements, found ${sectionCount}`);
  for (const file of files) {
    const imports = file.text.matchAll(/import\s+[^;\n]+?from\s+["']([^"']+)["']/g);
    for (const [, importPath] of imports) {
      if (/shared\/(?:Header|Hero|Footer|Layout|Section)|components\/(?:Header|Hero|Footer|TemplateShell|PageLayout|GenericHero|ServicesGrid|GenericFooter|SectionOrder)/i.test(importPath)) {
        errors.push(`${template.id}: imports shared page component from ${importPath}`);
      }
    }
  }
  const categoryTemplates = groups.get(template.category) || [];
  categoryTemplates.push({ template, source, id: template.id });
  groups.set(template.category, categoryTemplates);
}

for (const category of categories) {
  const group = groups.get(category) || [];
  if (group.length !== expectedVariants.length) errors.push(`${category}: expected 5 real template folders, found ${group.length}`);
  for (const field of ["layoutType", "heroType", "navigationType", "footerType"]) {
    const seen = new Map();
    for (const item of group) {
      const value = item.source.match(new RegExp(`\\b${field}\\s*:\\s*["']([^"']+)`))?.[1];
      if (!value) continue;
      if (seen.has(value)) errors.push(`${category}: ${item.id} duplicates ${field} with ${seen.get(value)}`);
      seen.set(value, item.id);
    }
  }
  const seenOrders = new Map();
  const seenFonts = new Map();
  for (const item of group) {
    const order = item.source.match(/sectionOrder\s*:\s*\[([^\]]*)\]/)?.[1]?.replace(/\s/g, "");
    if (order && seenOrders.has(order)) errors.push(`${category}: ${item.id} duplicates sectionOrder with ${seenOrders.get(order)}`);
    if (order) seenOrders.set(order, item.id);
    const fonts = item.source.match(/typography\s*:\s*\{[^}]*display\s*:\s*["']([^"']+)["'][^}]*body\s*:\s*["']([^"']+)["']/s);
    const pairing = fonts ? `${fonts[1]}|${fonts[2]}` : "";
    if (pairing && seenFonts.has(pairing)) errors.push(`${category}: ${item.id} duplicates font pairing with ${seenFonts.get(pairing)}`);
    if (pairing) seenFonts.set(pairing, item.id);
  }
}

if (errors.length) {
  console.error(`Uniqueness check failed with ${errors.length} issue(s):\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exitCode = 1;
} else console.log(`Uniqueness check passed for ${templates.length} standalone templates across ${categories.length} categories.`);
