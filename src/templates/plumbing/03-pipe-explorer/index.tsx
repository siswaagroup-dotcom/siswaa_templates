import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { FAQ, Gallery, Inquiry, Process, ServiceArea } from "./sections/BlueprintSections";
import styles from "./style.module.css";

export default function PipeExplorer({ businessName = "Clearflow Plumbing" }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const showForm = () => { setSent(false); setOpen(true); };
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <div className={styles.site}>
    <Header onRequest={showForm}/>
    <main id="explorer-home"><Hero onRequest={showForm}/><Process/><ServiceArea onRequest={showForm}/><Gallery/><FAQ/><Inquiry onRequest={showForm}/></main>
    <Footer onRequest={showForm}/><div className={styles.disclaimer}>Illustrative plumbing schematic · not a construction plan, verified service map, or safety instruction.</div>
    {open && <div className={styles.dialogLayer} onClick={() => setOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close inquiry" onClick={() => setOpen(false)}><X size={17}/></button>{sent ? <div className={styles.success} role="status"><Check size={22}/><h2 id="inquiry-title">Inquiry prepared.</h2><p>No request was sent to {businessName}.</p><button onClick={() => setOpen(false)}>Close</button></div> : <><span className={styles.coordinate}>FRONTEND DEMONSTRATION</span><h2 id="inquiry-title">Start a<br/><em>system note.</em></h2><form onSubmit={submit}><label>Name<input autoComplete="name" required placeholder="Name"/></label><label>Email<input type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>Area of interest<select required defaultValue=""><option value="" disabled>Select a pipe zone</option><option>Supply line</option><option>Kitchen branch</option><option>Bath branch</option><option>Heater loop</option></select></label><label>What should we know?<textarea rows="3" placeholder="Describe the question"/></label><button type="submit">Prepare demo inquiry <ArrowRight size={14}/></button></form><small>This form does not diagnose, dispatch, or contact a provider.</small></>}</section></div>}
  </div>;
}