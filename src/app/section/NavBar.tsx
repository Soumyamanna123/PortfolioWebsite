"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { withMagnet } from "../components/WithMagent";
import Link from "next/link";
import { navLinks } from "../constant/data";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const MagnetLogo = withMagnet(() => (
    <span className="font-serif bg-gradient-to-t from-white/30 to-white/90 text-transparent bg-clip-text">
      SM <span className="text-red-600">.</span>
    </span>
  ));

  return (
    <>
      {/* Background Blur Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"></div>
      )}

      <nav className="bg-black shadow-md sticky top-0 z-50 px-6 pt-6">
        <MaxWidthWrapper>
          <div className="mx-auto flex items-center justify-between">
            {/* Logo with magnet effect */}
            <div className="text-2xl font-bold">
              <Link href="/">
                <MagnetLogo />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-white/60 hover:text-white py-6 hover:bg-gray-700 rounded-md transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white flex items-center justify-center w-10 h-10"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Border Below Navigation Buttons */}
          <div className="relative w-full h-px mt-4">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-black pb-4 px-10 transition-all duration-500 z-50 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block text-white/60 hover:text-white py-6 hover:bg-gray-700 rounded-md transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default NavBar;
