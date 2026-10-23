import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export const root = path.resolve("src/templates");
export const categories = ["plumbing", "clinic", "hospital", "restaurant", "pets", "photographer", "architecture", "interior-design", "beauty-parlour", "ecommerce", "electrical"];
export const expectedVariants = ["01", "02", "03", "04", "05"];

export async function getTemplateFolders() {
  const templates = [];
  for (const category of categories) {
    const categoryPath = path.join(root, category);
    let entries = [];
    try { entries = await readdir(categoryPath, { withFileTypes: true }); } catch { /* missing category handled by coverage checker */ }
    for (const entry of entries) {
      if (!entry.isDirectory() || !/^\d{2}-/.test(entry.name)) continue;
      templates.push({ category, name: entry.name, id: `${category}-${entry.name.slice(0, 2)}`, dir: path.join(categoryPath, entry.name) });
    }
  }
  return templates;
}

export async function readTemplateFiles(dir) {
  const result = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(full);
      else if (/\.(tsx?|jsx?|css|html)$/.test(entry.name)) result.push({ path: full, relative: path.relative(dir, full).replaceAll("\\", "/"), text: await readFile(full, "utf8") });
    }
  }
  await visit(dir);
  return result;
}

export function metadataFromSource(files) {
  const file = files.find((item) => /(?:^|\/)meta\.tsx?$/.test(item.relative));
  return file?.text || "";
}
