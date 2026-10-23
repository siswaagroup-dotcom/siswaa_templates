import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { images } from "./images";
import styles from "./style.module.css";

export default function Hero({ onRequest }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % 2), 5400);
    return () => window.clearInterval(timer);
  }, []);
  return <section className={styles.hero} id="clinic-home"><div className={styles.heroImages}>{[images[0], images[3]].map((image, index) => <img key={image.role} className={`${styles.heroImage} ${active === index ? styles.heroImageActive : ""}`} src={image.src} alt={image.alt} fetchpriority={index === 0 ? "high" : undefined}/>)}</div><div className={styles.heroShade}/><div className={styles.heroCopy}><span className={styles.eyebrow}><i/> A CLINIC THAT STARTS BY LISTENING</span><h1>Care is a<br/><em>conversation.</em></h1><p>Thoughtful, modern care built around real people and the questions that matter to them.</p><div className={styles.heroActions}><button onClick={onRequest}>Request an appointment <ArrowUpRight size={14}/></button><a href="#approach">A little about us <ArrowDown size={13}/></a></div><span className={styles.heroCredit}>NORTHSTAR CLINIC · SAMPLE WEBSITE CONCEPT</span></div><div className={styles.heroProgress}><span>01 / 02</span><i style={{ "--active-slide": active }}/></div></section>;
}