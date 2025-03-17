"use client";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import styles from "./tutorial.module.css";
import { TUTORIAL_STEPS } from "@/constants";
import { SlideAnimation } from "@/components/fragments/slide-animation";
import { useTutorial } from "./actions/use-tutorial";

export function Tutorial() {
  const {
    handleSlideChange,
    handleSwiper,
    activeIndex,
    isLastSlide,
    handleButtonClick,
    cubeRef,
  } = useTutorial();

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
        onClick={handleButtonClick}
      >
        {isLastSlide ? "Get started" : "Continue"}
      </Button>
    </div>
  );
}
