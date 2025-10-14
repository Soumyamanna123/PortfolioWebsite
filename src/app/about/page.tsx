import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import About from "@/components/homepage/About";
import ExperienceTimeline from "./components/ExperienceTimeline";

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center opacity-20">
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/assets/paper-texture-optmized.webp')",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 -mt-20">
        <MaxWidthWrapper>
          <About className="pt-0" />
          <ExperienceTimeline />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AboutPage;
