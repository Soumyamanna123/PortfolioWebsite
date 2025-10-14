// components/ProjectNotFound.tsx
"use client";


import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import FillButton from "@/components/ui/FillButton";

const ProjectNotFound = () => {
  return (
    <MaxWidthWrapper className="min-h-screen flex flex-col items-center justify-center py-16 lg:py-24 text-center px-4">
      {/* 404 Image */}
      <Image
        src="/images/assets/404-error.webp" // update the path if needed
        alt="Project Not Found"
        width={300}
        height={300}
        className="mb-8 max-w-xs sm:max-w-sm md:max-w-md"
      />

      {/* Sarcastic Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
        What are you even looking for?
      </h1>

      {/* Subtext */}
      <p className="text-white/70 max-w-xl mb-6">
        Seriously though, Soumya hasn't worked on this project... yet.  
        Maybe you got the wrong link — or maybe you're from the future 👀  
        Feel free to reach out and ask Soumya about it!
      </p>

      {/* Buttons */}
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
    </MaxWidthWrapper>
  );
};

export default ProjectNotFound;
