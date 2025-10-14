"use client";

import React, { useEffect, useRef } from "react";

import { ChevronUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import FillButton from "@/components/ui/FillButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import RocketScrollToTop from "../RocketScrollToTop";
import Collaboration from "@/components/shared/footer/components/Collaboration";
import MaxWidthWrapper from "../MaxWidthWrapper";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const footer = footerRef.current;
      if (!footer) return;

      const options = {
        trigger: footer,
        start: "top 80%", // when top of footer hits 80% of viewport height
        once: true,
      };

      gsap.from(".footer-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { ...options },
      });

      gsap.from(".footer-profile", {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: { ...options },
      });

      gsap.from(".footer-contact", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: { ...options },
      });

      gsap.from(".footer-socials a", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: { ...options },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Initial state
    gsap.set(text, { color: "#7a7a7a" });

    // ScrollTrigger animation
    gsap.to(text, {
      color: "#ffffff",
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "top 80%", // when top of text is near 80% of viewport
        end: "bottom 20%", // when bottom of text reaches 20% of viewport
        scrub: true, // smooth sync with scroll
      },
    });
  }, []);

  return (
    <footer
      className="pt-16 pb-8 bg-white dark:bg-black text-white"
      id="footer"
      ref={footerRef}
    >
      <MaxWidthWrapper>
        {/* Freelance Banner */}
        <div className="flex flex-col md:flex-row justify-between py-10">
          <div className="text-center footer-heading">
            <h2 className="text-3xl font-semibold font-sans flex justify-center items-center gap-2">
              Available for
              <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
                FullTime Consultant & Freelance Work
              </span>
            </h2>
          </div>


        </div>

        {/* Content Section */}
        <div className="py-10">
          <div className="flex  flex-col  items-center justify-between gap-6">
            <div
              className="mx-auto     text-center  footer-heading bg-no-repeat bg-contain bg-center py-12"
              style={{ backgroundImage: "url('/images/assets/shape.svg')" }}
            >
              {/* <p
                ref={textRef}
                className="text-5xl pb-6 font-medium xl:text-7xl text-white font-sans leading-14 md:leading-16 lg:leading-20 select-none"
              >
                Open to full-time opportunities and freelance collaborations —
                Let&apos;s create something extraordinary together
                <span className="text-[#C9E651]">*</span>
              </p> */}
              <Collaboration />

              <p className="font-sans text-lg text-white/60">
                Let&apos;s Make an{" "}
                <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
                  Impact
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Gradient Line */}

        {/* Footer Bottom */}
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
