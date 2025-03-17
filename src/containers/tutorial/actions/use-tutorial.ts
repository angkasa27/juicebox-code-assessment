import { LayoutContext } from "@/app/(main)/layout";
import { TUTORIAL_STEPS } from "@/constants";
import { useRouter } from "next/navigation";
import { useContext, useMemo, useState } from "react";
import Swiper from "swiper";

export const useTutorial = () => {
  const { cubeRef } = useContext(LayoutContext);
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

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
    router.push("/form");
  };

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

  const handleSwiper = (swiper: Swiper) => {
    setSwiper(swiper);
  };

  return {
    handleSlideChange,
    handleSwiper,
    activeIndex,
    isLastSlide,
    handleButtonClick,
    cubeRef,
  };
};
