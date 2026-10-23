import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";

const phases = ["Survey", "Trace", "Plan", "Review"];
const questions = [
  ["Is this P&ID drawing a real installation plan?", "No. The drawing is original illustrative artwork for the template and is not suitable for construction or safety decisions."],
  ["Do the valve controls operate physical equipment?", "No. They update only this browser demo and are not connected to any real plumbing system."],
  ["Are project details and credentials verified?", "No. Replace the sample business information and imagery with verified details before launch."]
];

export function Maintenance() {
  const [phase, setPhase] = useState(0);
  return <section className={styles.maintenance} id="maintenance"><div className={styles.maintenanceHeading}><span className={styles.coordinate}>SERVICE SEQUENCE / 04</span><h2>Work the<br/><em>problem through.</em></h2><p>A measured review before any real repair plan is agreed.</p></div><div className={styles.phaseRail}>{phases.map((item, index) => <button key={item} aria-pressed={phase === index} className={phase === index ? styles.phaseActive : ""} onClick={() => setPhase(index)}><span>0{index + 1}</span><b>{item}</b></button>)}</div><div className={styles.phaseReadout} aria-live="polite"><span>ACTIVE STEP / 0{phase + 1}</span><h3>{["Survey the visible system", "Trace the connected line", "Plan work in clear language", "Review the agreed outcome"][phase]}</h3><p>{["Begin with what can be seen and what has changed.", "A qualified provider can follow the installation and explain findings.", "Review scope and options before deciding how to proceed.", "Record the work completed and the next maintenance note."][phase]}</p></div></section>;
}

export function Equipment() {
  return <section className={styles.equipment} id="equipment"><div className={styles.equipmentHeader}><span className={styles.coordinate}>SHOP FLOOR / IMAGE NOTES</span><h2>Tools, access,<br/><em>careful work.</em></h2><span>DEMO IMAGES · NOT A PORTFOLIO CLAIM</span></div><div className={styles.equipmentGrid}>{images.slice(1).map((image, index) => <figure key={image.role}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>05.{index + 1} / {image.role.toUpperCase()}</figcaption></figure>)}</div></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="faq"><div><span className={styles.coordinate}>NOTES / FAQ</span><h2>Clear the<br/><em>assumptions.</em></h2></div><div>{questions.map(([question, answer], index) => <article key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={14}/> : <Plus size={14}/>}</button>{active === index && <p>{answer}</p>}</article>)}</div></section>;
}

export function ProjectBrief({ onRequest }) {
  return <section className={styles.projectBrief} id="project-brief"><div><span className={styles.coordinate}>NEXT DRAWING / PROJECT BRIEF</span><h2>Start with<br/><em>the system.</em></h2><p>Share the question you would like a real plumbing provider to review.</p></div><button onClick={onRequest}>Create a demo brief <ArrowUpRight size={14}/></button></section>;
}

export function TitleBlock({ onRequest }) {
  return <footer className={styles.footer}><div className={styles.titleBlock}><span>OWNER</span><b>CLEARFLOW SYSTEMS</b><span>DRAWING TITLE</span><b>INDUSTRIAL FLOW / RESIDENTIAL</b></div><div className={styles.drawingData}><span>DWG NO. CF-05</span><span>ISSUE: DEMO</span><span>SCALE: NTS</span></div><button onClick={onRequest}>PROJECT INQUIRY <ArrowUpRight size={12}/></button><small>Illustrative schematic only · no real installation data shown.</small></footer>;
}