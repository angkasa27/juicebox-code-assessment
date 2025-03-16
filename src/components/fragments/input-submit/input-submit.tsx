"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface InputSubmitProps {
  value: string;
  onChange: (value: string) => void;
  onClickNext: () => void;
  step: keyof typeof INPUT_TEXT;
  error?: string;
}

const INPUT_TEXT = {
  firstName: {
    placeholder: "First name",
    name: "First name",
    type: "string",
  },
  emailAddress: {
    placeholder: "Email address",
    name: "Email address",
    type: "email",
  },
};

export const InputSubmit = ({
  value,
  step,
  onChange,
  onClickNext,
  error,
}: InputSubmitProps) => {
  const [touched, setTouched] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!error?.length) onClickNext();
      else setTouched(true);
    }
  };

  return (
    <Input
      autoFocus
      placeholder={INPUT_TEXT[step].placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={INPUT_TEXT[step].type}
      name={INPUT_TEXT[step].name}
      error={touched ? error : undefined}
      onBlur={() => setTouched(true)}
      onKeyDown={handleKeyDown}
    >
      <Button
        variant="icon"
        disabled={!value.length || !!error?.length}
        style={{
          width: "31px",
          height: "31px",
          flexShrink: 0,
          marginLeft: "12px",
        }}
        onClick={onClickNext}
      >
        <Image
          aria-hidden
          alt=""
          src="/icons/icon-arrow-up.svg"
          width={18}
          height={18}
        />
      </Button>
    </Input>
  );
};
