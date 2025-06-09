"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import FillButton from "@/components/ui/FillButton";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const About = () => {
  const [showSection, setShowSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSection(true);
            observer.disconnect(); // Run only once
          }
        });
      },
      { threshold: 0.3 } // 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`bg-black pt-16 md:py-16 transition-opacity duration-700 ease-in-out ${
        showSection ? "opacity-100" : "opacity-0"
      }`}
    >
      <MaxWidthWrapper>
        <div>
          <h2 className="text-5xl lg:text-6xl">
            Meet <span className="text-[#C9E651]">Soumya,</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {/* Left Side */}
          <div className="text-white">
            <div className="flex items-center justify-start gap-4 mb-6">
              <h2 className="text-xl font-normal text-center font-sans">
                More About{" "}
                <span className="text-[#C9E651] [font-family:var(--font-carattere)] italic font-normal">
                  Myself
                </span>
              </h2>
              <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div>
            </div>

            <p className="text-white/60 mb-4">
              Hi there, I'm <strong>Soumya Manna</strong> 👋 — a passionate
              Software Engineer based in <strong>Kolkata, India</strong>...{" "}
              {/* truncated for brevity */}
            </p>

            <FillButton
              label="View My Resume"
              href="https://drive.google.com/file/d/1H7jOvt4fqAvKvkVvQxH6j091LbQKJPk3/view"
              className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
            />

            <div className="space-y-4">
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:soumyamanna729@gmail.com"
                  className="p-2 rounded-full bg-white/10 hover:bg-[#C9E651] text-[#C9E651] hover:text-black transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
<div
  className="relative w-full h-[250px] md:h-[300px]  flex justify-center items-center bg-cover bg-center rounded-lg shadow-lg group"
  style={{ backgroundImage: "url('/images/assets/bg-grid.svg')" }}
>
  {/* Black & white image (default) */}
  <Image
    src="/images/assets/default.webp" // black and white version
    alt="Profile BW"
    width={500}
    height={600}
    className="object-contain z-10 absolute transition-opacity duration-500"
  />

  {/* Color image (appears on hover) */}
  <Image
    src="/images/assets/hover.webp" // color version
    alt="Profile Color"
    width={500}
    height={600}
    className="object-contain z-20 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:glow-green"
  />
</div>

        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
