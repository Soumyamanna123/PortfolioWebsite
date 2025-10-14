"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import FillButton from "@/components/ui/FillButton";
import SectionHeader from "../SectionHeader";
import MaxWidthWrapper from "../MaxWidthWrapper";
import clsx from "clsx";

interface AboutProps {
  className?: string;
}

const SOCIAL_LINKS = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:soumyamanna729@gmail.com", icon: Mail, label: "Email" },
];

const ABOUT_PARAGRAPHS = [
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
    challenges to strengthen my understanding of{" "}
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

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section
      id="about"
      className={clsx(
        "pt-16 md:py-16 transition-opacity duration-700 ease-in-out",
        className
      )}
    >
      <MaxWidthWrapper>
        {/* Section Header */}
        <SectionHeader
          sectionNumber="01"
          title="ABOUT ME"
          sentence={["Meet", "Soumya"]}
          highlight={["Soumya"]}
          alignClasses="text-center md:text-left"
          justify="start"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 pb-16">
          {/* LEFT SIDE */}
          <div className="text-white">
            <div className="space-y-6 text-white/60 pb-8">
              {ABOUT_PARAGRAPHS.map((content, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="text-base leading-relaxed"
                >
                  {content}
                </motion.p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row md:gap-2 lg:gap-4">
              <FillButton
                label="Get Soumya’s Resume"
                href="https://drive.google.com/file/d/1H7jOvt4fqAvKvkVvQxH6j091LbQKJPk3/view"
                className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
              />
              <FillButton
                label="Send a POST Request"
                href="/contact"
                className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
              />
            </div>

            {/* Social Links */}
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                >
                  <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Image Section */}
          <div
            className="relative w-full h-[250px] md:h-[300px] flex justify-center items-center bg-cover bg-center rounded-lg shadow-lg group"
            style={{ backgroundImage: "url('/images/assets/bg-grid.svg')" }}
          >
            <Image
              src="/images/assets/default.webp"
              alt="Soumya Manna Black & White"
              width={500}
              height={600}
              className="object-contain absolute z-10 transition-opacity duration-500"
              priority
            />
            <Image
              src="/images/assets/hover.webp"
              alt="Soumya Manna Color"
              width={500}
              height={600}
              className="object-contain absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:glow-green"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
