// components/homepage/HeroSection.tsx
import React from "react";
import Image from "next/image"; // Add this import

interface HeroSectionProps {
  backgroundImage: string;
  height?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  contentOverlap?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  height = "600px",
  overlay = true,
  overlayOpacity = 0.3,
  children,
  className = "",
  contentOverlap = "0px",
}) => {
  return (
    <>
      <div className={`relative ${className}`} style={{ height }}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Overlay */}
        {overlay && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}

        {/* Content */}
        {children && <div className="relative z-10 h-full">{children}</div>}
      </div>
      
      {/* Spacer for content overlap */}
      <div style={{ marginTop: `-${contentOverlap}` }} />
    </>
  );
};

export default HeroSection;