import React, { useState } from "react";
import { ArrowUpRight, Menu, PawPrint, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  const [open, setOpen] = useState(false);
  const links = [["Our care", "#care"], ["Little lives", "#stories"], ["Good to know", "#faq"], ["Find us", "#visit"]];
  return <header className={styles.header}>
    <a className={styles.brand} href="#curious-home"><span><PawPrint size={17}/></span><b>Paw & Whisker<small>THOUGHTFUL PET CARE</small></b></a>
    <button className={styles.menuToggle} aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
    <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className={styles.headerAction} onClick={onRequest}>Plan a visit <ArrowUpRight size={15}/></button>
  </header>;
}