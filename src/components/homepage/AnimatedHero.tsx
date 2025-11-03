"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const text = `Open to full-time opportunities and freelance collaborations - Let's create something extraordinary together.`;
const words = text.split(" ");

export default function AnimatedHero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"], // when animation starts and ends
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordProgress = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    return wordProgress.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordProgress]);

  return (
    <section className="py-20 bg-black text-center min-h-screen">
      <div className="container mx-auto">
        <div className="sticky top-40">
          <p className="text-3xl sm:text-5xl lg:text-7xl font-medium leading-tight font-sans flex flex-wrap justify-center overflow-hidden">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  index < currentWord
                    ? { y: "0%", opacity: 1 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-white mr-2 inline-block whitespace-nowrap"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={
                currentWord >= words.length
                  ? { y: "0%", opacity: 1 }
                  : { y: "100%", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className="text-[#C9E651] inline-block"
            >
              *
            </motion.span>
          </p>
        </div>

        {/* Spacer for scrolling */}
        <div className="h-[200vh]" ref={scrollRef}></div>
      </div>
    </section>
  );
}
