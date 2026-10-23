import React from "react";
import { ArrowUpRight, CircleDot } from "lucide-react";
import styles from "./style.module.css";

export default function Header({ onRequest }) {
  return <header className={styles.header}><a href="#industrial-home"><span className={styles.logo}>CF</span><b>CLEARFLOW SYSTEMS<small>RESIDENTIAL / TECHNICAL SERVICES</small></b></a><span className={styles.headerMeta}><CircleDot size={10}/> SYSTEM MAP 05 / SAMPLE</span><button onClick={onRequest}>Project brief <ArrowUpRight size={14}/></button></header>;
}