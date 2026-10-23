import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Equipment, FAQ, Maintenance, ProjectBrief } from "./sections/SystemSections";
import styles from "./style.module.css";

export default function IndustrialFlow({ businessName = "Clearflow Systems" }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const request = () => { setSent(false); setOpen(true); };
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <div className={styles.site}><Header onRequest={request}/><main><Hero onRequest={request}/><Maintenance/><Equipment/><FAQ/><ProjectBrief onRequest={request}/></main><Footer onRequest={request}/><div className={styles.disclaimer}>Industrial Flow · original illustrative P&amp;ID artwork · not a construction, diagnostic, or safety plan.</div>{open && <div className={styles.backdrop} onClick={() => setOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="project-form-title" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close project brief" onClick={() => setOpen(false)}><X size={16}/></button>{sent ? <div className={styles.success} role="status"><Check size={21}/><h2 id="project-form-title">Brief prepared.</h2><p>This demo has not contacted {businessName} or started work.</p><button onClick={() => setOpen(false)}>Close</button></div> : <><span className={styles.coordinate}>PROJECT INPUT / DEMO</span><h2 id="project-form-title">Describe the<br/><em>system question.</em></h2><form onSubmit={submit}><label>Name<input autoComplete="name" required placeholder="Name"/></label><label>Email<input type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>Topic<select required defaultValue=""><option value="" disabled>Select a topic</option><option>Leak or repair</option><option>Pipe routing</option><option>Fixture service</option><option>Other</option></select></label><label>Notes<textarea rows="3" placeholder="Describe the project question"/></label><button type="submit">Prepare demo brief <ArrowRight size={13}/></button></form><small>No diagnosis, dispatch, or email occurs in this preview.</small></>}</section></div>}</div>;
}