import React from "react";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { FooterBackground } from "./FooterBackground";
import { footerData } from "./footerData";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const FooterSection = () => {
  return (
    <footer
      className="
        bg-[var(--white-color)]
        dark:bg-black
        border-t border-[var(--border-color)]
        w-full
        text-[var(--text-primary-color)]
        rounded-tl-[50px] rounded-tr-[50px]
        lg:rounded-tl-[80px] lg:rounded-tr-[80px]
        xl:rounded-tl-[110px] xl:rounded-tr-[110px]
        rocket-animation
        relative
        overflow-hidden
        py-16 2xl:py-24 px-6
      "
    >
      <FooterBackground />

      <MaxWidthWrapper>
        <div className="relative z-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 justify-between">
            {/* Brand Section (spans 1 column on LG) */}
            <div className="lg:col-span-2">
              <FooterBrand />
            </div>

            {/* Footer Columns (spans 3 columns on LG) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {footerData.map((column) => (
                  <FooterColumn
                    key={column.title}
                    title={column.title}
                    links={column.links}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
