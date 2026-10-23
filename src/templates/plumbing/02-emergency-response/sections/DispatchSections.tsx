import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, CircleAlert, Plus, X } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";
import routeMotion from "../route-motion.module.css";

const joints = [
  ["01", "Stop the leak", "Share what you can see; avoid unsafe access to water or electrical equipment."],
  ["02", "Find the source", "A qualified professional can assess the issue and explain the available options."],
  ["03", "Restore the line", "Agree the next step before repair work begins."],
  ["04", "Check the finish", "Review what was done and receive clear care notes."]
];
const faqs = [
  ["Is this a live emergency number?", "No. This is a design preview. The call action only displays a demo notice; no call is placed."],
  ["Does this page promise a response time?", "No. Timing depends on the real provider and location. Add verified service details before launch."],
  ["What if I am not sure what is wrong?", "Describe what you notice in the demo form. It is not sent until connected to a real service system."]
];

export function RouteServices({ selected, setSelected, onRequest }) {
  const routeRef = useRef(null);
  const [routeVisible, setRouteVisible] = useState(false);
  useEffect(() => {
    const route = routeRef.current;
    if (!route) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRouteVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(route);
    return () => observer.disconnect();
  }, []);
  return <section className={styles.routeSection} id="route"><div className={styles.routeIntro}><span className={styles.eyebrow}>A CLEAR ROUTE THROUGH A MESSY MOMENT</span><h2>Follow the<br/><em>next step.</em></h2><p>Choose a junction to see how a sample dispatch can guide the conversation.</p></div><div ref={routeRef} className={`${styles.pipeRoute} ${routeVisible ? styles.routeVisible : ""} ${routeVisible ? routeMotion.visible : routeMotion.pending}`} aria-hidden="true"><svg viewBox="0 0 600 500" preserveAspectRatio="none"><path className={`${styles.pipeTrack} ${routeMotion.track}`} d="M100 0 V115 H490 V240 H150 V365 H510 V500"/><path className={styles.flowDash} d="M100 0 V115 H490 V240 H150 V365 H510 V500"/></svg>{joints.map(([number, title], index) => <button key={number} className={`${styles.joint} ${selected === index ? styles.jointActive : ""}`} style={{ "--joint-index": index }} onClick={() => setSelected(index)}><span>{number}</span><b>{title}</b></button>)}</div><div className={styles.jointDetail} aria-live="polite"><span>{joints[selected][0]} / DISPATCH JOINT</span><h3>{joints[selected][1]}</h3><p>{joints[selected][2]}</p><button onClick={onRequest}>Describe the issue <ArrowRight size={14}/></button></div></section>;
}

export function ServiceWindow({ onRequest }) {
  return <section className={styles.serviceWindow} id="services"><div><span className={styles.eyebrow}>SUPPORT FOR THE UNEXPECTED</span><h2>Home service,<br/><em>with a plan.</em></h2><p>Sample categories for a plumbing business. The business owner should replace these details with its real service offering.</p></div><div className={styles.serviceRows}>{["Leaks and pipe concerns", "Drain and water flow", "Water heater issues", "Fixture and shutoff repair"].map((item, index) => <button key={item} onClick={onRequest}><span>0{index + 1}</span><b>{item}</b><ArrowUpRight size={16}/></button>)}</div></section>;
}

export function Coverage({ onRequest }) {
  return <section className={styles.coverage} id="area"><div className={styles.coverageVisual}><img src={images[5].src} alt={images[5].alt} loading="lazy"/><div className={styles.coverageGrid}/><span>AREA MAP · PLACEHOLDER</span></div><div><span className={styles.eyebrow}>LOCAL DETAILS BELONG HERE</span><h2>Know where<br/>help <em>starts.</em></h2><p>Replace this placeholder with verified neighborhoods, hours, and contact information for the real provider.</p><button onClick={onRequest}>Ask about coverage <ArrowUpRight size={14}/></button></div></section>;
}

export function RepairProof() {
  return <section className={styles.repairProof}><div className={styles.proofHeading}><span className={styles.eyebrow}>MAKE THE WORK LEGIBLE</span><h2>Clarity at<br/><em>every joint.</em></h2></div><div className={styles.proofCards}>{images.slice(1, 5).map((image, index) => <figure key={image.role}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>0{index + 1} / {image.role.toUpperCase()}</figcaption></figure>)}</div></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="faq"><div><CircleAlert size={18}/><span className={styles.eyebrow}>IMPORTANT TO KNOW</span><h2>Steady info<br/><em>under pressure.</em></h2></div><div>{faqs.map(([question, answer], index) => <article key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={15}/> : <Plus size={15}/>}</button>{active === index && <p>{answer}</p>}</article>)}</div></section>;
}

export function DispatchFooter({ onRequest }) {
  return <footer className={styles.footer}><div><b>CLEARFLOW / RESPONSE</b><small>Sample plumbing concept · not a live provider</small></div><nav><a href="#route">Route</a><a href="#services">Services</a><a href="#faq">Safety notes</a></nav><button onClick={onRequest}>Open a request <ArrowUpRight size={13}/></button><span>Replace all operational claims with verified business information.</span></footer>;
}