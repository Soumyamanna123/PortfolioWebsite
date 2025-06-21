"use client";

import Link from "next/link";
import Image from "next/image";
import FillButton from "@/components/ui/FillButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center py-16">
      <Image
        src="/images/assets/m.gif" // Use your own image
        alt="404 Not Found"
        width={400}
        height={400}
        className="mb-8 max-w-xs sm:max-w-sm md:max-w-md"
      />
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Lost in the pixels?
      </h1>
      <p className="text-white/70 max-w-xl mb-6">
        This page doesn’t exist. Maybe Soumya hasn’t built it yet.
        <br />
        Let's get you back on track!
      </p>
      <div className="flex flex-col md:flex-row md:gap-2 lg:gap-4">
        <FillButton
          label="Contact Soumya"
          href="/contact"
          className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
        />
        <FillButton
          label="Go To Home "
          href="/"
          className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
        />
      </div>
    </div>
  );
}
