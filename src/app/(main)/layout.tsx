"use client";
import { CubeAnimation } from "@/components/fragments/cube-animation";
import { LayoutContext } from "@/components/hooks/use-layout-context/use-layout-context";
import { useState } from "react";

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
