import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { FieldNotes, Pack, RouteMap, TrailStory } from "./sections/Trail";
import styles from "./style.module.css";

export default function LittleWildOnes() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const open = () => { setSent(false); setRequestOpen(true); };
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <div className={styles.site}>
    <div className={styles.notice}><span/> AN OPEN FIELD GUIDE <b>·</b> SAMPLE VETERINARY WEBSITE CONCEPT</div>
    <Header onRequest={open}/>
    <main><Hero/><RouteMap/><Pack/><FieldNotes/><TrailStory/><section className={styles.closing}><span className={styles.coordinate}>YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready when<br/><em>you are.</em></h2><p>A first visit can begin with one small question. Tell us what would help your companion feel at ease.</p><button onClick={open}>Plan a first visit <ArrowRight size={15}/></button></section></main>
    <Footer onRequest={open}/>
    <div className={styles.disclaimer}>Sample website preview · business details, images, and stories are illustrative, not verified claims.</div>
    {requestOpen && <div className={styles.backdrop} onClick={() => setRequestOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="trail-request" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close request" onClick={() => setRequestOpen(false)}><X size={18}/></button>{sent ? <div role="status"><Check size={24}/><h2 id="trail-request">Request prepared.</h2><p>This is a front-end demo; nothing was sent or booked.</p></div> : <><span className={styles.coordinate}>A SMALL STEP / DEMO FORM</span><h2 id="trail-request">Tell us a little.</h2><form onSubmit={submit}><label>Your name<input required autoComplete="name" placeholder="Name"/></label><label>Email<input type="email" required autoComplete="email" placeholder="you@example.com"/></label><label>What would make the visit easier?<textarea rows="3" placeholder="A little about your companion"/></label><button type="submit">Prepare demo request <ArrowRight size={14}/></button></form><small>No appointment is booked. Replace sample details before launch.</small></>}</section></div>}
  </div>;
}
