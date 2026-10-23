import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, PawPrint } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";

const stops = [
  { title: "The first hello", copy: "Start with a little room to look around and get used to the new smells.", note: "A calm introduction for new friends." },
  { title: "A little check-in", copy: "Time to listen, ask questions, and make a practical plan together.", note: "A moment to compare notes." },
  { title: "Back to adventure", copy: "Leave with a clear summary and a useful next step for home.", note: "A good trail keeps going." }
];

export function RouteMap() {
  const [active, setActive] = useState(0);
  return <section className={styles.routeMap} id="route"><div className={styles.routeIntro}><span className={styles.coordinate}>THREE STOPS / NO RUSH</span><h2>Care along<br/>the <em>way.</em></h2><p>A visit is easier when the path feels clear. Choose a pawprint to see what that part of the day can hold.</p></div><div className={styles.routeContent}><div className={styles.stops}>{stops.map((stop, index) => <button key={stop.title} className={active === index ? styles.activeStop : ""} onClick={() => setActive(index)}><span className={styles.stopMark}><PawPrint size={17}/></span><small>0{index + 1} / TRAIL STOP</small><b>{stop.title}</b><span>{stop.note}</span></button>)}</div><div className={styles.stopDetail}><span>YOU ARE HERE</span><b>{stops[active].title}</b><p>{stops[active].copy}</p><ArrowRight size={17}/></div></div></section>;
}

export function Pack() {
  return <section className={styles.pack} id="pack"><div className={styles.packImage}><img src={images[5].src} alt={images[5].alt} loading="lazy"/><span>THE PACK / 02 FRIENDS ON THE MOVE</span></div><div><span className={styles.coordinate}>GOOD PEOPLE, FOUR PAWS AT A TIME</span><h2>Every good trail<br/>has a <em>good pack.</em></h2><p>Meet a small team of animal people who believe care can be thoughtful, practical, and full of tiny victories.</p><div className={styles.profiles}><article><img src={images[1].src} alt={images[1].alt} loading="lazy"/><b>Rae & Juniper</b><small>Fictional demo team</small></article><article><img src={images[6].src} alt={images[6].alt} loading="lazy"/><b>Alex & Oat</b><small>Fictional demo team</small></article></div></div></section>;
}

export function FieldNotes() {
  return <section className={styles.fieldNotes} id="notes"><div><span className={styles.coordinate}>THE FIELD GUIDE / USEFUL ROUTINES</span><h2>Small things<br/>make a <em>good day.</em></h2></div><div className={styles.noteGrid}><article><img src={images[2].src} alt={images[2].alt} loading="lazy"/><span>01 / NEW ROUTINES</span><h3>A softer first visit</h3><p>Bring familiar notes and let your companion take a moment to look around.</p></article><article><img src={images[3].src} alt={images[3].alt} loading="lazy"/><span>02 / EVERYDAY CARE</span><h3>Keep a little record</h3><p>Small changes in appetite, energy, or habit can be useful to mention.</p></article><article><img src={images[4].src} alt={images[4].alt} loading="lazy"/><span>03 / AFTER THE VISIT</span><h3>Take the next step</h3><p>A clear summary gives you something practical to carry back home.</p></article></div></section>;
}

export function TrailStory() {
  return <section className={styles.story}><div><span className={styles.coordinate}>A NOTE FROM THE FIELD · FICTIONAL</span><blockquote>“Fern took her time with the room. By the end, she had found the sunny spot and decided we were all right.”</blockquote><small>DEV & FERN · SAMPLE STORY</small></div><img src={images[7].src} alt={images[7].alt} loading="lazy"/></section>;
}
