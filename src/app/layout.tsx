// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Calistoga, Carattere } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-carattere",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is Soumya Manna's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          carattere.variable,
          "bg-white text-black dark:bg-[#000000] dark:text-white font-sans antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
