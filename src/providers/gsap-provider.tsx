"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactNode } from "react";

gsap.registerPlugin(useGSAP);

export const GsapProvider = ({ children }: { children: ReactNode }) => children;
