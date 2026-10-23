import React, { useEffect, useState } from "react";
import { ArrowUpRight, Droplets, Menu, X } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let previousY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - previousY) > 8) setHidden(currentY > previousY && currentY > 140);
      previousY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [["Our approach", "#flow"], ["Services", "#services"], ["Recent work", "#work"], ["Questions", "#questions"]];
  return <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
    <a className={styles.brand} href="#water-home"><span><Droplets size={17}/></span><b>Clearflow<small>PLUMBING · SAMPLE CONCEPT</small></b></a>
    <button className={styles.menuButton} aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18}/> : <Menu size={18}/>}</button>
    <nav className={open ? styles.navOpen : ""} aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className={styles.headerCta} onClick={onRequest}>Request service <ArrowUpRight size={14}/></button>
  </header>;
}