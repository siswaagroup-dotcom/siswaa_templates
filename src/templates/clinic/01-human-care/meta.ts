export const meta = {
  designName: "Human Care",
  creativeConcept: "A clinic is introduced through the quiet human moments around care, with listening and clear next steps as the main story.",
  signatureMoment: "The hero crossfades between two documentary consultation images with a slow Ken Burns drift; story scenes reveal as they enter view.",
  layoutType: "documentary care story with pinned portrait scenes",
  navigationType: "floating quiet pill that hides while scrolling down and returns on upward scroll",
  heroType: "full-screen crossfading human-care photography",
  footerType: "warm patient-information close with direct appointment request",
  sectionOrder: ["human-hero", "care-statement", "sticky-story-scenes", "care-team-reveal", "patient-notes", "faq", "appointment-close"],
  motionStyle: "slow crossfade, subtle Ken Burns drift, and brief documentary scene holds",
  interactionType: "scroll-aware nav, story progression, FAQ disclosure, validated appointment request",
  colorPalette: { primary: "forest teal", secondary: "porcelain", accent: "soft coral", surface: "mist", ink: "deep green" },
  typography: { display: "Newsreader", body: "DM Sans", scale: "editorial statement with generous patient-readable text" },
  animations: [
    { name: "hero-crossfade", file: "Hero.tsx and style.module.css" },
    { name: "ken-burns", file: "style.module.css" },
    { name: "story-reveal", file: "StoryScenes.tsx and style.module.css" },
    { name: "team-arrive", file: "style.module.css" }
  ],
  reducedMotionStrategy: "Freeze hero images on a clear still frame and remove reveal transforms while preserving scene order.",
  mobileStrategy: "Keep full-bleed hero with readable scrim, stack story scenes, and use a compact mobile navigation disclosure."
};