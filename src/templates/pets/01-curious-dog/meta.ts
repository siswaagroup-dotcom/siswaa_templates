export const meta = {
  designName: "The Curious Dog",
  creativeConcept: "A companion's curiosity becomes the clinic's welcome; an illustrated dog looks back before the visitor has to ask for help.",
  signatureMoment: "An original dog illustration follows both a floating ball and pointer movement, wags its tail, and reacts to a click.",
  layoutType: "portrait-led split with care ledger and editorial story",
  navigationType: "quiet wordmark with inline links and compact mobile menu",
  heroType: "animated illustrated scene with editorial copy",
  footerType: "warm dark studio close with location details",
  sectionOrder: ["curious-hero", "care-ledger", "whole-pet-story", "companion-gallery", "fictional-note", "faq", "visit-details"],
  motionStyle: "soft orbit, elastic tail rhythm, and pointer-led gaze",
  interactionType: "pointer tracking, click reaction, menu disclosure, FAQ, validated request form",
  colorPalette: { primary: "moss", secondary: "warm paper", accent: "tomato", surface: "sage", ink: "deep green" },
  typography: { display: "Fraunces", body: "DM Sans", scale: "editorial headline with compact mono labels" },
  animations: [
    { name: "ball-orbit", file: "style.module.css" },
    { name: "tail-wag", file: "style.module.css" },
    { name: "sun-pulse", file: "style.module.css" },
    { name: "dog-reaction", file: "style.module.css" }
  ],
  reducedMotionStrategy: "Freeze orbit, wag, and decorative pulses; pointer tracking and semantic interactions remain available.",
  mobileStrategy: "Stack illustrated hero, switch navigation to a disclosure menu, and retain touch-safe controls."
};