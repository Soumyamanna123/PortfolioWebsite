// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Calistoga, Carattere, Darker_Grotesque } from "next/font/google";
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

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: ["300", "400", "500", "600", "700", "800", "900"], // available weights
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
          darkerGrotesque.variable,
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
