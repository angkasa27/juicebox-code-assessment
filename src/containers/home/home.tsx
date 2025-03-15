"use client";
import { Button } from "@/components/ui/button";
import styles from "./home.module.css";
import { useContext } from "react";
import { LayoutContext } from "@/app/(main)/layout";

export function Home() {
  const { cubeRef } = useContext(LayoutContext);
  console.log(cubeRef);
  return (
    <main
      className={styles["main-page"]}
      style={{
        height: `calc(100dvh - ${(cubeRef?.clientHeight || 360) + 134}px)`,
      }}
    >
      <div />
      <h1 className={styles["title"]}>
        Compare your thoughts on{" "}
        <span className={styles["gradient-text"]}>technology</span> with current
        industry opinions.
      </h1>
      <Button variant="primary">Get a reality check</Button>
    </main>
  );
}
