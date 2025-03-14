import styles from "./button-icon.module.css";

export const ButtonIcon = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => <button className={styles["button-icon"]} {...props} />;
