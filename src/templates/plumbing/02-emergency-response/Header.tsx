import React, { useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest, onCall }) {
  const [open, setOpen] = useState(false);
  return <header className={styles.header}>
    <a className={styles.brand} href="#dispatch-home"><span>CF</span><b>CLEARFLOW<small>RESPONSE UNIT · DEMO</small></b></a>
    <button className={styles.menuButton} aria-label="Toggle dispatch navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18}/> : <Menu size={18}/>}</button>
    <nav className={open ? styles.navOpen : ""} aria-label="Dispatch navigation">{[["Route", "#route"], ["Services", "#services"], ["Service area", "#area"], ["FAQ", "#faq"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <div className={styles.actions}><button className={styles.callButton} onClick={onCall}><Phone size={14}/> Call demo line</button><button className={styles.requestButton} onClick={onRequest}>Request help <ArrowUpRight size={14}/></button></div>
  </header>;
}