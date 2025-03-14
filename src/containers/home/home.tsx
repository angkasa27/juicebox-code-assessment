"use client";
import styles from "./home.module.css";
import { HERO_FLOATING } from "@/constants/page";
import Image from "next/image";
// import Image from "next/image";

export function Home() {
  return (
    <main className={styles.page}>
      <div className={styles["hero-container"]}>
        <div className={styles["lottie-mask"]}>
          {/* <Lottie animationData={animationData} loop autoplay /> */}
          <Image
            src="/img/hero.png"
            alt="JB2G Lottie"
            width={300}
            height={300}
          />
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
