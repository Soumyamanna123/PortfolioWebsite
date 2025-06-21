"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Preloader from "./components/PreLoader";
import Ribbon from "./section/Ribbon";

// Dynamically import sections
const NavBar = dynamic(() => import("./section/NavBar"));
const Hero = dynamic(() => import("./section/Hero"));
const About = dynamic(() => import("./section/About"));
const SkillsSection = dynamic(() => import("./section/MySkills"));
const ProjectsSection = dynamic(() => import("./section/ProjectList"));
const Testimonials = dynamic(() => import("./section/Testimonials"));
const Footer = dynamic(() => import("./section/Footer"));

export default function Home() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll during preloader
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  // Scroll to section after preloader
  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo && !isLoading) {
      const el = document.getElementById(scrollTo);
      if (el) {
        const yOffset = -80; // adjust for sticky navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
          window.history.replaceState(null, "", "/"); // clean URL
        }, 100); // short delay to ensure DOM is ready
      }
    }
  }, [searchParams, isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <main>
          <NavBar />
          <Hero />
          <About />
          <SkillsSection />
          {/* <Ribbon/> */}
          <ProjectsSection />
          <Testimonials />
          <Footer />
        </main>
      )}
    </>
  );
}
