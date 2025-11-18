"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { ReactLenis } from "lenis/react";

import Preloader from "../components/PreLoader";
import CardNav from "@/components/CardNav";

import Beams from "@/components/Beams";

import "../styles/footer.css";

import { navItems } from "@/constant/shared/navItems";
import { Hero } from "@/components/homepage/Hero";
import Collaboration from "@/components/shared/footer/components/Collaboration";
import { FooterSection } from "@/components/shared/footersection/components/Footer";

// ✅ Lazy-load heavy sections
const About = dynamic(() => import("@/components/homepage/About"));
const BentoGridSection = dynamic(
  () => import("@/components/homepage/BentoGridSection")
);
const ProjectsSection = dynamic(
  () => import("@/components/homepage/ProjectList")
);
const Testimonials = dynamic(
  () => import("@/components/homepage/Testimonials")
);
const Footer = dynamic(() => import("@/components/homepage/Footer"));
const NewFooter = dynamic(() => import("@/components/shared/footer/Footer"));

export default function Home() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during preloader
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Scroll to section after preloader
  useEffect(() => {
    if (isLoading) return;
    const targetId = searchParams.get("scrollTo");
    if (!targetId) return;

    const section = document.getElementById(targetId);
    if (section) {
      const offset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + offset;
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }, 200);
    }
  }, [isLoading, searchParams]);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <main>
          <ReactLenis
            root
            options={{
              lerp: 0.1,
              smoothWheel: true,
              duration: 1.2,
            }}
          >
            <CardNav
              logoAlt="Company Logo"
              items={navItems}
              baseColor="#000"
              menuColor="#C9E651"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
              className="backdrop-blur-3xl backdrop-saturate-150 bg-white dark:bg-[rgba(17,25,40,0.75)] rounded-[12px] border border-[rgba(255,255,255,0.125)]"
            />
            {/* 
            <div className="relative w-full h-[600px]">
              <Beams
                beamWidth={21}
                beamHeight={15}
                beamNumber={12}
                lightColor="#C9E651"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
              />
              fbhkfb
            </div> */}
            <Hero />

            <About />
            <BentoGridSection />
            <ProjectsSection />
            <Testimonials />
        
            <Collaboration/>
            
            <FooterSection/>
          </ReactLenis>
        </main>
      )}
    </>
  );
}
