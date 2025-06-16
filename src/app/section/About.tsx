"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import FillButton from "@/components/ui/FillButton";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const aboutParagraphs = [
  <>
    <strong className="text-white">Hi there, I'm Soumya Manna 👋</strong> — a
    passionate <span className="text-[#C9E651]">Software Engineer</span> based
    in Kolkata, India.
  </>,
  <>
    With <span className="text-[#C9E651]">1.5 years</span> of professional
    experience, I build responsive, scalable, and performant web applications. I
    mainly focus on <span className="text-[#C9E651]">frontend development</span>{" "}
    but enjoy working across the full stack.
  </>,
  <>
    I'm an active problem solver on{" "}
    <span className="text-[#C9E651]">LeetCode</span>, having solved hundreds of
    challenges to sharpen my understanding of{" "}
    <span className="text-[#C9E651]">data structures</span> and{" "}
    <span className="text-[#C9E651]">algorithms</span>.
  </>,
  <>
    I've collaborated with cross-functional teams in{" "}
    <span className="text-[#C9E651]">agile</span> workflows, delivering
    high-quality features with a focus on performance and UX.
  </>,
  <>
    In my spare time, I explore tech trends, build side projects, and seek
    growth through new learning opportunities. Let’s connect and build something
    impactful!
  </>,
];

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
          <p className="text-xs md:text-sm text-left uppercase tracking-widest text-gray-400">
            <span className="text-[#C9E651]">{"{"}</span>
            {" 01 "}
            <span className="text-[#C9E651]">{"}"}</span>
            {" - ABOUT ME"}
          </p>
          <h2 className="text-5xl lg:text-6xl pt-4 text-left ">
            Meet <span className="text-[#C9E651]">Soumya,</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 pb-16">
          {/* Left Side */}
          <div className="text-white">
            {/* <div className="flex items-center justify-start gap-4 mb-6">
              <h2 className="text-xl font-normal text-center font-sans">
                More About{" "}
                <span className="text-[#C9E651] [font-family:var(--font-carattere)] italic font-normal">
                  Myself
                </span>
              </h2>
              <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div>
            </div> */}
            <div className="space-y-6 text-white/60 pb-8">
              {aboutParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 lg:gap-4">
              <FillButton
                label="GET Soumya’s Resume"
                href="https://drive.google.com/file/d/1H7jOvt4fqAvKvkVvQxH6j091LbQKJPk3/view"
                className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
              />
              <FillButton
                label="Send a POST Request"
                href="/contact"
                className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
              />
            </div>

            <div className="mt-4 flex justify-center md:justify-start space-x-4 footer-socials">
              <Link href="https://github.com" target="_blank">
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Github className="w-4 h-4" />
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </div>
              </Link>
              <Link href="mailto:soumyamanna729@gmail.com">
                <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
              </Link>
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
