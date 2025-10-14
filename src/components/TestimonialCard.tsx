// src/components/TestimonialCard.tsx

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

type Testimonial = {
  name: string;
  position: string;
  avatar: string;
  text: string;
  linkedin?: string;
};

interface TestimonialCardProps {
  item: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => {
  return (
    <motion.div
      key={index}
      className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 rounded-2xl border border-[#C9E651]/30 bg-white dark:bg-black shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="relative p-6 rounded-lg overflow-hidden min-w-[280px]">
        {/* Decorative Quote Icon */}
        <img
          src="/images/assets/quote4.svg"
          alt=""
          className="absolute top-0 right-0 h-48 w-48 opacity-10 dark:opacity-20 group-hover:opacity-70 transition-opacity duration-300 -translate-y-1/3 translate-x-1/12 -rotate-180"
        />

        {/* User Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-xl text-black dark:text-white leading-tight">
                {item.name}
              </p>
              <p className="text-xs text-[#C9E651] leading-tight">
                {item.position}
              </p>
            </div>
          </div>

          {item.linkedin && (
            <a
              href={item.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9E651] hover:text-blue-500 transition-colors duration-200 cursor-pointer"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>

        {/* Testimonial Text */}
        <p className="text-md text-gray-700 dark:text-white/80">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
