"use client";
import React, { useLayoutEffect, useRef } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ChevronUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import FillButton from "@/components/ui/FillButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const starRef = useRef(null);

  useLayoutEffect(() => {
    if (!starRef.current) return;
    gsap.fromTo(
      starRef.current,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: starRef.current,
          start: "top 100%",
          toggleActions: "play reverse play reverse", // <-- this line
          markers: true,
        },
      }
    );
  }, []);

  return (
    <footer className="py-16 bg-black text-white" id="footer">
      <MaxWidthWrapper>
        {/* Freelance Banner */}
        <div className="flex flex-col md:flex-row justify-between py-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold font-sans flex justify-center items-center gap-2">
              Available for
              <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
                Freelance Work
              </span>
            </h2>
          </div>
          <div className="hidden md:block">
            <a
              href="#top"
              className="  flex  items-center gap-2 hover:text-white/60 transition-colors text-sm font-medium"
            >
              <div className="h-9 w-9 rounded-full bg-white hover:bg-[#C9E651] text-black  flex items-center justify-center transition-colors">
                <ChevronUp className="w-5 h-5" />
              </div>
              Back to the Top
            </a>
          </div>
        </div>

        {/* <div className="space-y-4">
            <div className="flex space-x-4 items-center">
              <h4 className="text-lg font-sans text-white">Connect</h4>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
                className="p-2 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div> */}

        <div className="py-10 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Column: Heading */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-5xl pb-6 font-medium  xl:text-7xl text-white font-sans leading-14 md:leading-16 lg:leading-20">
                Let&apos;s create something extraordinary together
                <span ref={starRef} className="text-[#C9E651]">
                  *
                </span>
              </p>
              <p className="font-sans text-lg text-white/60">
                Let&apos;s Make an{" "}
                <span className="text-[#C9E651] font-normal [font-family:var(--font-carattere)]">
                  Impact
                </span>{" "}
              </p>
            </div>

            {/* Right Column: (Empty for now) */}
            <div className="w-full md:w-1/2 mx-auto">
              {/* Profile Info Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt="Soumya Manna"
                />

                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-sans font-medium text-white">
                    Soumya Manna
                  </h2>
                  <p className="text-gray-500">Software Developer</p>

                  {/* Social Icons */}
                  <div className="mt-4 flex justify-center md:justify-start space-x-4">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                    <Link
                      href="mailto:soumyamanna729@gmail.com"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-4 pt-10 text-center md:text-left ">
                <p className="text-gray-500 text-sm uppercase tracking-wide">
                  Contact Me
                </p>
                <div className="group hover:cursor-pointer inline-flex items-center gap-2 flex-wrap text-xl md:text-2xl lg:text-4xl font-semibold text-white">
                  <span>
                    soumyamanna729<span className="text-[#C9E651]">@</span>
                    gmail.com
                  </span>
                  <span
                    className="inline-block transition-transform duration-300 group-hover:rotate-[358deg] rotate-[315deg]"
                    title="arrow"
                  >
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
                  <span className="text-[#C9E651] ">
                    fast, reliable web developer
                  </span>{" "}
                  who can bring your vision to life.
                </p>
                <FillButton
                  label="Get In Touch"
                  href="https://drive.google.com/file/d/1H7jOvt4fqAvKvkVvQxH6j091LbQKJPk3/view"
                  className="bg-black/60 text-[#C9E651] border border-[#C9E651] hover:bg-[#C9E651] hover:text-black transition-colors duration-300 mb-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="relative w-full h-px my-8">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#C9E651] to-transparent" />
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-4">
          <p className="text-[#B3B3B3]">
            &copy; {currentYear} All Rights Reserved.
          </p>
          <p className="flex items-center gap-2 text-white/60 text-sm">
            Made by
            <span>
              <img
                src="/images/soumya-manna.webp"
                alt="Soumya Manna"
                className="h-6 w-6 rounded-full object-cover"
              />
            </span>
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
