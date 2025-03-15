import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/providers/lenis-provider";
import { Header } from "@/components/fragments/header";

import localFont from "next/font/local";

const Bagoss = localFont({
  src: "../../public/fonts/Bagoss/Bagoss.ttf",
  variable: "--font-bagoss",
});

const Sohne = localFont({
  src: "../../public/fonts/Sohne/Sohne-Buch.otf",
  variable: "--font-sohne",
});

export const metadata: Metadata = {
  title: "Juicebox",
  description: "This is a project for juicebox Frontend Developer Code Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Bagoss.variable} ${Sohne.variable}`}>
        <LenisProvider>
          <Header />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
