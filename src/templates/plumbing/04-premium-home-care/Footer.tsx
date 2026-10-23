import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><a href="#home-care">Clearflow<small>HOME CARE / RESIDENTIAL</small></a><p>A considered approach to the things that keep a home working.</p><nav><a href="#approach">Approach</a><a href="#services">Services</a><a href="#questions">Questions</a><button onClick={onRequest}>Contact <ArrowUpRight size={12}/></button></nav><span>04 / PREMIUM HOME CARE · SAMPLE DESIGN BY SISWAA</span></footer>;
}