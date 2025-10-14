"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Preloader from "../components/PreLoader";
import Ribbon from "../components/homepage/Ribbon";
import { navItems } from "./constant/shared/navItems";
import CardNav from "@/components/CardNav";
import "../styles/footer.css"
import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import SkillsSection from "@/components/homepage/MySkills";
import ProjectsSection from "@/components/homepage/ProjectList";
import Testimonials from "@/components/homepage/Testimonials";
import Footer from "@/components/homepage/Footer";
import NewFooter from "@/components/shared/footer/Footer";

// Dynamically import sections
// const NavBar = dynamic(() => import("./section/NavBar"));
// const Hero = dynamic(() => import("./section/Hero"));
// const About = dynamic(() => import("../components/homepage/About"));
// const SkillsSection = dynamic(() => import("./section/MySkills"));
// const ProjectsSection = dynamic(() => import("./section/ProjectList"));
// const Testimonials = dynamic(() => import("./section/Testimonials"));
// const Footer = dynamic(() => import("../components/homepage/Footer"));

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
          {/* <NavBar /> */}
          <CardNav
            // logo={logo}
            logoAlt="Company Logo"
            items={navItems}
            baseColor="#000"
            menuColor="#C9E651"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
            className=" backdrop-blur-3xl 
  backdrop-saturate-150 
 bg-white dark:bg-[rgba(17,25,40,0.75)] 
  rounded-[12px] 
  border 
  border-[rgba(255,255,255,0.125)]
"
          />
          <Hero />
          <About />
          <SkillsSection />
          {/* <Ribbon/> */}
          <ProjectsSection />
          <Testimonials />
          <Footer />
          <NewFooter/>
        </main>
      )}
    </>
  );
}
