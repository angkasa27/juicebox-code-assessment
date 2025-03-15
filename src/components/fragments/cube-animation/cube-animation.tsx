"use client";
import { HERO_FLOATING } from "@/constants/page";
import styles from "./cube-animation.module.css";
import Image from "next/image";
import { forwardRef } from "react";

export const CubeAnimation = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div className={styles["wrapper"]} ref={ref} {...props}>
      <Image src="/img/hero.png" alt="" aria-hidden width={300} height={300} />
      <div className={styles["wrapper-text"]}>
        {HERO_FLOATING.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
});

CubeAnimation.displayName = "CubeAnimation";
