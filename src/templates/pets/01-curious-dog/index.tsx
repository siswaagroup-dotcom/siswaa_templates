import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Care, CompanionGallery, Story } from "./sections/Care";
import { ClientNote, FAQ, Visit } from "./sections/Stories";
import styles from "./style.module.css";

export default function CuriousDogTemplate({ businessName = "Paw & Whisker" }) {
  const [requestOpen, setRequestOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const openRequest = () => { setSent(false); setRequestOpen(true); };
  const submitRequest = (event) => { event.preventDefault(); setSent(true); };
  return <div className={styles.site}>
    <div className={styles.announcement}><span/> SAMPLE WEBSITE CONCEPT <b>·</b> GENTLE CARE FOR EVERY KIND OF COMPANION</div>
    <Header onRequest={openRequest}/>
    <main>
      <Hero onRequest={openRequest}/>
      <Care/>
      <Story/>
      <CompanionGallery/>
      <ClientNote/>
      <FAQ/>
      <Visit onRequest={openRequest}/>
    </main>
    <Footer/>
    <div className={styles.disclaimer}>Sample preview · imagery and business details are illustrative, not verified claims.</div>
    {requestOpen && <div className={styles.backdrop} onClick={() => setRequestOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="request-title" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close request form" onClick={() => setRequestOpen(false)}><X size={18}/></button>{sent ? <div className={styles.success} role="status"><Check size={25}/><h2 id="request-title">Request prepared.</h2><p>This demo has not sent anything to a real clinic.</p><button onClick={() => setRequestOpen(false)}>Close</button></div> : <><span className={styles.eyebrow}>FRONTEND-ONLY DEMO</span><h2 id="request-title">A good place<br/>to <em>begin.</em></h2><p>Share a few details with {businessName}. No booking will be made.</p><form onSubmit={submitRequest}><label>Your name<input autoComplete="name" required placeholder="Name"/></label><label>Email<input type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>What would help today?<select required defaultValue=""><option value="" disabled>Select a starting point</option><option>Wellness visit</option><option>New-pet questions</option><option>Something else</option></select></label><button type="submit">Prepare demo request <ArrowRight size={15}/></button></form></>}</section></div>}
  </div>;
}