"use client";

import React from "react";
import HeroSection from "@/components/homepage/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Github,
  Linkedin,
  Send,
  Twitter,
  MessageSquare,
  Globe,
  Mail,
  Bird,
} from "lucide-react";

const Page = () => {
  const links = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://linkedin.com" },
    { name: "Telegram", icon: <Send size={18} />, url: "https://t.me" },
    { name: "GitHub", icon: <Github size={18} />, url: "https://github.com" },
    // { name: "Guestbook", icon: <MessageSquare size={18} />, url: "#" },
    { name: "X (Twitter)", icon: <Twitter size={18} />, url: "https://x.com" },
   
  ];

  return (
    <main className="">
      {/* Hero background */}
      {/* <HeroSection
        backgroundImage="/images/assets/paper-texture-optmized.webp"
        height="600px"
        overlayOpacity={0.2}
        contentOverlap="500px"
        className="opacity-30"
      /> */}

      {/* Main content */}
      <MaxWidthWrapper>
        <section className="py-32 flex flex-col items-center text-center">
          {/* Avatar / Logo */}
          <div className="relative">
            {/* Optional glow animation */}
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl animate-pulse -z-10" />
            <div className="rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 w-24 h-24 flex items-center justify-center text-3xl font-bold">
              SM
            </div>
          </div>

          {/* Name */}
          <h1 className="text-3xl font-semibold mt-5">Soumya Manna</h1>

          {/* Roles */}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-800/30 text-blue-400">
              Developer
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-green-800/30 text-green-400">
              Freelancer
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-purple-800/30 text-purple-400">
              Problem Solver
            </span>
          </div>

          {/* Website + Email */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="https://aayushbharti.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2 text-sm hover:bg-white/20 transition"
            >
              <Globe size={14} /> Website
            </a>
            <a
              href="mailto:hello@aayushbharti.in"
              className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2 text-sm hover:bg-white/20 transition"
            >
              <Mail size={14} /> hello@soumyamana.in
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 w-full max-w-sm flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
              >
                <div className="flex items-center gap-3 text-sm md:text-base">
                  {link.icon}
                  <span>{link.name}</span>
                </div>
                <span className="opacity-40">↗</span>
              </a>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Page;
