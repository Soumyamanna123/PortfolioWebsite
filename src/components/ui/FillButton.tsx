"use client";

import React, { useEffect, useRef, forwardRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface FillButtonProps {
  label: string;
  href?: string;
  className?: string;
}

const FillButton = forwardRef<HTMLAnchorElement, FillButtonProps>(
  ({ label, href = "#", className = "" }, ref) => {
    const internalRef = useRef<HTMLAnchorElement>(null);
    const flairRef = useRef<HTMLSpanElement>(null);

    // Merge external and internal refs
    const setRefs = (el: HTMLAnchorElement) => {
      internalRef.current = el;
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
      }
    };

    useEffect(() => {
      const buttonElement = internalRef.current;
      const flairElement = flairRef.current;
      if (!buttonElement || !flairElement) return;

      const getXY = (e: MouseEvent) => {
        const { left, top, width, height } = buttonElement.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        return { x, y };
      };

      const handleMouseEnter = (e: MouseEvent) => {
        const { x, y } = getXY(e);
        gsap.set(flairElement, { left: `${x}%`, top: `${y}%`, width: "0%", height: "0%" });
        gsap.to(flairElement, {
          width: "250%",
          height: "250%",
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(flairRef.current, {
          width: "0%",
          height: "0%",
          duration: 0.4,
          ease: "power2.out",
        });
      };

      buttonElement.addEventListener("mouseenter", handleMouseEnter);
      buttonElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        buttonElement.removeEventListener("mouseenter", handleMouseEnter);
        buttonElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <Link
        href={href}
        ref={setRefs}
        className={`relative inline-flex items-center justify-center px-6 py-3 text-[#C9E651] border border-[#C9E651] rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:text-black ${className}`}
      >
        <span
          ref={flairRef}
          className="absolute bg-[#C9E651] rounded-full"
          style={{ width: "0%", height: "0%", transform: "translate(-50%, -50%)" }}
        />
        <span className="relative z-10">{label}</span>
      </Link>
    );
  }
);

FillButton.displayName = "FillButton";
export default FillButton;
