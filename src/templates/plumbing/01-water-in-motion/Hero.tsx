import React, { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { images } from "./images";
import styles from "./style.module.css";

export default function Hero({ onRequest }) {
  const heroRef = useRef(null);
  const lastRipple = useRef(0);
  const createRipple = (event) => {
    if (event.type === "pointermove" && Date.now() - lastRipple.current < 180) return;
    lastRipple.current = Date.now();
    const bounds = heroRef.current.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = styles.pointerRipple;
    ripple.style.left = `${event.clientX - bounds.left}px`;
    ripple.style.top = `${event.clientY - bounds.top}px`;
    heroRef.current.append(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  };
  return <section className={styles.hero} id="water-home" ref={heroRef} onPointerMove={createRipple} onClick={createRipple}>
    <img className={styles.heroImage} src={images[0].src} alt={images[0].alt} fetchpriority="high"/>
    <div className={styles.heroWash}/><span className={styles.drop}/><span className={styles.landingRipple}/>
    <div className={styles.heroCopy}><span className={styles.eyebrow}><i/> FLOW, RESTORED</span><h1>Good water.<br/><em>Good days.</em></h1><p>Thoughtful plumbing for the small fixes and big refreshes that keep a home feeling like home.</p><div className={styles.heroActions}><button onClick={(event) => { event.stopPropagation(); onRequest(); }}>Tell us what is happening <ArrowUpRight size={15}/></button><a href="#services">See what we do <ArrowDown size={14}/></a></div><span className={styles.heroFootnote}>CLEARFLOW · SAMPLE BUSINESS CONCEPT</span></div>
    <div className={styles.heroCaption}><span>01 / CLEARFLOW PLUMBING · SAMPLE BUSINESS</span><span>LOCAL SERVICE CONCEPT · DETAILS TO BE CONFIRMED</span></div>
  </section>;
}