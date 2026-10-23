import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><div><b>CLEARFLOW / RESPONSE</b><small>Sample plumbing concept · not a live provider</small></div><nav><a href="#route">Route</a><a href="#services">Services</a><a href="#faq">Safety notes</a></nav><button onClick={onRequest}>Open a request <ArrowUpRight size={13}/></button><span>Replace all operational claims with verified business information.</span></footer>;
}