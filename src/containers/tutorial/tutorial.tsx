"use client";
import { useContext, useMemo, useState } from "react";
import { LayoutContext } from "@/app/(main)/layout";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import styles from "./tutorial.module.css";
import { TUTORIAL_STEPS } from "@/constants";
import Swiper from "swiper";

export function Tutorial() {
  const { cubeRef } = useContext(LayoutContext);
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = useMemo(
    () => activeIndex === TUTORIAL_STEPS.length - 1,
    [activeIndex]
  );

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleNextPage = () => {
    
  }

  const handleButtonClick = () => {
    if (isLastSlide) {
      handleNextPage();
    } else {
      handleNextSlide();
    }
  };
  

  const handleSlideChange = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

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
        onSwiper={(swiper) => setSwiper(swiper)}
        style={{ flex: "0.8 0.8 0%", margin: "-20px 0" }}
      >
        {TUTORIAL_STEPS.map((text, index) => (
          <SwiperSlide style={{ width: "auto", height: "80%" }} key={index}>
            <h3
              style={{
                fontFamily: "Bagoss",
                fontWeight: 400,
                fontSize: "22px",
                lineHeight: "125%",
                letterSpacing: "1%",
                textAlign: "center",
                textWrap: "pretty",
              }}
            >
              {text.split(" ").map((word, idx) => (
                <span key={idx}>{word} </span>
              ))}
            </h3>
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
