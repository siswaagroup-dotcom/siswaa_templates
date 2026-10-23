import React from "react";
import { ArrowUpRight, Droplets } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><a className={styles.footerBrand} href="#water-home"><Droplets size={20}/> Clearflow<small>PLUMBING · DEMO CONCEPT</small></a><p>Thoughtful plumbing for homes that deserve a little more ease.</p><nav><a href="#services">Services</a><a href="#work">Selected details</a><a href="#questions">Questions</a><button onClick={onRequest}>Get in touch <ArrowUpRight size={13}/></button></nav><small>Sample website by Siswaa Technologies · Business details are illustrative.</small></footer>;
}