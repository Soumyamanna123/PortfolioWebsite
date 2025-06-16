import React, { useCallback, useRef, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { testimonials } from "../constant/data";
import { motion, useAnimationFrame } from "framer-motion";

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll speed in px/frame (adjust for speed)
  const scrollSpeed = 0.5;

  const autoScroll = useCallback(() => {
    if (containerRef.current && !isHovered) {
      const container = containerRef.current;
      container.scrollLeft += scrollSpeed;

      // Reset scrollLeft for infinite effect
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }
  }, [isHovered]);

  useAnimationFrame(autoScroll);

  return (
    <section id="testimonials" className="py-20">
      <MaxWidthWrapper>
        <div className="text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400">
            <span className="text-[#C9E651]">{"{"}</span>
            {" 04 "}
            <span className="text-[#C9E651]">{"}"}</span>
            {" - TESTIMONIALS"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mx-auto max-w-2xl font-sans">
            Don’t take my word for it
            <span className="text-[#C9E651]">*</span>
          </h2>
          <p className="text-xs font-medium tracking-wide">
            <span className="text-[#C9E651]">*</span>Take Theirs
          </p>
        </div>
        <div
          className="mt-16  flex overflow-x-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-6 px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 bg-black group shadow-lg w-full md:w-1/2 lg:w-1/3 border border-[#C9E651]/30 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className="relative group rounded-lg overflow-hidden p-6 min-w-[280px]">
                  {/* Quote icon in top-right */}
                  <img
                    src="images/assets/quote4.svg"
                    alt=""
                    className="absolute top-0 right-0 h-48 w-48 opacity-20 group-hover:opacity-70 transition-opacity duration-300 -translate-y-1/3 translate-x-1/12 -rotate-180"
                  />

                  {/* Your content goes here */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-lg mb-2">{item.name}</p>
                      <p className="text-xs text-[#C9E651]">{item.position}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
