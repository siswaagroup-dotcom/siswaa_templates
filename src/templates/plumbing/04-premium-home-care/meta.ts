export const meta = {
  designName: "Premium Home Care",
  creativeConcept: "Plumbing is part of the considered home: a repair should restore function while respecting the material and rhythm of a lived-in space.",
  signatureMoment: "A keyboard- and touch-operable before/after reveal lets visitors compare a fixture refresh through a tactile slider.",
  layoutType: "asymmetrical home journal with tactile comparison",
  navigationType: "editorial masthead with restrained anchored links",
  heroType: "split luxury home portrait with understated wordmark",
  footerType: "quiet consultation colophon with direct inquiry",
  sectionOrder: ["home-portrait", "care-principles", "before-after-slider", "material-journal", "service-ledger", "faq", "consultation-close"],
  motionStyle: "slow clip reveals, soft editorial drift, and direct slider movement",
  interactionType: "before/after slider, service-ledger links, FAQ disclosure, consultation form",
  colorPalette: { primary: "ink green", secondary: "chalk", accent: "clay", surface: "limestone", ink: "deep olive" },
  typography: { display: "Cormorant Garamond", body: "DM Sans", scale: "oversized editorial serif with small spaced captions" },
  animations: [
    { name: "portrait-drift", file: "style.module.css" },
    { name: "editorial-reveal", file: "style.module.css" },
    { name: "slider-handle", file: "Hero.tsx and style.module.css" }
  ],
  reducedMotionStrategy: "Disable image drift and clip transitions while keeping the range input fully functional.",
  mobileStrategy: "Stack the masthead and editorial images; preserve the before/after control as a wide touch slider."
};