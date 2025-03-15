"use client";
import styles from "./header.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} container`}>
      <div style={{ width: "46px", height: "46px" }}>
        {pathname !== "/" && (
          <Button variant="icon" aria-label="Back">
            <Image
              aria-hidden
              alt=""
              src="/icons/icon-arrow-left.svg"
              width={20}
              height={20}
            />
          </Button>
        )}
      </div>
      <Image
        aria-label="Juicebox Logo"
        alt="Juicebox Logo"
        src="/icons/logo-light.svg"
        width={123}
        height={29}
      />
      <Button variant="icon" aria-label="Restart">
        <Image
          aria-hidden
          alt=""
          src="/icons/icon-restart.svg"
          width={20}
          height={20}
        />
      </Button>
    </header>
  );
};
