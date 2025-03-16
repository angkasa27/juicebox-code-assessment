"use client";
import styles from "./form.module.css";
import Lottie from "lottie-react";
import animationData from "@public/lottie/JB2G_Lottie.json";
import { useMemo, useState } from "react";
import { InputSubmit } from "@/components/fragments/input-submit";

type Step = "firstName" | "emailAddress" | "check";
export function Form() {
  const [step, setStep] = useState<Step>("firstName");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const LABEL: Record<Step, string> = useMemo(
    () => ({
      firstName: "Let’s start with the basics. Type in your first name.",
      emailAddress: "How should we contact you? Type in your email address.",
      check: `Thanks, ${firstName}! Now, it’s time to get a reality check.\n\nThis will take 2-3 minutes.`,
    }),
    [firstName]
  );

  const onClickNext = () => {
    if (step === "firstName") {
      setStep("emailAddress");
    } else if (step === "emailAddress") {
      setStep("check");
    }
  };

  return (
    <div className={styles.tutorial}>
      <div className={styles["lottie-wrapper"]}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <p className={styles["text-guide"]}>{LABEL[step]}</p>
      <div className="input">
        {step === "firstName" && (
          <InputSubmit
            value={firstName}
            step={step}
            onChange={(value) => setFirstName(value)}
            onClickNext={onClickNext}
            error={firstName.length === 0 ? "First name is required" : ""}
          />
        )}
        {step === "emailAddress" && (
          <InputSubmit
            value={email}
            step={step}
            onChange={(value) => setEmail(value)}
            onClickNext={onClickNext}
            error={
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ? "Please enter a valid email address"
                : ""
            }
          />
        )}
      </div>
    </div>
  );
}
