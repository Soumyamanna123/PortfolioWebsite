import React from "react";

export const FooterBackground = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <h2
        className="
          font-extrabold 
          text-[160px] 
          sm:text-[220px] 
          md:text-[300px] 
          lg:text-[300px] 
          2xl:text-[420px] 
         
          leading-none 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-b 
          from-black/10 
          to-black/30 
          dark:from-white/10 
          dark:to-white/20
          opacity-30
          select-none 
          whitespace-nowrap 
        "
        style={{ letterSpacing: "-0.04em" }}
      >
        Developer
      </h2>
    </div>
  );
};
