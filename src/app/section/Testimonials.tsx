// src/sections/Testimonials.tsx (or wherever it is)

import React, { useCallback, useRef, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import SectionHeader from "../components/SectionHeader";
import TestimonialCard from "../components/TestimonialCard"; // ✅ import new component
import { testimonials } from "../constant/data";
import { useAnimationFrame } from "framer-motion";

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
    <section id="testimonials" className="py-20">
      <MaxWidthWrapper>
        <div className="text-center space-y-4">
          <SectionHeader
            sectionNumber="04"
            title="TESTIMONIALS"
            sentence={sentence}
            highlight={["*"]}
            subtitle="*Take Theirs"
          />
        </div>

        <div
          className="mt-16 flex overflow-x-hidden"
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
