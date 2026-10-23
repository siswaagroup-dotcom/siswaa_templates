export const meta = {
  designName: "Little Wild Ones",
  creativeConcept: "A veterinary visit becomes a three-stop trail where each pawprint marks a calm, understandable next step.",
  signatureMoment: "A canvas trail character follows pointer position while animated route markers pulse; selecting a stop updates its field note.",
  layoutType: "landscape route map with field-note panels",
  navigationType: "vertical expedition side rail",
  heroType: "panoramic illustrated trail scene",
  footerType: "compact expedition log footer",
  sectionOrder: ["landscape-trail", "three-stop-route", "pack-profiles", "care-field-notes", "fictional-story", "visit-log"],
  motionStyle: "drawn route stroke and elastic trail-marker pacing",
  interactionType: "pointer-following traveler, selectable route markers, mobile menu, validated demo inquiry",
  colorPalette: { primary: "fern", secondary: "parchment", accent: "rust", surface: "meadow", ink: "pine" },
  typography: { display: "DM Serif Display", body: "Outfit", scale: "oversized field-note heading with compact coordinates" },
  animations: [{ name: "trail-walk", file: "style.module.css" }, { name: "route-draw", file: "style.module.css" }, { name: "marker-breathe", file: "style.module.css" }],
  reducedMotionStrategy: "Freeze route drawing and marker breathing while keeping the selected route and pointer-independent controls available.",
  mobileStrategy: "Convert the vertical expedition rail into a compact top navigation and stack the route stops."
};
