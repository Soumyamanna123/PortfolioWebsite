import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import About from "@/components/homepage/About";


import HeroSection from "@/components/homepage/HeroSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { ExperienceTimelinePrecise } from "./components/ExperienceTimelinePrecise";
import GitHubActivity from "./components/GitHubActivity";


const AboutPage = () => {
  return (
    <div className="relative">
      <HeroSection
        backgroundImage="/images/assets/paper-texture-optmized.webp"
        height="600px"
        overlayOpacity={0.2}
        contentOverlap="500px" // Adjust this value
        className=""
      />

      <div className="relative z-20">
        <MaxWidthWrapper>
          <About className="" />
         {/* <ExperienceTimeline/> */}
         <ExperienceTimelinePrecise/>
         <GitHubActivity/>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AboutPage;