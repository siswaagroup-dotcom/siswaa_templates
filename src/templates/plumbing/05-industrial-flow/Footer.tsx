import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><div className={styles.titleBlock}><span>OWNER</span><b>CLEARFLOW SYSTEMS</b><span>DRAWING TITLE</span><b>INDUSTRIAL FLOW / RESIDENTIAL</b></div><div className={styles.drawingData}><span>DWG NO. CF-05</span><span>ISSUE: DEMO</span><span>SCALE: NTS</span></div><button onClick={onRequest}>PROJECT INQUIRY + <ArrowUpRight size={12}/></button><small>Illustrative schematic only · no real installation data shown.</small></footer>;
}