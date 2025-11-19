"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";

import CardNav from "@/components/CardNav";
import { navItems } from "@/constant/shared/navItems";

import { Hero } from "@/components/homepage/Hero";
import Collaboration from "@/components/shared/footer/components/Collaboration";
import { FooterSection } from "@/components/shared/footersection/components/Footer";

// Lazy sections
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

export default function Home() {
  return (
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

        <Hero />
        <About />
        <BentoGridSection />
        <ProjectsSection />
        <Testimonials />
        <Collaboration />
        <FooterSection />
      </ReactLenis>
    </main>
  );
}
