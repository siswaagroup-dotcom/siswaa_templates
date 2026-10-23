export const meta = {
  designName: "Water in Motion",
  creativeConcept: "A plumbing visit is a small restoration of flow, told through a falling drop, expanding ripples, and objects rising into view.",
  signatureMoment: "A water drop falls and ripples across the hero on load; pointer movement leaves brief rings, and service tiles lift like objects surfacing.",
  layoutType: "fluid editorial canvas with surfacing service deck",
  navigationType: "floating pill that hides while scrolling down and returns while scrolling up",
  heroType: "full-bleed water photograph with animated drop and pointer ripples",
  footerType: "deep-water contact basin with concise service links",
  sectionOrder: ["water-hero", "flow-manifesto", "surfacing-services", "repair-stories", "work-gallery", "faq", "request-form"],
  motionStyle: "slow buoyant cubic easing, long ripple decay, and one 6-second water cycle",
  interactionType: "pointer ripple field, surfacing hover cards, FAQ disclosure, validated estimate request",
  colorPalette: { primary: "deep teal", secondary: "mist", accent: "copper", surface: "pale water", ink: "river stone" },
  typography: { display: "DM Serif Display", body: "Manrope", scale: "large fluid headline with narrow technical captions" },
  animations: [
    { name: "drop-cycle", file: "style.module.css" },
    { name: "hero-ripple", file: "style.module.css" },
    { name: "pointer-ring", file: "Hero.tsx and style.module.css" },
    { name: "service-surface", file: "style.module.css" },
    { name: "nav-drift", file: "Header.tsx" }
  ],
  reducedMotionStrategy: "Hold the drop and rings in a still composition, disable lift transitions, and preserve all controls.",
  mobileStrategy: "Convert the floating pill to a compact menu button, stack service tiles, and keep pointer ripples touch-triggered."
};