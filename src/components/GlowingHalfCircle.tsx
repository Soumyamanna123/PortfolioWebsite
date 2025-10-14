"use client";

import { ReactNode } from "react";

type GlowingCircleProps = {
  size: number;
  color?: string;
  blur?: number;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  children?: ReactNode;
};

export const GlowingCircle = ({
  size,
  color = "rgba(100, 200, 255, 0.4)",
  blur = 40,
  position = "bottom",
  className = "",
  children,
}: GlowingCircleProps) => {
  // Position styles for placement
  const positionStyles = {
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
    top: "top-0 left-1/2 -translate-x-1/2",
    left: "left-0 top-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={`absolute ${positionStyles[position]} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background: `radial-gradient(circle, ${color} 30%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          borderRadius: "50%", // Keeps glow effect soft but removes any visible border
          transform:
            position === "bottom"
              ? "translateY(50%)"
              : position === "top"
              ? "translateY(-50%)"
              : position === "left"
              ? "translateX(50%)"
              : "translateX(-50%)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
