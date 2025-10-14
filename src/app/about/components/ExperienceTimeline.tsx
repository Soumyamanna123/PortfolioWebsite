"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiencedata } from "@/app/constant/data";

const ExperienceTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll progress of entire timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  // Convert progress → dot position
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={timelineRef}
      className="relative py-20 space-y-16 overflow-hidden"
    >
      {/* ===== Timeline Line & Moving Dot ===== */}
      <div className="absolute top-0 bottom-0 left-[calc(33.333%-0.5rem)] w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900">
        <motion.div
          style={{ y: dotY }}
          className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-lg"
        />
      </div>

      {/* ===== Experience Items ===== */}
      {experiencedata.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative md:grid md:grid-cols-[1fr_1fr] gap-6 md:pl-[calc(33.333%+2rem)]"
        >
          {/* Left Column: Company & Role */}
          <div className="md:absolute md:left-0 md:w-[30%] text-right pr-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.role.trim()}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exp.company}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {exp.period}
            </p>
          </div>

          {/* Right Column: Work Details */}
          <div>
            {/* Description */}
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
