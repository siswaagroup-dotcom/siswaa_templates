import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./style.module.css";

export default function Footer({ onRequest }) {
  return <footer className={styles.footer}><a href="#clinic-home">Northstar<small>CARE, WITH ROOM TO LISTEN</small></a><p>Patient information · location and hours to be verified.</p><nav><a href="#approach">Approach</a><a href="#team">Care team</a><a href="#questions">Questions</a><button onClick={onRequest}>Appointment request <ArrowUpRight size={12}/></button></nav><span>Sample clinic website concept · all business and medical details are illustrative.</span></footer>;
}