import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Contact, FAQ, FlowNote, RepairStories, Services, WorkGallery } from "./sections/WaterSections";
import styles from "./style.module.css";

export default function WaterInMotion({ businessName = "Clearflow Plumbing" }) {
  const [requestOpen, setRequestOpen] = useState(false);
  const [complete, setComplete] = useState(false);
  const openRequest = () => { setComplete(false); setRequestOpen(true); };
  const submitRequest = (event) => { event.preventDefault(); setComplete(true); };
  return <div className={styles.site}>
    <Header onRequest={openRequest}/>
    <main>
      <Hero onRequest={openRequest}/><FlowNote/><Services onRequest={openRequest}/><RepairStories/><WorkGallery/><FAQ/><Contact onRequest={openRequest}/>
    </main>
    <Footer onRequest={openRequest}/>
    <div className={styles.disclaimer}>Sample plumbing website · imagery, claims, operating details and service areas must be verified before publication.</div>
    {requestOpen && <div className={styles.dialogLayer} onClick={() => setRequestOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="request-title" onClick={(event) => event.stopPropagation()}><button className={styles.dialogClose} aria-label="Close request" onClick={() => setRequestOpen(false)}><X size={18}/></button>{complete ? <div className={styles.success} role="status"><Check size={23}/><h2 id="request-title">Request prepared.</h2><p>This local demo has not sent a message or booked a service.</p><button onClick={() => setRequestOpen(false)}>Done</button></div> : <><span className={styles.eyebrow}>FRONTEND-ONLY REQUEST</span><h2 id="request-title">Where has the<br/><em>flow slowed?</em></h2><p>Share a few details with {businessName}. No real appointment will be made.</p><form onSubmit={submitRequest}><label>Your name<input autoComplete="name" required placeholder="Name"/></label><label>Email address<input type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>What needs attention?<select required defaultValue=""><option value="" disabled>Choose a service</option><option>Leak or repair</option><option>Drain and pipe care</option><option>Water heater</option><option>Fixture update</option><option>Not sure yet</option></select></label><label>A short description<textarea rows="3" placeholder="What are you noticing?"/></label><button type="submit">Prepare demo request <ArrowRight size={14}/></button></form></>}</section></div>}
  </div>;
}