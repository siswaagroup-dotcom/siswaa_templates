import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { images } from "./images";
import styles from "./style.module.css";

export default function Hero() {
  const landscape = useRef(null);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const scene = landscape.current;
    if (!scene) return undefined;
    const move = (event) => {
      const box = scene.getBoundingClientRect();
      setPoint({ x: ((event.clientX - box.left) / box.width - .5) * 18, y: ((event.clientY - box.top) / box.height - .5) * 12 });
    };
    const leave = () => setPoint({ x: 0, y: 0 });
    scene.addEventListener("pointermove", move);
    scene.addEventListener("pointerleave", leave);
    return () => { scene.removeEventListener("pointermove", move); scene.removeEventListener("pointerleave", leave); };
  }, []);
  return <section className={styles.hero} id="wild-home">
    <div className={styles.copy}><span className={styles.coordinate}>FIELD NOTE 01 / BEGIN ANYWHERE</span><h1>For every<br/><em>little wild one.</em></h1><p>Care for the companions who make the long way home the best part.</p><a href="#route">FOLLOW THE PAWPRINTS <ArrowDown size={14}/></a></div>
    <div className={styles.landscape} ref={landscape}>
      <img className={styles.backdrop} src={images[0].src} alt={images[0].alt} fetchpriority="high"/>
      <div className={styles.meadow}/><svg className={styles.route} viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 225 C100 40 210 275 350 137 S590 60 675 198 850 254 1020 80"/></svg>
      <div className={styles.traveler} style={{ transform: `translate(${point.x}px, ${point.y}px)` }}><PawPrintMark/></div>
      <span className={styles.stamp}>TAKE<br/>THE<br/>SCENIC<br/>ROUTE</span><span className={styles.imageLabel}>A SMALL ADVENTURE, WITH GOOD COMPANY</span>
    </div>
  </section>;
}
function PawPrintMark() { return <span aria-hidden="true">●</span>; }
