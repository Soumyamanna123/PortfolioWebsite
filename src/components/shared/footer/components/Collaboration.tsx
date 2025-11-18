"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const text = `Open to full-time opportunities and freelance collaborations - Let's create something extraordinary together.`;
const words = text.split(" ");

export default function Collaboration() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // track scroll progress relative to the text section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"], // controls when the animation happens
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordProgress = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordProgress.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordProgress]);

  return (
    <section className="py-32 bg-black text-center">
        
      <div className="container mx-auto">
        <div className="sticky top-40">
          <p className="text-3xl sm:text-5xl lg:text-7xl font-medium leading-tight [font-family:var(--font-syne)]">
            {words.map((word, index) => (
              <span
                key={index}
                className={cn(
                  "text-white/20 transition-colors duration-300",
                  index < currentWord && "text-white"
                )}
              >
                {word + " "}
              </span>
            ))}
            <span className="text-[#C9E651]">*</span>
          </p>
        </div>

        {/* Spacer for scrolling */}
        <div className="h-[380vh] 2xl:h-[520vh]" ref={scrollRef}></div>
      </div>
    </section>
  );
}
