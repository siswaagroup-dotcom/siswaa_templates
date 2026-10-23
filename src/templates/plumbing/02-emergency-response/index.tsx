import React, { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import { Coverage, FAQ, RepairProof, RouteServices, ServiceWindow } from "./sections/DispatchSections";
import styles from "./style.module.css";

export default function EmergencyResponse({ businessName = "Clearflow Plumbing" }) {
  const [selectedJoint, setSelectedJoint] = useState(0);
  const [requestOpen, setRequestOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notice, setNotice] = useState("");
  const openRequest = () => { setSuccess(false); setRequestOpen(true); };
  const demoCall = () => setNotice("Demo only · no call was placed.");
  const submit = (event) => { event.preventDefault(); setSuccess(true); };
  return <div className={styles.site}>
    <div className={styles.alertStrip}><span/> PRIORITY PLUMBING CONCEPT <b>·</b> THIS IS NOT A LIVE EMERGENCY SERVICE</div>
    <Header onRequest={openRequest} onCall={demoCall}/>
    <main><Hero onRequest={openRequest} onCall={demoCall}/><RouteServices selected={selectedJoint} setSelected={setSelectedJoint} onRequest={openRequest}/><ServiceWindow onRequest={openRequest}/><RepairProof/><Coverage onRequest={openRequest}/><FAQ/></main>
    <Footer onRequest={openRequest}/>
    <div className={styles.disclaimer}>Sample plumbing preview · do not use for emergency dispatch; verify provider, service area, and contact details before launch.</div>
    {notice && <div className={styles.notice} role="status">{notice}<button aria-label="Dismiss notice" onClick={() => setNotice("")}>×</button></div>}
    {requestOpen && <div className={styles.dialogLayer} onClick={() => setRequestOpen(false)}><section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="dispatch-form-title" onClick={(event) => event.stopPropagation()}><button className={styles.close} aria-label="Close request" onClick={() => setRequestOpen(false)}><X size={18}/></button>{success ? <div className={styles.success} role="status"><Check size={24}/><h2 id="dispatch-form-title">Request prepared.</h2><p>This demo does not contact {businessName}, place a call, or dispatch help.</p><button onClick={() => setRequestOpen(false)}>Done</button></div> : <><span className={styles.eyebrow}>FRONTEND-ONLY DEMO</span><h2 id="dispatch-form-title">Tell us what<br/><em>you notice.</em></h2><p>This sample request will not reach a real service provider.</p><form onSubmit={submit}><label>Your name<input required autoComplete="name" placeholder="Name"/></label><label>Phone or email<input required placeholder="Contact detail"/></label><label>Issue type<select required defaultValue=""><option value="" disabled>Select a starting point</option><option>Leak or pipe concern</option><option>Drain or water flow</option><option>Water heater</option><option>Other / not sure</option></select></label><label>Brief notes<textarea rows="3" placeholder="What are you noticing?"/></label><button type="submit">Prepare demo request <ArrowRight size={14}/></button></form></>}</section></div>}
  </div>;
}