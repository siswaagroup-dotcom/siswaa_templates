import React, { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import styles from "../style.module.css";

const faqs = [
  ["What should I bring to a first visit?", "Bring any records you have, a list of current medicines, and a few notes about what you would like us to know."],
  ["Can I ask a question before booking?", "Yes. Use the request form to share a note. It is a front-end demonstration and does not contact a clinic."],
  ["Is this a real veterinary clinic?", "No. This is an illustrative website concept. Replace business details with verified information before launch."]
];

export function ClientNote() {
  return <section className={styles.clientNote}><span className={styles.eyebrow}>A KIND WORD · FICTIONAL DEMO</span><blockquote>“We had time to settle in, ask every question, and let Maple explore the room first.”</blockquote><span>JAMIE & MAPLE · SAMPLE STORY</span></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="faq"><div><span className={styles.eyebrow}>A FEW THINGS PEOPLE ASK</span><h2>Good to <em>know.</em></h2></div><div className={styles.faqList}>{faqs.map(([question, answer], index) => <div key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={15}/> : <Plus size={15}/>}</button>{active === index && <p>{answer}</p>}</div>)}</div></section>;
}

export function Visit({ onRequest }) {
  return <section className={styles.visit} id="visit"><div><span className={styles.eyebrow}>YOUR NEXT STEP CAN BE A SMALL ONE</span><h2>Come say <em>hello.</em></h2><p>Tell us a little about your companion and we can help plan a comfortable first visit.</p><button className={styles.lightButton} onClick={onRequest}>Start a request <ArrowRight size={15}/></button></div><address><b>GOOD TO KNOW</b><span>Weekdays · 8:30 am — 5:30 pm</span><span>Sample hours · confirm before launch</span><a href="#curious-home">Back to the top ↑</a></address></section>;
}