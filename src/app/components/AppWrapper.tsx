"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import Preloader from "./PreLoader";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader on each reload or pathname change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // duration same as your preloader animation

    return () => clearTimeout(timer);
  }, [pathname]);

  // prevent scrolling when loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && children}
    </>
  );
}
