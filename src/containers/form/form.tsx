"use client";
import styles from "./form.module.css";
import Lottie from "lottie-react";
import animationData from "@public/lottie/JB2G_Lottie.json";
import { InputSubmit } from "@/components/fragments/input-submit";
import { useForm } from "./actions/use-form";

export function Form() {
  const {
    email,
    emailValidation,
    firstName,
    firstNameValidation,
    getLabel,
    handleNextStep,
    onChangeEmail,
    onChangeFirstName,
    step,
  } = useForm();

  const onClickNext = () => handleNextStep();

  return (
    <div className={styles.tutorial}>
      <div className={styles["lottie-wrapper"]}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <p className={styles["text-guide"]}>{getLabel(step)}</p>
      <div className="input">
        {step === "firstName" && (
          <InputSubmit
            error={firstNameValidation}
            onChange={(value) => onChangeFirstName(value)}
            onClickNext={onClickNext}
            step={step}
            value={firstName}
          />
        )}
        {step === "emailAddress" && (
          <InputSubmit
            error={emailValidation}
            onChange={(value) => onChangeEmail(value)}
            onClickNext={onClickNext}
            step={step}
            value={email}
          />
        )}
      </div>
    </div>
  );
}
