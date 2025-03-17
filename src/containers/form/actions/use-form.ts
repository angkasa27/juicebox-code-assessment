"use client";
import { useMemo, useState } from "react";
import { Step } from "../form.type";
import { useRouter } from "next/navigation";

export function useForm() {
  const [step, setStep] = useState<Step>("firstName");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const getLabel = (step: Step) =>
    ({
      firstName: "Let’s start with the basics. Type in your first name.",
      emailAddress: "How should we contact you? Type in your email address.",
      check: `Thanks, ${firstName}! Now, it’s time to get a reality check.\n\nThis will take 2-3 minutes.`,
    }[step]);

  const handleChangeStep = (step: Step) => {
    setStep(step);
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangeFirstName = (value: string) => {
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

  const handleClickContinue = () => {
    router.push("/");
  };

  return {
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
  };
}
