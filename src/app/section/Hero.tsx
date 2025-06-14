"use client";

import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { gsap } from "gsap";
import { GlowingCircle } from "../components/GlowingHalfCircle";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronDown } from "lucide-react";

import { useGSAP } from "@gsap/react";
import { words } from "../constant/data";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-image",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".intro-hello",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.4 }
      );

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
        ".availability",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 1 }
      );

      gsap.fromTo(
        ".scroll-indicator",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 1.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="relative overflow-hidden pt-16">
      <div className="h-1/2 bg-black relative">
        <div className="absolute inset-0 overflow-hidden">
          <GlowingCircle
            size={600}
            color="rgba(35, 72, 0, 0.4)"
            blur={100}
            position="bottom"
            className="z-0 mix-blend-screen pointer-events-none"
          />
        </div>

        <div className="absolute backdrop-blur-sm left-0 right-0 top-0 bottom-0 h-1/2 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source
              src="https://videos.pexels.com/video-files/9694806/9694806-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <MaxWidthWrapper className="relative">
          <div className="justify-center align-middle flex items-center h-screen">
            <div className="w-screen lg:max-w-7xl">
              <div className="text-heading text-white text-center mb-4 intro-image">
                <img
                  src="/images/soumya-manna.webp"
                  alt="Main Image"
                  className="rounded-full opacity-80 w-32 h-32 object-cover mx-auto ring-1 ring-offset-amber-50 ring-white/20 shadow-2xl shadow-white/30"
                />
              </div>

              <div className="text-sm text-white/60 text-center intro-hello">
                <p className="pt-1 text-lg text-white/60 font-sans">
                  <span className="inline-block animate-wave origin-[70%_70%]">
                    👋🏻
                  </span>{" "}
                  Hello,{" "}
                  <span className="[font-family:var(--font-carattere)] italic text-[#C9E651]">
                    I am
                  </span>
                </p>
              </div>

              <div className="text-center intro-name">
                <h1 className="text-6xl md:text-7xl lg:text-8xl py-2 text-white">
                  Soumya{" "}
                  <span className="[font-family:var(--font-carattere)] italic text-transparent bg-clip-text bg-gradient-to-r from-[#C9E651] to-[#0f172a]">
                    Manna
                  </span>
                </h1>
              </div>

              <div className="hero-text text-white font-sans text-center overflow-hidden pt-2 pb-6">
                <p className="text-xl md:text-3xl lg:text-4xl  flex items-center justify-center flex-wrap gap-2 whitespace-nowrap">
                  <span className="[font-family:var(--font-carattere)] italic text-[#C9E651]">
                    I ,&nbsp; {}
                  </span>
                  {} Shape
                  <span className="relative  inline-flex items-center h-8 md:h-9 w-[130px] md:w-[180px] overflow-hidden">
                    {words.map((word, index) => (
                      <span
                        key={word.id}
                        className="absolute top-0   text-[#C9E651] left-0 w-full flex items-center gap-2 justify-start animate-word-slide opacity-0"
                        style={{
                          animationDelay: `${index * 2}s`,
                          animationDuration: `${words.length * 2}s`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white/50"
                        />
                        <span className="text-lg md:text-3xl font-medium">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                  into <span className="text-[#C9E651] ">Real Projects {}</span>
                  that Deliver {}
                  <span className="text-[#C9E651] "> Results </span>
                </p>
              </div>

              <div
                className="text-sm border border-[#528400]  rounded-full  py-2.5 w-fit px-4 text-white/60 flex items-center justify-center mx-auto availability"
                style={{
                  background:
                    "linear-gradient(94deg, #080E15 0%, #2D4800 100%)",
                }}
              >
                <a href="#footer">
                  {" "}
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75 animate-ping duration-1000" />
                      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                    </div>
                    <p className="text-xs text-white/80  tracking-wide leading-none">
                      Available for work
                    </p>
                  </div>
                </a>
              </div>

              <div className="text-sm text-white/60 flex items-center justify-center mx-auto mt-10 scroll-indicator">
                <div className="border border-white rounded-full animate-bounce p-1">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Hero;
