export const meta = {
  designName: "Industrial Flow",
  creativeConcept: "A plumbing system is treated as a readable P&ID: valves, branches, and service nodes reveal how the whole installation fits together.",
  signatureMoment: "An original schematic draws on load; valve nodes toggle system branches and update a concise service readout.",
  layoutType: "dark technical board with schematic and specification rail",
  navigationType: "fixed bottom engineering dock with coordinate labels",
  heroType: "large P&ID schematic with toggleable valves",
  footerType: "engineering title block with drawing metadata",
  sectionOrder: ["pid-board", "valve-explorer", "maintenance-sequence", "equipment-gallery", "system-faq", "project-brief"],
  motionStyle: "mechanical path draw, steady pulse cadence, and short valve-state snaps",
  interactionType: "toggleable valves, system readout, process tabs, validated project brief",
  colorPalette: { primary: "graphite", secondary: "drawing-black", accent: "safety amber", surface: "technical grid", ink: "blueprint cyan" },
  typography: { display: "Barlow Condensed", body: "IBM Plex Mono", scale: "dense schematic labels with monumental condensed headings" },
  animations: [
    { name: "pid-line-draw", file: "style.module.css" },
    { name: "flow-pulse", file: "style.module.css" },
    { name: "valve-snap", file: "style.module.css" },
    { name: "readout-blink", file: "style.module.css" }
  ],
  reducedMotionStrategy: "Render completed paths and static readout; valve toggles remain explicit and keyboard operable.",
  mobileStrategy: "Replace bottom dock with a compact scrollable top index and stack schematic readouts below the drawing."
};