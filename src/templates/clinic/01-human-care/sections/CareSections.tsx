import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Plus, X } from "lucide-react";
import { images } from "../images";
import styles from "../style.module.css";

const questions = [
  ["What should I bring to a first appointment?", "Bring any records you would like the care team to consider and a list of questions or current medications."],
  ["Can I ask for help choosing a visit type?", "A connected clinic can explain its real appointment options. This demo form does not provide clinical guidance."],
  ["Is Northstar a real clinic?", "No. This is an illustrative website concept. Replace names, services, hours, and clinical claims with verified details."]
];

export function Approach() {
  return <section className={styles.approach} id="approach"><span className={styles.eyebrow}>A GOOD VISIT HAS ROOM FOR A QUESTION</span><p>Care begins with listening: what changed, what feels uncertain, and what would make the next step clearer.</p><span>NORTHSTAR / SAMPLE VALUES</span></section>;
}

export function StoryScenes() {
  return <section className={styles.storyScenes} aria-label="Patient care story"><article className={styles.storyScene}><figure><img src={images[4].src} alt={images[4].alt} loading="lazy"/><figcaption>01 / ARRIVE AT YOUR PACE</figcaption></figure><div><span className={styles.eyebrow}>THE FIRST MOMENTS MATTER</span><h2>A welcome<br/>without <em>the rush.</em></h2><p>A calm introduction and a chance to share what brought you in.</p></div></article><article className={`${styles.storyScene} ${styles.storySceneReverse}`}><figure><img src={images[5].src} alt={images[5].alt} loading="lazy"/><figcaption>02 / MAKE A PLAN TOGETHER</figcaption></figure><div><span className={styles.eyebrow}>CLEAR LANGUAGE, SHARED DECISIONS</span><h2>Understand<br/>the <em>options.</em></h2><p>Make time to ask, talk through next steps, and leave with a useful summary.</p></div></article></section>;
}

export function CareTeam() {
  return <section className={styles.team} id="team"><div className={styles.teamHeading}><span className={styles.eyebrow}>PEOPLE WHO MAKE SPACE TO LISTEN</span><h2>Meet a few<br/><em>sample faces.</em></h2><p>Fictional staff placeholders shown for layout only. Replace them with verified team profiles.</p></div><div className={styles.teamGrid}>{[images[1], images[6], images[2]].map((image, index) => <article key={image.role}><img src={image.src} alt={image.alt} loading="lazy"/><span>0{index + 1} / FICTIONAL PROFILE</span><b>{["Jordan Lee", "Avery Chen", "Sam Rivera"][index]}</b><small>{["Primary care · demo role", "Patient support · demo role", "Care coordination · demo role"][index]}</small></article>)}</div></section>;
}

export function PatientNotes() {
  return <section className={styles.notes} id="notes"><span className={styles.eyebrow}>A NOTE FROM A FICTIONAL PATIENT</span><blockquote>“I left with a clearer sense of what to ask next, and enough time to ask it.”</blockquote><small>CASEY R. · FICTIONAL SAMPLE</small></section>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className={styles.faq} id="questions"><div><span className={styles.eyebrow}>GOOD TO KNOW</span><h2>Before your<br/><em>first visit.</em></h2></div><div>{questions.map(([question, answer], index) => <article key={question}><button aria-expanded={active === index} onClick={() => setActive(active === index ? -1 : index)}>{question}{active === index ? <X size={14}/> : <Plus size={14}/>}</button>{active === index && <p>{answer}</p>}</article>)}</div></section>;
}

export function AppointmentClose({ onRequest }) {
  return <section className={styles.appointment} id="appointment"><div><span className={styles.eyebrow}>WHEN YOU ARE READY</span><h2>Start with<br/><em>a conversation.</em></h2><p>This sample request shows how a clinic might invite an appointment inquiry.</p></div><button onClick={onRequest}>Request an appointment <ArrowUpRight size={14}/></button></section>;
}