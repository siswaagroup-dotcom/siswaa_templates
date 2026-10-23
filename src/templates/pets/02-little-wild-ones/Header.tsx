import React, { useState } from "react";
import { ArrowUpRight, Menu, PawPrint, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  const [open, setOpen] = useState(false);
  const links = [["Route", "#route"], ["The pack", "#pack"], ["Field notes", "#notes"]];
  return <header className={styles.header}>
    <a className={styles.brand} href="#wild-home"><PawPrint size={18}/><span>WILD KIND<small>FIELD GUIDE / 02</small></span></a>
    <button className={styles.menuToggle} aria-label="Toggle trail navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? styles.navOpen : ""} aria-label="Trail navigation">{links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}</a>)}</nav>
    <button className={styles.request} onClick={onRequest}>Plan a first visit <ArrowUpRight size={15}/></button>
  </header>;
}
