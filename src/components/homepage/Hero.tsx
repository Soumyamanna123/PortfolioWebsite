"use client";

import React, { useRef } from "react";

import { gsap } from "gsap";

import Spline from "@splinetool/react-spline";
import { ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { GlowingCircle } from "../GlowingHalfCircle";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { words } from "@/app/constant/data";

const Hero = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-name",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.6 }
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
        { y: 0, opacity: 1, duration: 1, delay: 1.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white dark:bg-black "
    >
      {/* === 🌌 Spline Background === */}
      <div className="absolute inset-0 z-0 dark:opacity-60">
        <Spline scene="https://prod.spline.design/UF-WfwoDAcdInf2L/scene.splinecode" />
      </div>

      {/* === 🌕 Glowing Circle Overlay (optional aesthetic) === */}
      <div className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen">
        <GlowingCircle
          size={600}
          color="rgba(35, 72, 0, 0.4)"
          blur={100}
          position="bottom"
        />
      </div>

      {/* === 🧠 Foreground Content === */}
      <div
        className="relative  z-[2] flex pt-40 items-center justify-center h-screen text-center text-white pointer-events-none "
        style={{ pointerEvents: "auto" }}
      >
        <MaxWidthWrapper>
          <p className="text-sm md:text-md text-white/70 font-sans text-center pb-2 ">
            <span className="inline-block animate-wave origin-[70%_70%]">
              👋🏻
            </span>{" "}
            Nice to meet you — I'm
          </p>

          <div className="text-center intro-name leading-[1.1] py-8 2xl:py-12">
            <h1 className="text-[40px] sm:text-[90px] md:text-[120px] lg:text-[150px] tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#C9E651] to-[#000000] transform scale-y-300 md:scale-y-150 2xl:scale-y-200">
              SOUMYA MANNA
            </h1>
          </div>

          <div className="hero-text font-sans text-center overflow-hidden pt-2 pb-6 text-black dark:text-white/90">
            <p className="text-lg md:text-3xl lg:text-3xl flex items-center justify-center flex-wrap gap-2 whitespace-nowrap">
              <span className="[font-family:var(--font-carattere)] italic text-[#9ACD32] dark:text-[#C9E651]">
                I,&nbsp;
              </span>
              Shape
              <span className="relative justify-center inline-flex items-center h-8 md:h-9 w-[130px] md:w-[180px] overflow-hidden">
                {words.map((word, index) => (
                  <span
                    key={word.id}
                    className="absolute top-0 justify-center w-full flex items-center gap-2 animate-word-slide opacity-0 text-[#9ACD32] dark:text-[#C9E651]"
                    style={{
                      animationDelay: `${index * 2}s`,
                      animationDuration: `${words.length * 2}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white/70 dark:bg-white/50"
                    />
                    <span className="text-lg md:text-3xl font-medium">
                      {word.text}
                    </span>
                  </span>
                ))}
              </span>
              into{" "}
              <span className="md:text-3xl border rounded-full py-1 px-4 text-[#9ACD32] dark:text-[#C9E651] border-[#7da600] dark:border-[#528400]">
                Real Projects
              </span>{" "}
              that Deliver{" "}
              <span className="md:text-3xl border rounded-full py-1 px-4 text-[#9ACD32] dark:text-[#C9E651] border-[#7da600] dark:border-[#528400]">
                Results
              </span>
            </p>
          </div>

          <div className="text-sm text-white/60 flex items-center justify-center mx-auto mt-10 scroll-indicator">
            <Link href="#about" scroll={true}>
              <div className="border border-[#528400] rounded-full animate-bounce p-1 cursor-pointer">
                <ChevronDown className="w-4 h-4 bg-clip-text bg-gradient-to-b from-[#C9E651] to-[#000000]" />
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Hero;
