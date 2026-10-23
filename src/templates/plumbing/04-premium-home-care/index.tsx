import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Approach, ClientNote, Consultation, FAQ, MaterialJournal, ServiceLedger } from "./sections/HomeSections";
import styles from "./style.module.css";

export default function PremiumHomeCare({ businessName = "Clearflow Plumbing" }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const request = () => { setSent(false); setOpen(true); };
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <div className={styles.site}><Header onRequest={request}/><main><Hero onRequest={request}/><Approach/><MaterialJournal/><ServiceLedger onRequest={request}/><ClientNote/><FAQ/><Consultation onRequest={request}/></main><Footer onRequest={request}/><div className={styles.disclaimer}>Illustrative home-care concept · business and project details require verification.</div>{open && <div className={styles.backdrop} onClick={() => setOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="home-form-title" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close consultation" onClick={() => setOpen(false)}><X size={17}/></button>{sent ? <div className={styles.success} role="status"><Check size={22}/><h2 id="home-form-title">Note prepared.</h2><p>No contact was sent to {businessName}.</p><button onClick={() => setOpen(false)}>Close</button></div> : <><span className={styles.eyebrow}>FRONTEND-ONLY DEMO</span><h2 id="home-form-title">A thoughtful<br/><em>first note.</em></h2><form onSubmit={submit}><label>Name<input required autoComplete="name" placeholder="Name"/></label><label>Email<input type="email" required autoComplete="email" placeholder="you@example.com"/></label><label>What would you like to discuss?<select required defaultValue=""><option value="" disabled>Choose a topic</option><option>Repair or leak</option><option>Fixture update</option><option>Water heater care</option><option>Other question</option></select></label><label>Room for details<textarea rows="3" placeholder="A little about the project"/></label><button type="submit">Prepare demo note <ArrowRight size={14}/></button></form><small>This local form does not send or book anything.</small></>}</section></div>}</div>;
}