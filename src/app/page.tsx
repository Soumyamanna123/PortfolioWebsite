"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "./section/NavBar";
import About from "./section/About";
import Hero from "./section/Hero";
import SkillsSection from "./section/MySkills";
import ProjectsSection from "./section/ProjectList";
import Testimonials from "./section/Testimonials";
import Footer from "./section/Footer";
import Preloader from "./components/PreLoader";

export default function Home() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // prevent scroll during loading
    document.body.style.overflow = isLoading ? "hidden" : "auto";
  }, [isLoading]);
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80; // Adjust this offset based on your fixed navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <>
      {/* Your existing Home page components */}
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
