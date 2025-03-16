import { forwardRef, ReactNode } from "react";
import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  required?: boolean;
  children?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, error, placeholder, children, ...props }, ref) => {
    const isError = !!error?.length;
    return (
      <div className={styles["input"]}>
        <input
          ref={ref}
          disabled={disabled}
          aria-disabled={disabled}
          aria-invalid={isError}
          placeholder={placeholder}
          aria-placeholder={placeholder}
          aria-describedby={isError ? error : undefined}
          {...props}
        />
        {children}
      </div>
    );
  }
);

Input.displayName = "Input";
