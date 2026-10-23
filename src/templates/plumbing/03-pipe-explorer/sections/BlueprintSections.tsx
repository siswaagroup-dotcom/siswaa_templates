import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";

const steps = ["Observe", "Trace", "Explain", "Resolve"];
const answers = [
  ["Can this diagram be used as a building plan?", "No. It is an original illustrative schematic for a sample website, not a construction or safety document."],
  ["Will a zone selection contact a plumber?", "No. Zone selection updates the page only. Connect a verified service system to receive real inquiries."],
  ["Are the home details verified?", "No. The business and service details are placeholders that must be replaced with confirmed information."]
];

export function Process() {
  const [step, setStep] = useState(0);
  return <section className={styles.process} id="process"><div className={styles.processHeading}><span className={styles.coordinate}>FIELD METHOD / 04 STEPS</span><h2>A measured<br/><em>diagnostic.</em></h2><p>Move through the sample process. Each step updates the working note.</p></div><div className={styles.stepper}>{steps.map((label, index) => <button key={label} className={index === step ? styles.stepActive : ""} onClick={() => setStep(index)}><span>0{index + 1}</span><b>{label}</b></button>)}</div><div className={styles.stepNote} aria-live="polite"><span>NOTE / {String(step + 1).padStart(2, "0")}</span><h3>{["Start with what is visible.", "Follow the route with care.", "Lay out useful options.", "Confirm the next action."][step]}</h3><p>{["Share what has changed and when you first noticed it.", "A professional can trace the system and explain what they find.", "Understand the proposed work before deciding how to proceed.", "Review the result and leave with a clear summary."][step]}</p><ArrowRight size={17}/></div></section>;
}

export function ServiceArea({ onRequest }) {
  return <section className={styles.serviceArea} id="area"><div><span className={styles.coordinate}>FIELD NOTES / COVERAGE</span><h2>Map the<br/><em>known lines.</em></h2><p>Use this panel for a verified service area, contact window, and access notes.</p><button onClick={onRequest}>Ask about your area <ArrowUpRight size={14}/></button></div><figure><img src={images[6].src} alt={images[6].alt} loading="lazy"/><figcaption>AREA / OWNER-VERIFIED DETAILS REQUIRED</figcaption></figure></section>;
}

export function Gallery() {
  return <section className={styles.gallery} id="work"><div className={styles.galleryTitle}><span className={styles.coordinate}>DETAILS / SAMPLE IMAGE SET</span><h2>Material and<br/><em>maintenance.</em></h2><span>FIG. 03B—03F</span></div><div className={styles.galleryGrid}>{images.slice(1, 6).map((image, index) => <figure key={image.role}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>03.{index + 1} / {image.role.toUpperCase()}</figcaption></figure>)}</div></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="faq"><div><span className={styles.coordinate}>SPEC NOTES / FAQ</span><h2>Read the<br/><em>fine line.</em></h2></div><div>{answers.map(([question, answer], index) => <article key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={15}/> : <Plus size={15}/>}</button>{active === index && <p>{answer}</p>}</article>)}</div></section>;
}

export function Inquiry({ onRequest }) {
  return <section className={styles.inquiry} id="contact"><div><span className={styles.coordinate}>PROJECT INQUIRY / START HERE</span><h2>Bring a question.<br/><em>We’ll map it.</em></h2><p>Share what is happening, and let the real provider replace this sample inquiry workflow with verified contact details.</p></div><button onClick={onRequest}>Open inquiry form <ArrowUpRight size={14}/></button></section>;
}

