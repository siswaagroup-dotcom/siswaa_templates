import { petDesignMetadata } from "../templates/pets/design.meta";
import { meta as waterInMotionMeta } from "../templates/plumbing/01-water-in-motion/meta";
import { meta as emergencyResponseMeta } from "../templates/plumbing/02-emergency-response/meta";
import { meta as pipeExplorerMeta } from "../templates/plumbing/03-pipe-explorer/meta";
import { meta as premiumHomeCareMeta } from "../templates/plumbing/04-premium-home-care/meta";
import { meta as industrialFlowMeta } from "../templates/plumbing/05-industrial-flow/meta";

const authoredTemplateMetadata = {
  ...petDesignMetadata,
  "plumbing-01": waterInMotionMeta,
  "plumbing-02": emergencyResponseMeta,
  "plumbing-03": pipeExplorerMeta,
  "plumbing-04": premiumHomeCareMeta,
  "plumbing-05": industrialFlowMeta
};

const imageSets = {
  plumbing: ["photo-1607472586893-edb57bdc0e39", "photo-1504307651254-35680f356dfd", "photo-1621905251918-48416bd8575a"],
  clinic: ["photo-1576091160399-112ba8d25d1d", "photo-1559757175-0eb30cd8c063", "photo-1551601651-2a8555f1a136"],
  hospital: ["photo-1586773860418-d37222d8fce3", "photo-1551076805-e1869033e561", "photo-1579684385127-1ef15d508118"],
  restaurant: ["photo-1414235077428-338989a2e8c0", "photo-1517248135467-4c7edcad34c4", "photo-1555939594-58d7cb561ad1"],
  pets: ["photo-1552053831-71594a27632d", "photo-1573865526739-10659fec78a5", "photo-1543466835-00a7907e9de1"],
  photographer: ["photo-1516035069371-29a1b244cc32", "photo-1470252649378-9c29740c9fa8", "photo-1492691527719-9d1e07e534b4"],
  architecture: ["photo-1600607687939-ce8a6c25118c", "photo-1600210492486-724fe5c67fb0", "photo-1511818966892-d7d671e672a2"],
  "interior-design": ["photo-1616486338812-3dadae4b4ace", "photo-1600210492486-724fe5c67fb0", "photo-1618221195710-dd6b41faaea6"],
  "beauty-parlour": ["photo-1560066984-138dadb4c035", "photo-1522337360788-8b13dee7a37e", "photo-1516975080664-ed2fc6a32937"],
  ecommerce: ["photo-1523275335684-37898b6baf30", "photo-1542291026-7eec264c27ff", "photo-1526170375885-4d8ecf77b99f"],
  electrical: ["photo-1621905251189-08b45d6a269e", "photo-1558618666-fcd25c85cd64", "photo-1497366754035-f200968a6e72"]
};

const industries = [
  { id: "plumbing", name: "Plumbing", label: "PLUMBING & HOME SERVICES", description: "Reliable local plumbing, from planned upgrades to urgent repairs.", business: "Clearflow Plumbing", offer: "Good water. Good days.", services: ["Emergency repairs", "Drain & pipe care", "Water heater service", "Bathroom upgrades", "Leak detection", "Commercial plumbing"], action: "Request a visit", tone: "A trusted local team for the jobs that keep a home running." },
  { id: "clinic", name: "Clinic", label: "PRIMARY & SPECIALTY CARE", description: "Thoughtful, modern care built around real people and everyday health.", business: "Northstar Clinic", offer: "Care that listens first.", services: ["Primary care", "Preventive visits", "Same-day appointments", "Women's health", "Lab services", "Virtual visits"], action: "Book an appointment", tone: "A welcoming place to ask questions, find answers, and feel looked after." },
  { id: "hospital", name: "Hospital", label: "HOSPITAL & HEALTH SYSTEM", description: "Clear pathways to coordinated care, specialist teams, and patient support.", business: "Harborview Medical", offer: "Here for every next step.", services: ["Emergency care", "Heart & vascular", "Cancer care", "Children's health", "Surgery", "Patient services"], action: "Find care", tone: "Connected teams and practical patient guidance, all in one place." },
  { id: "restaurant", name: "Restaurant", label: "DINING & HOSPITALITY", description: "A distinctive dining experience, from the first welcome to the last course.", business: "Juniper Table", offer: "Gather around something good.", services: ["Seasonal menu", "Chef's table", "Private dining", "Weekend brunch", "Wine & pairings", "Gift cards"], action: "Reserve a table", tone: "A neighborhood table shaped by the season and meant to be shared." },
  { id: "pets", name: "Pets", label: "VETERINARY & PET CARE", description: "Gentle veterinary care and useful guidance for every member of the family.", business: "Paw & Whisker", offer: "Big love for little lives.", services: ["Wellness checkups", "Vaccinations", "Diagnostics & care", "Dental health", "Grooming", "Pet pharmacy"], action: "Book a visit", tone: "Kind people, clear answers, and care at your pet's pace." },
  { id: "photographer", name: "Photographer", label: "PHOTOGRAPHY STUDIO", description: "An image-led portfolio for stories worth remembering.", business: "Fieldlight Studio", offer: "Hold on to the feeling.", services: ["Editorial stories", "Portrait sessions", "Weddings & events", "Brand campaigns", "Print collections", "Studio rental"], action: "Plan a shoot", tone: "Honest photographs, made with curiosity and a little room to wander." },
  { id: "architecture", name: "Architecture", label: "ARCHITECTURE STUDIO", description: "A considered portfolio for places that shape how people live and work.", business: "Form & Field", offer: "Spaces with a point of view.", services: ["Residential design", "Workplace projects", "Adaptive reuse", "Planning studies", "Interior architecture", "Project consultation"], action: "Start a project", tone: "We make enduring places by balancing imagination with what a site needs." },
  { id: "interior-design", name: "Interior Design", label: "INTERIOR DESIGN STUDIO", description: "Warm, livable interiors with a clear sense of material and place.", business: "Stillroom Interiors", offer: "A home that feels like you.", services: ["Full-service design", "Room refresh", "Space planning", "Color consultation", "Sourcing & styling", "Design management"], action: "Book a consultation", tone: "Personal spaces, layered slowly with useful details and lasting materials." },
  { id: "beauty-parlour", name: "Beauty Parlour", label: "BEAUTY & WELLNESS STUDIO", description: "A calm studio for considered treatments, skilled hands, and easy booking.", business: "Kindred Beauty", offer: "A little time for yourself.", services: ["Hair & styling", "Skin treatments", "Nails & care", "Makeup sessions", "Brows & lashes", "Wellness rituals"], action: "Book a treatment", tone: "Thoughtful rituals and a warm welcome, tailored to what feels right for you." },
  { id: "ecommerce", name: "E-commerce", label: "ONLINE STORE", description: "A shoppable storefront with clear collections and an easy demo cart.", business: "Everyday Objects", offer: "Made for the everyday.", services: ["New arrivals", "Travel goods", "Home essentials", "Best sellers", "Gift edit", "Our materials"], action: "Shop collection", tone: "Useful, well-made objects that earn their place in your daily routine." },
  { id: "electrical", name: "Electrical", label: "ELECTRICAL & ENERGY", description: "Professional electrical service for safer, smarter homes and workplaces.", business: "Brightline Electric", offer: "Powering what matters.", services: ["Electrical repairs", "Panel upgrades", "Lighting design", "EV charging", "Safety inspections", "Commercial systems"], action: "Request an estimate", tone: "Clear advice and dependable electrical work, planned around your property." }
];

export const designVariants = [
  { id: "01", name: "Studio Editorial", mode: "editorial", description: "An expressive, image-led editorial layout" },
  { id: "02", name: "Modern Essential", mode: "essential", description: "A crisp, practical split-layout experience" },
  { id: "03", name: "After Hours", mode: "immersive", description: "A cinematic, full-bleed brand experience" },
  { id: "04", name: "Field Notes", mode: "modular", description: "A lively modular grid with strong wayfinding" },
  { id: "05", name: "Quietly Considered", mode: "minimal", description: "A spacious, understated portfolio style" }
];

export const categories = industries.map((industry) => ({
  ...industry,
  image: `https://images.unsplash.com/${imageSets[industry.id][0]}?auto=format&fit=crop&w=900&q=80`,
  templates: designVariants.map((variant, index) => ({
    id: `${industry.id}-${variant.id}`,
    categoryId: industry.id,
    name: authoredTemplateMetadata[`${industry.id}-${variant.id}`]?.designName || variant.name,
    description: authoredTemplateMetadata[`${industry.id}-${variant.id}`]?.creativeConcept || variant.description,
    number: variant.id,
    mode: variant.mode,
    meta: authoredTemplateMetadata[`${industry.id}-${variant.id}`] || null,
    image: `https://images.unsplash.com/${imageSets[industry.id][index % imageSets[industry.id].length]}?auto=format&fit=crop&w=1000&q=80`,
    features: industry.services.slice(0, 4)
  }))
}));

export const findCategory = (categoryId) => categories.find((category) => category.id === categoryId);
export const findTemplate = (templateId) => categories.flatMap((category) => category.templates).find((template) => template.id === templateId);