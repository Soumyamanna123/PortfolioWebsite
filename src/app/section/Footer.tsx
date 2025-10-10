"use client";

import React, { useEffect, useRef } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ChevronUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import FillButton from "@/components/ui/FillButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import RocketScrollToTop from "../components/common/RocketScrollToTop";
import Collaboration from "@/components/shared/footer/components/Collaboration";

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
        start: "top 80%",   // when top of text is near 80% of viewport
        end: "bottom 20%",  // when bottom of text reaches 20% of viewport
        scrub: true,        // smooth sync with scroll
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
          {/* <div className="hidden md:block">
            <a
              href="#top"
              className="flex items-center gap-2 hover:text-white/60 transition-colors text-sm font-medium"
            >
              <div className="h-9 w-9 rounded-full bg-white hover:bg-[#C9E651] text-black flex items-center justify-center transition-colors">
                <ChevronUp className="w-5 h-5" />
              </div>
              Back to the Top
            </a>
          </div> */}
          <div className=" rocket-animation">
            <RocketScrollToTop className=" bg-[var(--background-color)] max-w-24 mx-auto  rounded-full -mt-16 hidden md:block" />
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
              <Collaboration/>

              <p className="font-sans text-lg text-white/60">
                Let&apos;s Make an{" "}
                <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
                  Impact
                </span>
              </p>
            </div>

            <div className="w-full  mx-auto footer-profile">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <Image
                  src="/images/assets/swap_2025-06-13_15-01-55.png"
                  alt="Soumya Manna"
                  width={56}
                  height={56}
                  className="rounded-full object-cover h-20 w-20"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-sans font-medium text-white">
                    Soumya Manna
                  </h2>
                  <p className="text-gray-500">Software Developer</p>
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
              </div>

              <div className="space-y-4 pt-10 text-center md:text-left footer-contact">
                <p className="text-xs md:text-sm text-center md:text-left uppercase tracking-widest text-gray-400">
                  <span className="text-[#C9E651]">{"{"}</span>
                  {" 05 "}
                  <span className="text-[#C9E651]">{"}"}</span>
                  {" - CONTACT ME"}
                </p>
                <div className="group inline-flex items-center gap-2 flex-wrap text-xl md:text-2xl lg:text-4xl font-semibold text-white">
                  <span>
                    soumyamanna729
                    <span className="text-[#C9E651]">@</span>
                    gmail.com
                  </span>
                  <span className="inline-block transition-transform duration-300 group-hover:rotate-[358deg] rotate-[315deg]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 md:w-8 md:h-8 text-[#C9E651]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-400 text-md md:text-lg lg:text-xl">
                  Hit me up if you’re looking for a{" "}
                  <span className="text-[#C9E651]">
                    fast, reliable web developer
                  </span>{" "}
                  who can bring your vision to life.
                </p>
                <FillButton
                  label="Get In Touch"
                  href="/contact"
                  className="bg-black/60 text-[#C9E651] border border-[#C9E651] hover:bg-[#C9E651] hover:text-black transition-colors duration-300 mb-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="relative w-full h-px my-8">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#C9E651] to-transparent" />
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-4">
          <p className="text-[#B3B3B3]">
            &copy; {currentYear} All Rights Reserved.
          </p>
          <p className="flex items-center gap-2 text-white/60 text-sm">
            Made by
            <Image
              src="/images/assets/swap_2025-06-13_15-01-55.png"
              alt="Soumya Manna"
              width={24}
              height={24}
              className="rounded-full object-cover h-6 w-6"
            />
            <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
              Soumya Manna
            </span>
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
