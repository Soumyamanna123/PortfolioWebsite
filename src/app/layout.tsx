import type { Metadata } from "next";
import { Inter, Calistoga, Carattere } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import AppWrapper from "./components/AppWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-carattere",
  weight: ["400"], // Only 400 is available for Carattere
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is Soumya Manna's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          carattere.variable,
          "bg-[#000000] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
