"use client";

import React, { useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "TechCorp",
    period: "Jan 2022 - Present",
    description:
      "Built responsive interfaces with React and optimized performance across mobile and web platforms.",
  },
  {
    role: "Intern",
    company: "DataSpace Academy",
    period: "Jun 2021 - Dec 2021",
    description:
      "Worked on internal tools using Node.js and improved codebase maintainability.",
  },
  // Add more experiences if needed
];

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
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="group card relative  border border-white/10 p-6 rounded-xl  transition-all duration-300 overflow-hidden"
          style={{
            background: "linear-gradient(to top, #0D100B 0%, #0F1904 100%)",
          }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          ref={(el) => (cardRefs.current[index] = el!)}
        >
          {/* Glow Border */}
          <div className="glow absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

          {/* Content */}
          <div className="relative z-10 flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-black flex items-center justify-center">
              <span className="text-[#C9E651] text-lg font-bold">
                {exp.company.charAt(0)}
              </span>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h4 className="font-medium text-white text-lg">{exp.role}</h4>
                  <p className="text-white/60 text-sm">{exp.company}</p>
                </div>
                <span
                  className="text-white/60 text-sm bg-white/5 px-5 py-1.5 rounded-full max-w-fit border border-[#528400]"
                  style={{
                    background:
                      "linear-gradient(94deg, #080E15 0%, #2D4800 100%)",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-gray-400/20 via-gray-400/50 to-transparent my-4" />

              <p className="text-white/80 leading-relaxed">{exp.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-[#C9E651] bg-black px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs text-[#C9E651] bg-black px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs text-[#C9E651] bg-black px-2 py-1 rounded">
                  Cybersecurity
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
