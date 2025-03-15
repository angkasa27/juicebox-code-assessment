"use client";
import { Button } from "@/components/ui/button";
import styles from "./home.module.css";
import { useContext, useEffect, useRef } from "react";
import { LayoutContext } from "@/app/(main)/layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Home() {
  const { cubeRef } = useContext(LayoutContext);

  const mainRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.remove("hidden");
    }
  }, []);

  useGSAP(() => {
    if (!headlineRef.current || !ctaRef.current) return;

    const words = headlineRef.current.querySelectorAll("span");

    const tl = gsap.timeline();

    tl.from(words[0], {
      opacity: 0,
      y: "100%",
      duration: 0.3,
      delay: 0.6,
      ease: "power3.out",
    })
      .from(
        [...words].slice(1),
        {
          opacity: 0,
          y: "100%",
          duration: 0.3,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.1"
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        },
        "+=0.7"
      );
  });

  return (
    <main
      className={`${styles["main-page"]} hidden`}
      style={{
        height: `calc(100dvh - ${(cubeRef?.clientHeight || 360) + 134}px)`,
      }}
      ref={mainRef}
    >
      <div />
      <h1 className={styles["title"]} ref={headlineRef}>
        <span>Compare</span> <span>your</span> <span>thoughts</span>{" "}
        <span>on</span>{" "}
        <span className={styles["gradient-text"]}>technology</span>{" "}
        <span>with</span> <span>current</span> <span>industry</span>{" "}
        <span>opinions.</span>
      </h1>
      <Button ref={ctaRef} variant="primary" aria-label="Get a reality check">
        Get a reality check
      </Button>
    </main>
  );
}
