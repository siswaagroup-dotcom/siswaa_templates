import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import styles from "./style.module.css";
import { images } from "./images";

export default function Hero({ onRequest, onCall }) {
  const [callNote, setCallNote] = useState(false);
  return <section className={styles.hero} id="dispatch-home">
    <div className={styles.heroGrid}/><div className={styles.heroCopy}><span className={styles.eyebrow}><i/> PRIORITY SERVICE · DEMO CONCEPT</span><h1>When water<br/>won’t <em>wait.</em></h1><p>Clear next steps for urgent home plumbing issues. This sample service is illustrative and is not a live dispatch provider.</p><div className={styles.heroActions}><button className={styles.urgentCall} onClick={() => { setCallNote(true); onCall(); }}><Phone size={17}/> Call the sample line <span>↗</span></button><button className={styles.outlineAction} onClick={onRequest}>Send a request <ArrowUpRight size={15}/></button></div>{callNote && <span className={styles.callNote} role="status">Demo only · no call was placed.</span>}<a className={styles.scrollCue} href="#route">FOLLOW THE PIPE <ArrowDown size={13}/></a></div>
    <figure className={styles.heroImage}><img src={images[0].src} alt={images[0].alt} fetchpriority="high"/><figcaption>RESPONSE FLOW · SAMPLE SERVICE MODEL</figcaption></figure>
    <div className={styles.statusCard}><span className={styles.pulseDot}/><b>Dispatch status</b><span>Demo preview · not live</span><small>Availability is not represented.</small></div>
  </section>;
}