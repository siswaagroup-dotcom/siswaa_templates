import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  const [menu, setMenu] = useState(false);
  return <header className={styles.header}><a className={styles.wordmark} href="#home-care"><span>CF</span><b>Clearflow<small>HOME CARE, CONSIDERED</small></b></a><nav className={menu ? styles.navOpen : ""} aria-label="Home care navigation">{[["Approach", "#approach"], ["The details", "#details"], ["Services", "#services"], ["Questions", "#questions"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav><button className={styles.menu} aria-label="Toggle navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={17}/> : <Menu size={17}/>}</button><button className={styles.headerAction} onClick={onRequest}>A considered first visit <ArrowUpRight size={14}/></button></header>;
}