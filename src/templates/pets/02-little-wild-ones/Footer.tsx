import React from "react";
import { ArrowUpRight, PawPrint } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><a className={styles.brand} href="#wild-home"><PawPrint size={18}/><span>WILD KIND<small>FIELD GUIDE / 02</small></span></a><p>Take the long way. Keep good company.<br/>Illustrative demo concept by Siswaa Technologies.</p><nav><a href="#route">The route</a><a href="#pack">The pack</a><a href="#notes">Field notes</a></nav><button onClick={onRequest}>Plan a first visit <ArrowUpRight size={14}/></button><small>© 2026 · SAMPLE CONCEPT</small></footer>;
}
