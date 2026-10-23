import React from "react";
import styles from "../style.module.css";

export default function Dog({ gaze, reaction }) {
  return <svg className={`${styles.dog} ${reaction ? styles.reacting : ""}`} viewBox="0 0 360 390" role="img" aria-label="Illustrated curious dog">
    <path className={styles.tail} d="M258 274 C320 292 319 225 286 222" fill="none" stroke="#87543c" strokeWidth="20" strokeLinecap="round"/>
    <path d="M81 352 C82 287 103 241 180 235 C257 241 278 287 279 352Z" fill="#bc8253"/>
    <path d="M109 129 C69 84 48 115 71 196 C81 227 104 227 125 206Z" fill="#87543c"/>
    <path d="M251 129 C291 84 312 115 289 196 C279 227 256 227 235 206Z" fill="#87543c"/>
    <ellipse cx="180" cy="188" rx="105" ry="115" fill="#bc8253"/>
    <ellipse cx="142" cy="173" rx="16" ry="20" fill="#fff4dc"/><ellipse cx="218" cy="173" rx="16" ry="20" fill="#fff4dc"/>
    <circle className={styles.pupil} style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }} cx="143" cy="175" r="8" fill="#292a25"/>
    <circle className={styles.pupil} style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }} cx="217" cy="175" r="8" fill="#292a25"/>
    <ellipse cx="180" cy="226" rx="52" ry="34" fill="#efcf9c"/><path d="M166 213 Q180 202 194 213 Q193 229 180 231 Q167 229 166 213Z" fill="#34342d"/>
    <path d="M180 231 Q180 250 162 251 M180 231 Q180 250 198 251" fill="none" stroke="#654838" strokeWidth="3" strokeLinecap="round"/>
    <path d="M110 297 Q180 320 250 297" fill="none" stroke="#dc6c4b" strokeWidth="14" strokeLinecap="round"/>
    <circle cx="180" cy="307" r="8" fill="#f2c76f"/>
  </svg>;
}