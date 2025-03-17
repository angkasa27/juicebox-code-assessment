"use client";
import { useMemo, useState } from "react";
import { Step } from "../form.type";

export function useForm() {
  const [step, setStep] = useState<Step>("firstName");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const getLabel = (step: Step) =>
    ({
      firstName: "Let’s start with the basics. Type in your first name.",
      emailAddress: "How should we contact you? Type in your email address.",
      check: `Thanks, ${firstName}! Now, it’s time to get a reality check.\n\nThis will take 2-3 minutes.`,
    }[step]);

  const handleNextStep = () => {
    if (step === "firstName") {
      setStep("emailAddress");
    } else if (step === "emailAddress") {
      setStep("check");
    }
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangeFirstName = (value: string) => {
    setFirstName(value);
  };

  const emailValidation = useMemo(
    () =>
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? "Please enter a valid email address"
        : "",
    [email]
  );

  const firstNameValidation = useMemo(
    () => (firstName.length === 0 ? "First name is required" : ""),
    [firstName]
  );

  return {
    email,
    emailValidation,
    firstName,
    firstNameValidation,
    getLabel,
    handleNextStep,
    onChangeEmail,
    onChangeFirstName,
    step,
  };
}
