import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let previousY = window.scrollY;
    const onScroll = () => { const y = window.scrollY; if (Math.abs(y - previousY) > 7) setHidden(y > previousY && y > 130); previousY = y; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}><a className={styles.brand} href="#clinic-home"><span>n.</span><b>Northstar<small>CARE, WITH ROOM TO LISTEN</small></b></a><button className={styles.menu} aria-label="Toggle clinic navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={17}/> : <Menu size={17}/>}</button><nav className={open ? styles.navOpen : ""} aria-label="Clinic navigation">{[["Our approach", "#approach"], ["Care team", "#team"], ["Patient notes", "#notes"], ["Questions", "#questions"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><button className={styles.headerAction} onClick={onRequest}>Request an appointment <ArrowUpRight size={13}/></button></header>;
}