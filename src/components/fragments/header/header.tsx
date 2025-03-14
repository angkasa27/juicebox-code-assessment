import { ButtonIcon } from "@/components/ui/button-icon/button-icon";
import styles from "./header.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ButtonIcon>
        <Image
          aria-hidden
          src="/icons/icon-arrow-left.svg"
          alt="Arrow left icon"
          width={20}
          height={20}
        />
      </ButtonIcon>{" "}
      <Image
        aria-hidden
        src="/icons/logo-light.svg"
        alt="Logo Light"
        width={123}
        height={29}
      />
      <ButtonIcon>
        <Image
          aria-hidden
          src="/icons/icon-refresh.svg"
          alt="Arrow left icon"
          width={20}
          height={20}
        />
      </ButtonIcon>
    </header>
  );
};
