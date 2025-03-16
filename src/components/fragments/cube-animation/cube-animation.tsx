"use client";
import { FLOATING_TEXT } from "@/constants";
import styles from "./cube-animation.module.css";
import Image from "next/image";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

export const CubeAnimation = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null); // Wrapper div
  const floatingTextRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  useEffect(() => {
    if (localRef.current) {
      localRef.current.classList.remove("hidden");
    }
  }, []);

  // useGSAP(() => {
  //   if (!imageContainerRef.current || !floatingTextRef.current) return;

  //   const tl = gsap.timeline();
  //   const text = floatingTextRef.current.querySelectorAll("p");

  //   tl.fromTo(
  //     imageContainerRef.current.querySelector("img"),
  //     { opacity: 0, scale: 0.5 },
  //     { opacity: 1, scale: 1, duration: 0.6, ease: "power3.inOut" }
  //   ).fromTo(
  //     text,
  //     { opacity: 0, y: "100%" },
  //     { opacity: 1, y: "0%", duration: 0.6, ease: "power3.out", stagger: 0.1 },
  //     "+=1.5"
  //   );
  // }, []);

  useGSAP(() => {
    if (!imageContainerRef.current || !floatingTextRef.current) return;

    const tl = gsap.timeline();

    const text = floatingTextRef.current.querySelectorAll("p");

    switch (pathname) {
      case "/tutorial":
        tl.to(text, {
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        }).to(imageContainerRef.current.querySelector("img"), {
          opacity: 1,
          scale: 0.5,
          duration: 0.6,
          ease: "power3.inOut",
        }, "-=0.3");
        break;

      default:
        tl.fromTo(
          imageContainerRef.current.querySelector("img"),
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power3.inOut" }
        ).fromTo(
          text,
          { opacity: 0, y: "100%" },
          {
            opacity: 1,
            y: "0%",
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
          },
          "+=1.5"
        );
        break;
    }
  }, [pathname]);

  return (
    <div className={`${styles["wrapper"]} hidden`} ref={localRef} {...props}>
      <div ref={imageContainerRef}>
        <Image
          src="/img/hero.png"
          alt=""
          aria-hidden
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles["wrapper-text"]} ref={floatingTextRef}>
        {FLOATING_TEXT.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
});

CubeAnimation.displayName = "CubeAnimation";
