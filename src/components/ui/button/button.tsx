import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "outline" | "icon";
}

export const Button = ({ variant, disabled, ...props }: ButtonProps) => (
  <button
    className={`${styles["button"]} ${styles[variant]}`}
    disabled={disabled}
    aria-disabled={disabled}
    aria-pressed={props["aria-pressed"]}
    {...props}
  />
);
