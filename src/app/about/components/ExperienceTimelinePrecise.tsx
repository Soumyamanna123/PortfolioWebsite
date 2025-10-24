"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { experiencedata } from "@/app/constant/data";

interface ExperienceTimelinePreciseProps {
  scrollIcon?: string;
  iconSize?: number;
}

const ExperienceTimelinePrecise: React.FC<ExperienceTimelinePreciseProps> = ({
  scrollIcon = "/images/soumya-manna.webp",
  iconSize = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.8"],
  });

  const iconY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative py-20">
      <div ref={containerRef} className="relative space-y-16 min-h-[800px]">
        {/* Neon Timeline Bar */}
        <div className="absolute top-0 bottom-0 left-[calc(33.333%-0.125rem)]">
          {/* Outer glow */}
          <div className="absolute inset-0 w-2 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 blur-xl opacity-50" />
          
          {/* Main bar with neon effect */}
          <div className="absolute inset-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

          {/* Moving Icon */}
          <motion.div
            style={{ top: iconY }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div
              className="relative rounded-full p-1 shadow-[0_0_30px_rgba(59,130,246,0.8)] border-2 border-cyan-400 bg-gradient-to-br from-cyan-400 to-blue-600"
              style={{ width: iconSize + 16, height: iconSize + 16 }}
            >
              <div 
                className="relative rounded-full overflow-hidden ring-2 ring-cyan-300/50" 
                style={{ width: iconSize, height: iconSize }}
              >
                <Image
                  src={scrollIcon}
                  alt="Timeline progress"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rest of content same as above */}
        {experiencedata.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative grid grid-cols-1 md:grid-cols-[33.333%_1fr] gap-6"
          >
            <div className="md:text-right md:pr-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.role.trim()}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {exp.company}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {exp.period}
              </p>
            </div>

            <div className="md:pl-8">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export { ExperienceTimelinePrecise };