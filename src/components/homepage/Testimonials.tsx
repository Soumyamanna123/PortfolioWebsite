"use client";

import React, { useCallback, useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionHeader from "../SectionHeader";
import TestimonialCard from "../TestimonialCard";
import { testimonials } from "@/app/constant/data";
import { GradientLight } from "../GradientLight";

const sentence = ["Don’t take my word for it", "*"];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.5;

  const autoScroll = useCallback(() => {
    if (containerRef.current && !isHovered) {
      const container = containerRef.current;
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }
  }, [isHovered]);

  useAnimationFrame(autoScroll);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* 🌀 Ambient Gradient Lights */}
      <GradientLight />
      <div className="absolute top-1/3 right-0 w-2/3 opacity-50 blur-3xl pointer-events-none">
        <div className="bg-[radial-gradient(circle_at_center,_#C9E651,_transparent_40%)] w-full aspect-square" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 opacity-40 blur-3xl pointer-events-none">
        <div className="bg-[radial-gradient(circle_at_center,_#C9E651,_transparent_40%)] w-full aspect-square" />
      </div>

      <MaxWidthWrapper>
        {/* Header */}
        <div className="text-center space-y-4 relative z-10">
          <SectionHeader
            sectionNumber="04"
            title="TESTIMONIALS"
            sentence={sentence}
            highlight={["*"]}
            subtitle="*Take Theirs"
          />
        </div>

        {/* Testimonial Carousel */}
        <div
          className="mt-16 flex overflow-x-hidden relative z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-6 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
