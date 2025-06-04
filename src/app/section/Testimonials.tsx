import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <MaxWidthWrapper>
        <div className="text-center space-y-4  ">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            {`{04} - Testimonials`}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mx-auto max-w-2xl font-sans">
            Don’t take my word for it
            <span className="text-[#C9E651]">*</span>
          </h2>
          <p className=" text-xs font-medium tracking-wide">
            <span className="text-[#C9E651] ">*</span>Take Theirs
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
