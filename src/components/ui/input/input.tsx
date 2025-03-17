import { forwardRef, useMemo } from "react";
import styles from "./input.module.css";
import { InputProps } from "./input.type";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, error, placeholder, children, ...props }, ref) => {
    const isError = useMemo(() => !!error?.length, [error]);

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
