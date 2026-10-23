import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Dog from "./art/Dog";
import { images } from "./images";
import styles from "./style.module.css";

export default function Hero({ onRequest }) {
  const stageRef = useRef(null);
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [reaction, setReaction] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const handlePointer = (event) => {
      const bounds = stage.getBoundingClientRect();
      setGaze({ x: Math.max(-8, Math.min(8, ((event.clientX - bounds.left) / bounds.width - 0.5) * 15)), y: Math.max(-7, Math.min(7, ((event.clientY - bounds.top) / bounds.height - 0.5) * 12)) });
    };
    const resetPointer = () => setGaze({ x: 0, y: 0 });
    stage.addEventListener("pointermove", handlePointer);
    stage.addEventListener("pointerleave", resetPointer);
    return () => {
      stage.removeEventListener("pointermove", handlePointer);
      stage.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return <section className={styles.hero} id="curious-home">
    <div className={styles.heroCopy}>
      <span className={styles.eyebrow}><i/> A LITTLE MORE HEART IN EVERY VISIT</span>
      <h1>Good care<br/>starts with a <em>hello.</em></h1>
      <p>For the muddy paws, the brave first-timers, and every familiar face in between.</p>
      <div className={styles.actions}><button className={styles.primary} onClick={onRequest}>Plan a visit <ArrowUpRight size={16}/></button><a href="#care">Meet the care <ArrowDown size={14}/></a></div>
      <span className={styles.heroFootnote}>KIND HANDS · CLEAR ANSWERS · ROOM TO SNIFF</span>
    </div>
    <div className={styles.stage} ref={stageRef}>
      <img className={styles.heroPhotoAccent} src={images[0].src} alt={images[0].alt} fetchpriority="high"/>
      <div className={styles.sun}/><div className={styles.orbitTrack} aria-hidden="true"><button className={styles.bone} aria-label="A floating toy follows its orbit" onClick={() => setReaction((value) => !value)}>●</button></div>
      <button className={styles.dogButton} aria-label="Click to greet the curious dog" onClick={() => setReaction((value) => !value)}><Dog gaze={gaze} reaction={reaction}/></button>
      <span className={styles.artCaption}>I SEE YOU, TOO.</span><span className={styles.stageIndex}>01 / A FRIENDLY FIRST IMPRESSION</span>
    </div>
  </section>;
}