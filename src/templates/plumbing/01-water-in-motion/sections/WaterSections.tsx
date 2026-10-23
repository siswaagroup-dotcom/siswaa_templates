import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";

const serviceItems = [
  ["01", "Find the leak", "A careful check to understand what is happening before work begins."],
  ["02", "Clear the way", "Drain and pipe care with a practical explanation of the next step."],
  ["03", "Bring the heat back", "Water heater service planned around your home and routine."],
  ["04", "Make room for better", "Fixture and bathroom updates, considered from connection to finish."]
];
const questions = [
  ["What happens after I send a request?", "This preview shows a sample request flow only. Connect your own scheduling or service system before launch."],
  ["Can I ask about a small repair?", "Yes. Share what you have noticed and the sample team can follow up once a real contact integration is configured."],
  ["Are these service details verified?", "No. Clearflow is a fictional demo business. Replace all service details and hours with confirmed information before publishing."]
];

export function FlowNote() {
  return <section className={styles.flowNote} id="flow"><span className={styles.eyebrow}>A LITTLE LESS DRIP. A LOT MORE EASE.</span><p>First we listen. Then we find the source. Then the water can get back to doing what it should.</p><img src={images[1].src} alt={images[1].alt} loading="lazy"/><span>THE CLEARFLOW WAY · SAMPLE COPY</span></section>;
}

export function Services({ onRequest }) {
  return <section className={styles.services} id="services"><div className={styles.sectionLead}><span className={styles.eyebrow}>SERVICES THAT SURFACE WHEN YOU NEED THEM</span><h2>Let’s get things<br/><em>moving again.</em></h2><p>Clear choices for the plumbing work that makes a difference to everyday life.</p></div><div className={styles.serviceDeck}>{serviceItems.map(([number, title, description], index) => <article className={styles.serviceCard} key={number} style={{ "--surface-delay": `${index * 90}ms` }}><span>{number} / HOME CARE</span><h3>{title}</h3><p>{description}</p><button aria-label={`Ask about ${title}`} onClick={onRequest}><ArrowUpRight size={17}/></button></article>)}</div></section>;
}

export function RepairStories() {
  return <section className={styles.repairStories}><div><span className={styles.eyebrow}>REPAIR IS A KIND OF RESTORATION</span><h2>The fix should feel<br/><em>as clear as the flow.</em></h2><p>We explain the likely options before beginning, so the work and the decision both feel manageable.</p><a href="#request">How a visit works <ArrowRight size={14}/></a></div><figure><img src={images[2].src} alt={images[2].alt} loading="lazy"/><figcaption>LISTEN · CHECK · EXPLAIN · REPAIR</figcaption></figure></section>;
}

export function WorkGallery() {
  return <section className={styles.workGallery} id="work"><div className={styles.galleryHead}><span className={styles.eyebrow}>A FEW DETAILS FROM THE WATERLINE</span><h2>Useful things, <em>well finished.</em></h2><span>ILLUSTRATIVE PROJECT IMAGERY</span></div><div className={styles.galleryRail}>{images.slice(3, 8).map((image, index) => <figure key={image.role}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>0{index + 1} / {image.role.toUpperCase()}</figcaption></figure>)}</div></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="questions"><div><span className={styles.eyebrow}>GOOD TO KNOW</span><h2>Water under<br/><em>the bridge.</em></h2><p>A few answers to make the first conversation easier.</p></div><div>{questions.map(([question, answer], index) => <article key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={15}/> : <Plus size={15}/>}</button>{active === index && <p>{answer}</p>}</article>)}</div></section>;
}

export function Contact({ onRequest }) {
  return <section className={styles.contact} id="request"><div><span className={styles.eyebrow}>START WITH A SHORT NOTE</span><h2>Let’s find<br/><em>the source.</em></h2><p>Use the request form to describe what you are noticing. It will show a local demo success state and will not contact a real provider.</p></div><address><b>SAMPLE SERVICE WINDOW</b><span>Weekdays · hours to be confirmed</span><span>Service area · set by the business owner</span><button onClick={onRequest}>Prepare a request <ArrowUpRight size={15}/></button></address></section>;
}