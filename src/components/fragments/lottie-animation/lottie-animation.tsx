"use client";
import Lottie from "lottie-react";
// import animationData from "./JB2G_Lottie.json";
// * Use above import when run at local server
// * This is an issue with deployment on Vercel
import * as animationData from "./JB2G_Lottie.json";

export function LottieAnimation() {
  return <Lottie animationData={animationData} loop autoplay />;
}
