// components/footer/HoverFooterPresenter.tsx

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextHoverEffect } from "@/components/nurui/text-hover-effect";

import FooterContactItem from "./FooterContactItem";

import FooterSection from "./FooterSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import RocketScrollToTop from "@/components/RocketScrollToTop";
const currentYear = new Date().getFullYear();

interface Section {
  title: string;
  links: string[];
}

interface Contact {
  type: "email" | "phone" | "location";
  label: string;
  href?: string;
}

interface Props {
  brand: {
    name: string;
    description: string;
  };
  sections: Section[];
  contact: Contact[];
  socialLinks: { icon: string; href: string }[];
}

export default function HoverFooterPresenter({
  brand,
  sections,
  contact,
  socialLinks,
}: Props) {
  return (
    <div className="bg-white dark:bg-black relative h-fit rounded-3xl overflow-hidden ">
      <div className=" rocket-animation">
        <RocketScrollToTop className=" bg-[var(--background-color)] max-w-24 mx-auto  rounded-full   hidden md:block" />
      </div>
      <MaxWidthWrapper>
        <div className=" mx-auto py-14 z-40 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-8 lg:gap-16 pb-12">
            {/* Brand */}
            <div className="flex flex-col space-y-4 lg:col-span-3">
              <div className="flex items-center space-x-2">
                <span className="text-white text-3xl font-bold">
                  {brand.name}
                </span>
              </div>
              <p className="text-sm max-w-sm leading-relaxed">
                {brand.description}
              </p>
            </div>

            {/* Section Links */}
            {sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}

            {/* Contact */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">More</h4>
              <ul className="space-y-4">
                {contact.map((item) => (
                  <FooterContactItem key={item.label} item={item} />
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom: Social + Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            {/* <FooterSocialIcons links={socialLinks} /> */}
            <p className="text-[#B3B3B3]">
              &copy; {currentYear} All Rights Reserved.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base gap-4">
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
          </div>
        </div>

        <div className="relative w-full h-px mb-16">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#C9E651] to-transparent" />
        </div>
      </MaxWidthWrapper>

      <div className="lg:flex hidden h-[30rem]  -mt-32 -mb-36 ">
        <TextHoverEffect text="developer" className="z-50" />
      </div>

      {/* <FooterBackgroundGradient /> */}
    </div>
  );
}
