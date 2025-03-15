"use client";
import { CubeAnimation } from "@/components/fragments/cube-animation";
import { createContext, useState } from "react";

export const LayoutContext = createContext<{
  cubeRef: HTMLDivElement | null;
}>({
  cubeRef: null,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cubeRef, setCubeRef] = useState<HTMLDivElement | null>(null);
  return (
    <LayoutContext.Provider value={{ cubeRef }}>
      <div className={`container`}>
        <CubeAnimation ref={setCubeRef} />
        {children}
      </div>
    </LayoutContext.Provider>
  );
}
