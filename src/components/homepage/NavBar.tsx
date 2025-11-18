"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { withMagnet } from "../WithMagent";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { navLinks } from "@/constant/data";



const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleNavClick = (item: (typeof navLinks)[number]) => {
    closeMenu();

    if (item.section) {
      if (pathname === "/") {
        const el = document.getElementById(item.section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/?scrollTo=${item.section}`);
      }
    } else if (item.href) {
      if (item.href.startsWith("http") || item.href.endsWith(".pdf")) {
        window.open(item.href, "_blank");
      } else {
        router.push(item.href);
      }
    }
  };

  const MagnetLogo = withMagnet(() => (
    <span className="font-serif text-3xl bg-gradient-to-b from-[#C9E651] to-[#000000] text-transparent bg-clip-text">
      SM<span className="bg-clip-text bg-gradient-to-b from-[#C9E651] to-[#000000]">.</span>
    </span>
  ));

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      <div className="fixed top-0 md:top-2 left-0 w-full z-50">
        <MaxWidthWrapper className="px-0 md:px-8">
          <div className="mx-auto px-4 md:px-6 bg-white/10 backdrop-blur-sm border-y md:border border-[#C9E651]/30 md:rounded-full py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" onClick={closeMenu} className="text-2xl font-bold">
                <MagnetLogo />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-10">
                {navLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="relative group text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C9E651] transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-[#C9E651] w-10 h-10 flex items-center justify-center"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-6 w-6"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-6 w-6"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden transition-all duration-500 overflow-hidden ${
                isMenuOpen
                  ? "max-h-screen opacity-100 visible pt-4"
                  : "max-h-0 opacity-0 invisible"
              }`}
            >
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left py-4 px-4 text-white/60 hover:text-white border-t border-white/10"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default NavBar;
