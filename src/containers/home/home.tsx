"use client";
import styles from "./home.module.css";
import Lottie from "lottie-react";
import animationData from "@public/lottie/JB2G_Lottie.json";
import { HERO_FLOATING } from "@/constants/page";
// import Image from "next/image";

export function Home() {
  return (
    <main className={styles.page}>
      <div className={styles["hero-container"]}>
        <div className={styles["lottie-mask"]}>
          <Lottie animationData={animationData} loop autoplay />
        </div>
        <div className={styles["hero-text"]}>
          {HERO_FLOATING.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <h1 className={styles["title"]}>
        Compare your thoughts on{" "}
        <span className={styles["gradient-text"]}>technology</span> with current
        industry opinions.
      </h1>
      <button className={styles["cta"]}>Get a reality check</button>
    </main>
  );
}
