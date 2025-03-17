"use client";
import {
  Swiper as SwiperContainer,
  SwiperRef,
  SwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import styles from "./tutorial.module.css";
import { TUTORIAL_STEPS } from "@/constants";
import { SlideAnimation } from "@/components/fragments/slide-animation";
import { useTutorial } from "./actions/use-tutorial";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Tutorial() {
  const {
    handleSlideChange,
    handleSwiper,
    activeIndex,
    isLastSlide,
    cubeRef,
    handleNextPage,
    handleNextSlide,
  } = useTutorial();

  const swiperRef = useRef<SwiperRef>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onButtonClick = () => {
    if (isLastSlide) {
      if (!swiperRef.current || !buttonRef.current || !cubeRef) return;

      gsap.to([cubeRef, swiperRef.current, buttonRef.current], {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
        onComplete: handleNextPage,
      });
    } else {
      handleNextSlide();
    }
  };

  useGSAP(() => {
    if (!swiperRef.current || !buttonRef.current) return;

    const tl = gsap.timeline();

    tl.from(swiperRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 1,
      ease: "power3.out",
    }).from(buttonRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  });

  return (
    <div
      style={{
        height: `calc(100dvh - ${(cubeRef?.clientHeight || 360) + 134}px)`,
      }}
      className={styles.tutorial}
    >
      <SwiperContainer
        modules={[Pagination]}
        pagination
        tabIndex={1}
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
        style={{ flex: "0.8 0.8 0%", margin: "-20px 0" }}
      >
        {TUTORIAL_STEPS.map((text, index) => (
          <SwiperSlide style={{ width: "auto", height: "80%" }} key={index}>
            <SlideAnimation
              key={index}
              index={index}
              activeSlideIndex={activeIndex}
              text={text}
            />
          </SwiperSlide>
        ))}
      </SwiperContainer>
      <Button
        variant={isLastSlide ? "secondary" : "outline"}
        onClick={onButtonClick}
        ref={buttonRef}
        aria-label={isLastSlide ? "Get started" : "Continue"}
      >
        {isLastSlide ? "Get started" : "Continue"}
      </Button>
    </div>
  );
}
