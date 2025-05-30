import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-black text-white">
      <MaxWidthWrapper>
        {/* Freelance Banner */}
        <div className="flex flex-col md:flex-row justify-between py-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold font-sans ">
              Available for{" "}
              <span className="text-white/60 font-normal [font-family:var(--font-carattere)]">
                Freelance Work
              </span>
            </h2>
          </div>
          <div className="space-y-4">

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
          </div>
        </div>

        {/* Horizontal line */}
        <div className="relative w-full h-px my-8">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-4">
          <p className="text-[#B3B3B3]">
            &copy; {currentYear} All Rights Reserved.
          </p>
          <p>
            Made by{" "}
            <span className="text-white/60 font-normal [font-family:var(--font-carattere)]">
              Soumya Manna
            </span>
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
