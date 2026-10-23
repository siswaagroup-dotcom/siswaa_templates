export const meta = {
  designName: "Pipe Explorer",
  creativeConcept: "A house cross-section turns hidden plumbing into an understandable map: choose a pipe, see the related service, and follow its route.",
  signatureMoment: "The house-and-pipe diagram draws on load; selecting a pipe zone illuminates its route and updates a service detail panel.",
  layoutType: "technical blueprint with interactive cross-section and diagnostic timeline",
  navigationType: "fixed right-edge vertical text index",
  heroType: "SVG house cutaway with clickable pipe network",
  footerType: "blueprint title block with project inquiry rail",
  sectionOrder: ["diagram-hero", "pipe-zone-explorer", "diagnostic-timeline", "service-area-grid", "repair-gallery", "faq", "project-inquiry"],
  motionStyle: "precise line draw, controlled dash flow, and short technical state changes",
  interactionType: "clickable pipe zones, service panel updates, FAQ disclosure, validated inquiry form",
  colorPalette: { primary: "blueprint navy", secondary: "chalk", accent: "signal cyan", surface: "grid blue", ink: "technical white" },
  typography: { display: "Rajdhani", body: "Source Sans 3", scale: "oversized technical labels and compact coordinate notes" },
  animations: [
    { name: "house-outline-draw", file: "style.module.css" },
    { name: "pipe-flow", file: "style.module.css" },
    { name: "zone-highlight", file: "style.module.css" }
  ],
  reducedMotionStrategy: "Show the full diagram and selected pipe state without path or dash animation.",
  mobileStrategy: "Move the right-side index into a horizontal top selector and stack map zones beneath the SVG."
};