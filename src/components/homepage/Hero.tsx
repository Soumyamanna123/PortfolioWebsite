"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { GlowingCircle } from "../GlowingHalfCircle";
import MaxWidthWrapper from "../MaxWidthWrapper";

import Beams from "../Beams";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { words } from "@/constant/data";
import DarkVeil from "../DarkVeil";

export const Hero = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-name",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".scroll-indicator",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: "power1.out" }
      );

      // 🌟 Floating animation for the name
      // gsap.to(".name-float", {
      //   y: -15,
      //   duration: 2.5,
      //   ease: "power1.inOut",
      //   yoyo: true,
      //   repeat: -1,
      // });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black dark:from-black dark:via-[#0a0a0a] dark:to-black"
    >
      {/* === 🌌 Beams Background (Commented) === */}
      {/* <div className="absolute inset-0 z-0 opacity-80">
        <Beams
          beamWidth={6}
          beamHeight={25}
          beamNumber={6}
          lightColor="#5EB553"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={45}
        />
      </div> */}

      {/* === 🌑 DarkVeil Background === */}
      <div className="absolute inset-0 z-0 opacity-80">
        <DarkVeil />
      </div>

      {/* === 🌟 Radial Glow Effect === */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-radial from-[#5EB553]/20 via-[#5EB553]/5 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      {/* === 🧠 Foreground Content === */}
      <div className="relative z-[2] flex pt-40 items-center justify-center h-screen text-center text-white">
        <MaxWidthWrapper>
          {/* === Greeting === */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl font-sans text-left md:text-center pb-6 md:pb-0"
          >
            <AnimatedShinyText className="[font-family:var(--font-carattere)] italic texyt-white inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Hey stranger — let's not stay strangers. I'm</span>
            </AnimatedShinyText>
          </motion.p>

          {/* === Name with Enhanced Styling === */}
          <div className="text-left md:text-center intro-name name-float leading-[0.8] pt-8 pb-14 lg:pt-12 lg:pb-16 2xl:pb-18 2xl:pt-14 relative">
            {/* Glowing text shadow effect */}
            <h1
              className="[font-family:var(--font-syne)] text-[75px] sm:text-[85px] md:text-[120px] 2xl:text-[150px] tracking-tighter font-bold relative"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #9ACD32 50%, #5EB553 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transform: "scaleY(1.8)",
                filter: "drop-shadow(0 0 40px rgba(154, 205, 50, 0.4))",
              }}
            >
              <span className="block sm:inline">Soumya</span>{" "}
              <span className="block sm:inline">Manna</span>
            </h1>
          </div>

          {/* === Dynamic Word Animation === */}
          <div className="hero-text [font-family:var(--font-syne)] text-left md:text-center overflow-hidden pt-4 pb-6 max-w-sm md:max-w-3xl md:mx-auto">
            <p className="text-lg md:text-3xl lg:text-3xl flex items-start md:items-center md:justify-center flex-wrap gap-2 whitespace-nowrap text-white/90">
              <span className="[font-family:var(--font-carattere)] italic text-[#C9E651] text-2xl md:text-4xl">
                I,&nbsp;
              </span>
              <span className="font-medium">Shape</span>
              {/* Word Carousel */}
              <span className="relative [font-family:var(--font-syne)] justify-center inline-flex items-center h-8 md:h-9 w-[150px] md:w-[200px] overflow-hidden">
                {words.map((word, index) => {
                  const IconComponent = word.icon;
                  return (
                    <span
                      key={word.id}
                      className="absolute top-0 justify-center w-full flex items-center gap-2 animate-word-slide opacity-0"
                      style={{
                        animationDelay: `${index * 2}s`,
                        animationDuration: `${words.length * 2}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-[#7da600]/20 backdrop-blur-sm ring-2 ring-[#9ACD32]/30 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-[#C9E651]" />
                      </div>
                      <span className="text-lg md:text-3xl font-semibold text-[#C9E651] drop-shadow-[0_0_10px_rgba(201,230,81,0.5)]">
                        {word.text}
                      </span>
                    </span>
                  );
                })}
              </span>
              <span className="font-medium">into</span> {/* Styled Pills */}
              <span className="md:text-3xl [font-family:var(--font-syne)] border-2 rounded-full py-1 px-4 font-semibold text-[#C9E651] border-[#7da600] bg-[#7da600]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(125,166,0,0.3)] hover:shadow-[0_0_30px_rgba(125,166,0,0.5)] transition-all duration-300">
                Real Projects
              </span>{" "}
              <span className="font-medium">that Deliver</span>{" "}
              <span className="md:text-3xl [font-family:var(--font-syne)] border-2 rounded-full py-1 px-4 font-semibold text-[#C9E651] border-[#7da600] bg-[#7da600]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(125,166,0,0.3)] hover:shadow-[0_0_30px_rgba(125,166,0,0.5)] transition-all duration-300">
                Results
              </span>
            </p>
          </div>

          {/* === Enhanced Scroll Indicator === */}
          <div className="text-sm text-white/60 flex items-center justify-center mx-auto mt-10 scroll-indicator">
            <Link href="#about" scroll={true}>
              <div className="relative group cursor-pointer">
                <div className="border-2 border-[#528400] rounded-full p-2 animate-bounce bg-black/30 backdrop-blur-sm group-hover:bg-[#528400]/20 transition-all duration-300 shadow-[0_0_20px_rgba(82,132,0,0.3)] group-hover:shadow-[0_0_30px_rgba(82,132,0,0.6)]">
                  <ChevronDown className="w-5 h-5 text-[#C9E651]" />
                </div>
                <div className="absolute inset-0 rounded-full bg-[#5EB553]/20 blur-xl animate-pulse" />
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
