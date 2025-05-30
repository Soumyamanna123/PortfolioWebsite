"use client";

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import FillButton from "@/components/ui/FillButton";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const About = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3;

      if (scrollPosition > triggerPoint) {
        setShowSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-black py-16 transition-opacity duration-700 ease-in-out ${
        showSection ? "opacity-100" : "opacity-0"
      }`}
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {/* Left side: Heading and paragraph */}
          <div className="text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-24 h-[2px] bg-[linear-gradient(to_left,white_20%,transparent_100%)]"></div>
              <h2 className="text-3xl font-semibold text-center font-sans">
                More About{" "}
                <span className="text-white/60 [font-family:var(--font-carattere)] italic font-normal">
                  Myself
                </span>
              </h2>
              <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div>
            </div>

            <p className="text-white/60 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              lacinia nisl ut nulla viverra, sit amet venenatis felis volutpat.
            </p>
            <FillButton
              label="View My Resume"
              href="#"
              className="bg-black/60 text-white/60 border-white/60 mb-4"
            />
            <div className="space-y-4">
              {/* <h4 className="text-lg font-serif text-white">Connect</h4> */}
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
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center items-center bg-white/10 rounded-xl">
            <img
              src="https://via.placeholder.com/600x400.png/000000/FFFFFF?text=Your+Image"
              alt="Profile"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="relative w-full h-px mt-16">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>
    </div>
  );
};

export default About;
