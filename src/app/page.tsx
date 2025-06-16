"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Preloader from "./components/PreLoader";

// Dynamically import sections
const NavBar = dynamic(() => import("./section/NavBar"));
const Hero = dynamic(() => import("./section/Hero"));
const About = dynamic(() => import("./section/About"));
const SkillsSection = dynamic(() => import("./section/MySkills"));
const ProjectsSection = dynamic(() => import("./section/ProjectList"));
const Testimonials = dynamic(() => import("./section/Testimonials"));
const Footer = dynamic(() => import("./section/Footer"));

export default function Home() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <main>
          <NavBar />
          <Hero />
          <About />
          <SkillsSection />
          <ProjectsSection />
          <Testimonials />
          <Footer />
        </main>
      )}
    </>
  );
}
