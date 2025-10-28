"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { experiencedata } from "@/app/constant/data";
import SectionHeader from "@/components/SectionHeader";

interface ExperienceTimelineProps {
  scrollIcon?: string;
  iconSize?: number;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  scrollIcon = "/images/scroll-icon.png",
  iconSize = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(1000);

  // Calculate max scroll distance
  useEffect(() => {
    if (containerRef.current) {
      setMaxScroll(containerRef.current.scrollHeight - iconSize);
    }
  }, [iconSize]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Changed from start start / end end
  });

  // FIXED: Icon starts at top (0) and moves down (maxScroll) as you scroll
  const iconY = useTransform(scrollYProgress, [0, 1], [0, maxScroll]);

  return (
    <div className="relative py-20">

      <div ref={containerRef} className="relative space-y-16">
        {/* Timeline Line */}
        <div className="absolute top-0 bottom-0 left-[calc(33.333%-0.5rem)] w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-900">
          {/* Moving Icon - Starts at TOP */}
          <motion.div
            style={{ y: iconY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 z-10 will-change-transform"
          >
            <div
              className="relative bg-white dark:bg-gray-900 rounded-full p-2 shadow-xl border-4 border-blue-400 dark:border-blue-600"
              style={{ width: iconSize + 16, height: iconSize + 16 }}
            >
              <div
                className="relative"
                style={{ width: iconSize, height: iconSize }}
              >
                <Image
                  src={scrollIcon}
                  alt="Timeline progress"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Items */}
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
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

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
    </div>
  );
};

export default ExperienceTimeline;
