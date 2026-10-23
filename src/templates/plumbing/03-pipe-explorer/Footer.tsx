import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><div className={styles.titleBlock}><span>CF / RESIDENTIAL SYSTEMS</span><b>PIPE EXPLORER</b><small>PLUMBING CONCEPT 03 · SISWAA TEMPLATE SERIES</small></div><nav><a href="#diagram">Diagram</a><a href="#process">Process</a><a href="#work">Details</a><a href="#faq">Notes</a></nav><button onClick={onRequest}>INQUIRY + <ArrowUpRight size={13}/></button><small>Illustrative schematic only · verify all claims and services before launch.</small></footer>;
}