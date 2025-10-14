"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  sectionNumber: string;
  title: string;
  sentence: string[];
  highlight?: string[];
  subtitle?: string;
  alignClasses?: string;
  justify?: "start" | "center" | "end";
};

const SectionHeader = ({
  sectionNumber,
  title,
  sentence,
  highlight = [],
  subtitle,
  alignClasses = "text-center",
  justify = "center",
}: SectionHeaderProps) => {
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[justify];
  return (
    <div
      className={`gap-4 pt-4 pb-8 md:pb-12 lg:pb-18 max-w-3xl mx-auto ${alignClasses}`}
    >
      <motion.p
        className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#C9E651]">{"{"}</span>
        {` ${sectionNumber} `}
        <span className="text-[#C9E651]">{"}"}</span>
        {` - ${title.toUpperCase()} `}
      </motion.p>

      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-medium font-sans flex flex-wrap gap-2 ${justifyClass}`}
      >
        {sentence.map((word, index) => {
          const isHighlight = highlight.includes(word);
          return (
            <motion.span
              key={word + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.3,
                type: "spring",
                stiffness: 100,
              }}
              className={`transition-colors duration-300 ${
                isHighlight ? "text-[#C9E651] font-normal" : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </h2>

      {subtitle && (
        <motion.p
          className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
