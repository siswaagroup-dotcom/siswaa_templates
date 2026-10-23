import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "../style.module.css";
import { images } from "../images";

const services = ["Wellness visits", "Vaccinations", "Dental care", "Diagnostics", "Grooming"];
export function Care() {
  return <section className={styles.care} id="care"><div className={styles.sectionLead}><span className={styles.eyebrow}>CARE, AT THEIR PACE</span><h2>Small check-ins.<br/><em>Big peace of mind.</em></h2><p>Clear next steps and a gentler rhythm, whatever brings you through the door.</p></div><div className={styles.serviceLedger}>{services.map((service, index) => <a href="#visit" key={service}><span>0{index + 1}</span><b>{service}</b><ArrowUpRight size={16}/></a>)}</div><img src={images[1].src} alt={images[1].alt} loading="lazy"/></section>;
}

export function Story() {
  return <section className={styles.story} id="stories"><figure><img src={images[2].src} alt={images[2].alt} loading="lazy"/><figcaption>01 / A MOMENT TO SETTLE</figcaption></figure><div><span className={styles.eyebrow}>NO TWO PERSONALITIES ALIKE</span><h2>We make space<br/>for the <em>whole pet.</em></h2><p>Some need a minute. Some arrive like they own the place. We notice who is in front of us and let the visit follow their lead.</p><img src={images[3].src} alt={images[3].alt} loading="lazy"/></div></section>;
}

export function CompanionGallery() {
  return <section className={styles.gallery} aria-label="Companion moments">{images.slice(4).map((image, index) => <figure key={image.role}><img src={image.src} alt={image.alt} loading="lazy"/><figcaption>0{index + 2} / {image.role.toUpperCase()}</figcaption></figure>)}</section>;
}