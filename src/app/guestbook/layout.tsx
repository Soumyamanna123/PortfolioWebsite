import Footer from "@/components/homepage/Footer";
import NavBar from "@/components/homepage/NavBar";

import { FooterSection } from "@/components/shared/footersection/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}

      <FooterSection />
    </>
  );
}
