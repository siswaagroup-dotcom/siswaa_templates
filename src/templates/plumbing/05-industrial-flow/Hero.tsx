import React, { useState } from "react";
import { ArrowUpRight, Power } from "lucide-react";
import { images } from "./images";
import styles from "./style.module.css";

const valves = [
  { id: "V-01", title: "Main inlet", detail: "Primary entry branch · sample schematic node" },
  { id: "V-02", title: "Fixture loop", detail: "Fixture distribution branch · sample schematic node" },
  { id: "V-03", title: "Service return", detail: "Return and service access branch · sample schematic node" }
];

export default function Hero({ onRequest }) {
  const [open, setOpen] = useState({ "V-01": true, "V-02": true, "V-03": false });
  const toggle = (id) => setOpen((current) => ({ ...current, [id]: !current[id] }));
  const activeCount = Object.values(open).filter(Boolean).length;
  return <section className={styles.hero} id="industrial-home"><div className={styles.heroHead}><div><span className={styles.coordinate}>P&amp;ID / DOMESTIC WATER · REV 05</span><h1>Read the<br/><em>whole system.</em></h1><p>Clearflow’s illustrative system board makes connected service points easier to discuss.</p></div><button className={styles.briefButton} onClick={onRequest}>Request a system review <ArrowUpRight size={14}/></button></div><div className={styles.schematicBoard}><img className={styles.schematicImage} src={images[0].src} alt={images[0].alt}/><svg className={styles.overlay} viewBox="0 0 1200 720" aria-label="Interactive schematic valve controls"><path className={styles.animatedRun} d="M210 565V190H410V310H670V180H1000V565M410 310V480H650V565M670 180V390H890V565"/>{valves.map((valve, index) => <g key={valve.id} className={open[valve.id] ? styles.valveOpen : styles.valveClosed} role="button" tabIndex="0" aria-label={`${valve.id} ${valve.title} ${open[valve.id] ? "open" : "closed"}`} onClick={() => toggle(valve.id)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") toggle(valve.id); }}><circle cx={[410,670,890][index]} cy={[310,180,390][index]} r="22"/><path d={`M${[398,658,878][index]} ${[298,168,378][index]}l24 24m0-24-24 24`}/></g>)}</svg><span className={styles.boardCode}>CF / SCHEMATIC / NOT TO SCALE</span><span className={styles.pulseCursor}/></div><div className={styles.instrumentReadout}><div><span className={styles.coordinate}>NETWORK STATE</span><b><i className={styles.statusLamp}/> DEMO SYSTEM / INTERACTIVE</b></div><div><span className={styles.coordinate}>VALVES OPEN</span><b>{activeCount} / 03</b></div><div><span className={styles.coordinate}>SELECTED NODE</span><b>{valves.find((valve) => open[valve.id])?.id || "STANDBY"}</b></div><div className={styles.valveList}>{valves.map((valve) => <button key={valve.id} aria-pressed={open[valve.id]} className={open[valve.id] ? styles.valveButtonOpen : ""} onClick={() => toggle(valve.id)}><Power size={12}/><span>{valve.id}</span><b>{valve.title}</b></button>)}</div></div></section>;
}