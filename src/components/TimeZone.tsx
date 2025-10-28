// components/bento/cards/TimezoneCard.tsx
"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const TimezoneCard = () => {
  const timezones = [
    { code: "GB UK", label: "UK" },
    { code: "IN India", label: "India" },
    { code: "US USA", label: "USA" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
      {/* Animated Globe */}
      <div className="flex-1 flex items-center justify-center relative">
        <motion.div
          className="relative w-64 h-64 rounded-full overflow-hidden"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2), transparent 60%),
              radial-gradient(circle at 70% 70%, rgba(96,165,250,0.1), transparent 60%)
            `,
            boxShadow: "0 0 40px rgba(59,130,246,0.2)",
            border: "1px solid rgba(59,130,246,0.3)",
          }}
        >
          {/* Glowing dots (city lights) */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-blue-400/60 blur-[1px]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                  transform: `scale(${Math.random() * 1.5})`,
                }}
              />
            ))}
          </div>

          {/* Subtle longitude/latitude lines */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`long-${i}`}
              className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-500/10"
              style={{
                transform: `rotate(${i * 15}deg)`,
                transformOrigin: "center",
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={`lat-${i}`}
              className="absolute left-0 top-1/2 h-[1px] w-full bg-blue-500/10"
              style={{
                transform: `rotateX(${i * 10}deg)`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Timezone badges */}
      <div className="flex gap-3 justify-center mt-6">
        {timezones.map((tz) => (
          <div
            key={tz.code}
            className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm backdrop-blur-sm"
          >
            {tz.label}
          </div>
        ))}
      </div>

      {/* Location info */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center gap-2 text-blue-300">
          <MapPin size={20} />
          <span className="text-lg">Remote</span>
        </div>
        <div className="text-2xl font-semibold text-white mt-1">India</div>
      </div>
    </div>
  );
};
