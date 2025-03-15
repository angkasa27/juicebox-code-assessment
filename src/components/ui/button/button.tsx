import { forwardRef } from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "outline" | "icon";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={`${styles["button"]} ${styles[variant]}`}
      disabled={disabled}
      aria-disabled={disabled}
      aria-pressed={props["aria-pressed"]}
      {...props}
    />
  )
);

Button.displayName = "Button";
