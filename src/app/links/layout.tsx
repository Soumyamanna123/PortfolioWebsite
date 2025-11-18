"use client"

import CardNav from "@/components/CardNav";
import Footer from "@/components/homepage/Footer";
import { FooterSection } from "@/components/shared/footersection/components/Footer";
import { navItems } from "@/constant/shared/navItems";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CardNav
        // logo={logo}
        logoAlt="Company Logo"
        items={navItems}
        baseColor="#000"
        menuColor="#C9E651"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        className=" backdrop-blur-3xl 
  backdrop-saturate-150 
 bg-white dark:bg-[rgba(17,25,40,0.75)] 
  rounded-[12px] 
  border 
  border-[rgba(255,255,255,0.125)]
"
      />
      {children}
  <FooterSection/>
    </>
  );
}
