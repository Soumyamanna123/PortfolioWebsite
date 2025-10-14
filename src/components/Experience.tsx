"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { motion } from "framer-motion";
import { experiencedata } from "@/app/constant/data";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const listStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const Experience = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", `${angle + 60}deg`);
  };

  return (
    <div className="w-full space-y-6" id="experience">
      {experiencedata.map((exp, index) => (
        <motion.div
          key={index}
          ref={(el) => (cardRefs.current[index] = el!)}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          className="group card relative border border-white/10 p-6 rounded-xl transition-all duration-300 overflow-hidden"
          style={{
            background: "linear-gradient(to top, #0D100B 0%, #0F1904 100%)",
          }}
        >
          {/* Glow */}
          <div className="glow absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

          <div className="relative z-10 flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black flex items-center justify-center">
              <span className="text-[#C9E651] text-lg font-bold">
                {exp.company.charAt(0)}
              </span>
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="font-medium text-white text-lg">{exp.role}</h4>
                  <p className="text-white/60 text-sm">{exp.company}</p>
                </div>
                <span
                  className="text-white/60 text-[10px] 2xl:text-xs bg-white/5 px-3 lg:px-2 py-1 lg:py-1.5 rounded-full border border-[#528400] mt-2 sm:mt-0 sm:ml-4 max-w-fit"
                  style={{
                    background:
                      "linear-gradient(94deg, #080E15 0%, #2D4800 100%)",
                  }}
                >
                  {exp.period}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mt-4">
            <div className="h-[1px] bg-gradient-to-r from-gray-400/20 via-gray-400/50 to-transparent mb-4" />

            {Array.isArray(exp.description) && (
              <motion.ul
                className="space-y-3"
                variants={listStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemFade}
                    className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
                  >
                    <Image
                      src="/images/assets/profile-bg.png"
                      alt="bullet point"
                      width={16}
                      height={16}
                      className="mt-1"
                    />
                    <div>{item}</div>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {exp.skills && (
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                variants={listStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {exp.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={itemFade}
                    className="text-xs text-[#C9E651] bg-black px-2 py-1 rounded"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
