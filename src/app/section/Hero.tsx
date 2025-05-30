"use client";

import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { GlowingCircle } from "../components/GlowingHalfCircle";
import FillButton from "@/components/ui/FillButton";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (error) {
          console.error("Video autoplay failed:", error);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <motion.section
      className="relative overflow-hidden" // Added overflow-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Spotlight
        className="-top-40 -left-10  md:-left-32 md:-top-20 h-screen  "
        fill="white"
      />
      <Spotlight
        className="top-10 left-full  h-[80vh]  w-[50vw]  "
        fill="purple"
      />
      <Spotlight className="top-28 left-80 h-[80vh]  w-[50vw] " fill="blue" />
      <div className="h-1/2 bg-black  relative">
        <div className="absolute inset-0 overflow-hidden">
          <GlowingCircle
            size={600}
            color="rgba(255, 255, 255, 0.15)" // Softer glow
            blur={100} // More diffused glow
            position="bottom"
            className="z-0 mix-blend-screen pointer-events-none" // Blending fix
          />
        </div>
        <div className="absolute backdrop-blur-sm left-0 right-0 top-0 bottom-0 h-1/2 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute  inset-0 w-full h-full object-cover opacity-10"
          >
            <source
              src="https://videos.pexels.com/video-files/9694806/9694806-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <MaxWidthWrapper className="relative">
          <motion.div
            className="justify-center align-middle flex items-center h-screen"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-screen lg:max-w-7xl">
              <motion.div
                className="text-heading text-white text-center mb-4"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img
                  src="/images/soumya-manna.webp"
                  alt="Main Image"
                  className="rounded-full opacity-80 w-32 h-32 object-cover mx-auto ring-1 ring-offset-amber-50 ring-white/20 shadow-2xl shadow-white/30"
                />
              </motion.div>

              <motion.div
                className="text-sm text-white/60 text-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
  <p className="pt-1 text-lg text-white/60 font-sans">
    <span className="inline-block animate-wave origin-[70%_70%]">👋🏻</span> Hello, I am{" "}
  </p>
              </motion.div>
              <motion.div
                className="text-sm text-white/60 text-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="text-8xl py-1  text-white">
                  Soumya{" "}
                  <span className="[font-family:var(--font-carattere)] italic text-white/60">
                    Manna
                  </span>
                </h1>
              </motion.div>
              <motion.div
                className="text-sm text-white/60 text-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* <div className="w-full text-lg mx-auto font-normal text-white/60 py-1">
                  Build websites with{" "}
                  <FlipWords words={words} className="text-white" />
                </div> */}
              </motion.div>
              {/* <motion.div
                className="text-sm text-white/60 text-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <button
                  onClick={() => alert("Button clicked!")}
                  className="px-8 py-3 mt-4 bg-black text-white rounded-full cursor-pointer font-semibold border border-white/30 transition-shadow shadow-md hover:shadow-lg hover:shadow-white/50 focus:outline-none border-b-2 border-transparent hover:border-white"
                >
                  Contact Me
                </button>
              </motion.div> */}
              <motion.div
                className="text-sm text-white/60 flex items-center justify-center mx-auto"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
<div className="flex items-center gap-2">
  {/* Dot wrapper with precise alignment */}
  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
    {/* Ping animation - perfectly centered */}
    <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping duration-1000"></span>
    
    {/* Static dot - perfectly centered */}
    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
  </div>

  {/* Status text with improved vertical alignment */}
  <p className="text-sm text-white/70 font-medium tracking-wide leading-none">
    Available for work
  </p>
</div>




              </motion.div>

              <motion.div
                className="text-sm text-white/60 flex items-center justify-center mx-auto mt-10"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="border border-white rounded-full animate-bounce p-2">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </div>
    </motion.section>
  );
};

export default Hero;
