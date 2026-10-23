import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { AppointmentClose, Approach, CareTeam, FAQ, PatientNotes, StoryScenes } from "./sections/CareSections";
import styles from "./style.module.css";

export default function HumanCare({ businessName = "Northstar Clinic" }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const request = () => { setSent(false); setOpen(true); };
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <div className={styles.site}><Header onRequest={request}/><main><Hero onRequest={request}/><Approach/><StoryScenes/><CareTeam/><PatientNotes/><FAQ/><AppointmentClose onRequest={request}/></main><Footer onRequest={request}/><div className={styles.disclaimer}>Clinic concept for demonstration · not a provider; verify all clinical, location, and availability details.</div>{open && <div className={styles.backdrop} onClick={() => setOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="appointment-title" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close appointment request" onClick={() => setOpen(false)}><X size={17}/></button>{sent ? <div className={styles.success} role="status"><Check size={22}/><h2 id="appointment-title">Request prepared.</h2><p>No appointment was booked with {businessName}; this confirmation is local to the preview.</p><button onClick={() => setOpen(false)}>Close</button></div> : <><span className={styles.eyebrow}>FRONTEND-ONLY APPOINTMENT DEMO</span><h2 id="appointment-title">A first<br/><em>conversation.</em></h2><p>Share how the team can follow up. This form is not connected to a clinic.</p><form onSubmit={submit}><label>Your name<input autoComplete="name" required placeholder="Name"/></label><label>Email address<input type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>What would you like to discuss?<select required defaultValue=""><option value="" disabled>Choose a starting point</option><option>Primary care question</option><option>Preventive visit</option><option>Follow-up visit</option><option>Not sure yet</option></select></label><label>A short note<textarea rows="3" placeholder="Anything you would like the team to know?"/></label><button type="submit">Prepare appointment request <ArrowRight size={14}/></button></form><small>This demo does not provide medical advice or book a visit.</small></>}</section></div>}</div>;
}