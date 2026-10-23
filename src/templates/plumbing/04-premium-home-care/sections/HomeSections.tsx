import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";

const services = ["Fixture and finish updates", "Water heater care", "Drain and pipe attention", "Thoughtful repair planning"];
const questions = [
  ["Can I ask about one small detail?", "Yes. A sample project conversation can start with the detail that is bothering you most."],
  ["Will you protect the room while working?", "Describe the real provider’s preparation and protection process here once verified."],
  ["Are these project images from this business?", "No. These are illustrative template images and must be replaced with licensed, accurate project photography."]
];

export function Approach() {
  return <section className={styles.approach} id="approach"><span className={styles.eyebrow}>A ROOM IS MORE THAN ITS FIXTURES</span><p>Good home care respects what is already working. We listen first, explain the options, and make space for a repair that belongs in the room.</p><span>THE CLEARFLOW APPROACH · SAMPLE COPY</span></section>;
}

export function MaterialJournal() {
  return <section className={styles.journal}><div className={styles.journalIntro}><span className={styles.eyebrow}>MATERIALS / LIGHT / DAILY RITUAL</span><h2>Let the details<br/><em>do their work.</em></h2><p>A quiet journal of surfaces, fixtures, and familiar rooms. Example imagery only.</p><figure><img src={images[3].src} alt={images[3].alt} loading="lazy"/><figcaption>04 / STONE AND GROUT · SAMPLE</figcaption></figure></div><div className={styles.journalImages}><figure><img src={images[4].src} alt={images[4].alt} loading="lazy"/><figcaption>05 / NATURAL MATERIAL</figcaption></figure><figure><img src={images[5].src} alt={images[5].alt} loading="lazy"/><figcaption>06 / A ROOM TO KEEP</figcaption></figure></div></section>;
}

export function ServiceLedger({ onRequest }) {
  return <section className={styles.ledger} id="services"><div><span className={styles.eyebrow}>CARE FOR THE IMPORTANT CONNECTIONS</span><h2>Work, clearly<br/><em>considered.</em></h2><p>Sample service categories. The real business should verify scope, hours, and availability.</p></div><div className={styles.ledgerList}>{services.map((service, index) => <button key={service} onClick={onRequest}><span>0{index + 1}</span><b>{service}</b><ArrowUpRight size={15}/></button>)}</div><figure><img src={images[6].src} alt={images[6].alt} loading="lazy"/><figcaption>HOME / SAMPLE SETTING</figcaption></figure></section>;
}

export function ClientNote() {
  return <section className={styles.clientNote}><span className={styles.eyebrow}>A NOTE FROM A FICTIONAL CLIENT</span><blockquote>“They cared about how the room felt afterward, not only whether the tap worked.”</blockquote><small>ELENA & MARK · FICTIONAL SAMPLE</small></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="questions"><div><span className={styles.eyebrow}>A FEW CONSIDERED ANSWERS</span><h2>Before we<br/><em>begin.</em></h2></div><div>{questions.map(([question, answer], index) => <article key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={15}/> : <Plus size={15}/>}</button>{active === index && <p>{answer}</p>}</article>)}</div></section>;
}

export function Consultation({ onRequest }) {
  return <section className={styles.consultation} id="consultation"><div><span className={styles.eyebrow}>A FIRST CONVERSATION, WITHOUT THE RUSH</span><h2>Start with<br/><em>what matters.</em></h2><p>Tell us about the room, the routine, or the repair you have in mind.</p></div><div><span>DEMO SERVICE NOTES</span><b>Weekday availability · confirm with provider</b><small>Coverage area and contact information to be verified.</small><button onClick={onRequest}>Request a consultation <ArrowRight size={14}/></button></div></section>;
}