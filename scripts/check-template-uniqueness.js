import { petDesignMetadata } from "../src/templates/pets/design.meta.js";

const dimensions = ["layoutType", "heroType", "navigationType", "footerType"];
const entries = Object.entries(petDesignMetadata);
const errors = [];

if (entries.length !== 5) {
  errors.push(`Expected five authored Pets briefs, found ${entries.length}.`);
}

for (const [templateId, metadata] of entries) {
  for (const field of ["designName", "creativeConcept", "signatureMoment", "memoryHook", ...dimensions, "sectionOrder", "typography", "motionStyle", "motionPersonality", "interactionType", "colorPalette", "backgroundTreatment", "voice", "mobileStrategy", "reducedMotionStrategy"]) {
    if (!metadata[field]) errors.push(`${templateId} is missing ${field}.`);
  }
}

for (const field of dimensions) {
  const values = entries.map(([templateId, metadata]) => [templateId, metadata[field]]);
  for (let index = 0; index < values.length; index += 1) {
    for (let other = index + 1; other < values.length; other += 1) {
      if (values[index][1] === values[other][1]) {
        errors.push(`${values[index][0]} and ${values[other][0]} share ${field}: ${values[index][1]}.`);
      }
    }
  }
}

const sectionOrders = new Map();
for (const [templateId, metadata] of entries) {
  const order = JSON.stringify(metadata.sectionOrder);
  if (sectionOrders.has(order)) errors.push(`${templateId} and ${sectionOrders.get(order)} share sectionOrder.`);
  sectionOrders.set(order, templateId);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Creative uniqueness check passed for ${entries.length} authored Pets templates.`);
}