import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  const [open, setOpen] = useState(false);
  const links = [["Diagram", "#diagram"], ["Process", "#process"], ["Work", "#work"], ["Contact", "#contact"]];
  return <><header className={styles.header}><a href="#explorer-home"><span className={styles.logoSquare}>CF</span><b>CLEARFLOW<small>SYSTEMS / RESIDENTIAL</small></b></a><button className={styles.mobileMenu} aria-label="Toggle technical navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18}/> : <Menu size={18}/>}</button><span className={styles.status}>SYSTEM MAP · DEMO 03</span><button className={styles.headerCta} onClick={onRequest}>Start an inquiry <ArrowUpRight size={14}/></button></header><nav className={`${styles.sideNav} ${open ? styles.sideNavOpen : ""}`} aria-label="Blueprint navigation">{links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}</a>)}</nav></>;
}