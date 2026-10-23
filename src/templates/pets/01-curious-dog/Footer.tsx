import React from "react";
import { PawPrint } from "lucide-react";
import styles from "./style.module.css";

export default function Footer() {
  return <footer className={styles.footer}><a className={styles.brand} href="#curious-home"><span><PawPrint size={17}/></span><b>Paw & Whisker<small>THOUGHTFUL PET CARE</small></b></a><p>Kind people. Clear answers. Care at your pet's pace.<br/>Illustrative website concept by Siswaa Technologies.</p><nav><a href="#care">Care</a><a href="#stories">Little lives</a><a href="#faq">Questions</a><a href="#visit">Visit</a></nav><small>© 2026 · SAMPLE CONCEPT</small></footer>;
}