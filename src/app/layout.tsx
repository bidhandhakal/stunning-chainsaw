import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MenuButton } from "@/components/ui/menu-button";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Preloader from "@/components/ui/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIDHAN | DEVELOPER",
  description: "Bidhan Dhakal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <SmoothCursor />
          {children}
          <Preloader />
          <MenuButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
