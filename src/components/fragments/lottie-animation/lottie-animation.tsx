"use client";
import Lottie from "lottie-react";
import * as animationData from "./JB2G_Lottie.json";

export function LottieAnimation() {
  return <Lottie animationData={animationData} loop autoplay />;
}
