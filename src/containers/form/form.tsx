"use client";
import styles from "./form.module.css";
import { InputSubmit } from "@/components/fragments/input-submit";
import { useForm } from "./actions/use-form";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(
  () =>
    import("../../components/fragments/lottie-animation").then(
      (mod) => mod.LottieAnimation
    ),
  { ssr: false }
);

gsap.registerPlugin(TextPlugin);

export function DetailForm() {
  const {
    email,
    emailValidation,
    firstName,
    firstNameValidation,
    getLabel,
    handleChangeStep,
    handleChangeEmail,
    handleChangeFirstName,
    step,
    handleClickContinue,
  } = useForm();

  const lottieRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClickNext = () => {
    if (step === "firstName") {
      const tl = gsap.timeline();

      tl.to(guideRef.current, {
        x: "-10%",
        opacity: 0,
        duration: 0.3,
        onComplete: () => handleChangeStep("emailAddress"),
      }).fromTo(
        guideRef.current,
        {
          x: "10%",
          opacity: 0,
          duration: 0.5,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
        }
      );
    } else if (step === "emailAddress") {
      const tl = gsap.timeline();

      tl.to([guideRef.current, inputRef.current], {
        x: "-10%",
        opacity: 0,
        duration: 0.3,
        onComplete: () => handleChangeStep("check"),
      })
        .fromTo(
          guideRef.current,
          {
            y: "10%",
            x: "0%",
            opacity: 0,
            duration: 0.3,
          },
          {
            y: "0%",
            x: "0%",
            opacity: 1,
            duration: 0.3,
          }
        )
        .fromTo(
          inputRef.current,
          {
            y: "10%",
            x: "0%",
            opacity: 0,
            duration: 0.3,
          },
          {
            y: "0%",
            x: "0%",
            opacity: 1,
            duration: 0.3,
          }
        );
    }
  };

  useGSAP(() => {
    if (!guideRef.current || !lottieRef.current) return;

    const tl = gsap.timeline();

    tl.from(lottieRef.current, {
      opacity: 0,
      scale: 0.2,
      duration: 0.5,
      ease: "power3.out",
    })
      .from(guideRef.current, {
        opacity: 0,
        duration: 0.3,
        x: "10%",
        ease: "power1.out",
      })
      .from(inputRef.current, {
        opacity: 0,
        duration: 0.3,
        y: "10%",
        ease: "power1.out",
      });
  });

  return (
    <div className={styles.tutorial}>
      <div className={styles["lottie-wrapper"]} ref={lottieRef}>
        <LottieAnimation />
      </div>
      <p className={styles["text-guide"]} ref={guideRef}>
        {getLabel(step)}
      </p>
      <div className="input" ref={inputRef}>
        {step === "firstName" && (
          <InputSubmit
            error={firstNameValidation}
            onChange={(value) => handleChangeFirstName(value)}
            onClickNext={onClickNext}
            step={step}
            value={firstName}
          />
        )}
        {step === "emailAddress" && (
          <InputSubmit
            error={emailValidation}
            onChange={(value) => handleChangeEmail(value)}
            onClickNext={onClickNext}
            step={step}
            value={email}
          />
        )}
        {step === "check" && (
          <Button
            aria-label="Continue"
            ref={buttonRef}
            variant="secondary"
            onClick={handleClickContinue}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
