import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FillButton = ({ label, href = "#", className = "" }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const flairRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !flairRef.current) return;

    const buttonElement = buttonRef.current;
    
    const flairElement = flairRef.current;

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
      gsap.to(flairElement, {
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
    <a
      href={href}
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center px-6 py-3  text-[#C9E651] border-1 border-[#C9E651] rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:text-black ${className}`}
    >
      {/* Animated background effect */}
      <span
        ref={flairRef}
        className="absolute bg-[#C9E651] rounded-full"
        style={{ width: "0%", height: "0%", transform: "translate(-50%, -50%)" }}
      ></span>

      {/* Button label */}
      <span className="relative z-10">{label}</span>
    </a>
  );
};

export default FillButton;
