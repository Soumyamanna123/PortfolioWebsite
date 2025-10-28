import React from "react";
import BentoDemo from "../ui/bento-grid/BentoGrid";
import { Marquee } from "../nurui/marquee";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Ribbon from "./Ribbon";
import About from "./About";

import { DARK_GLOBE_CONFIG, Globe } from "../ui/globe";
import CopyEmail from "../CopyEmail";

const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const featuresDataOne = [
  {
    name: "Collaboration",
    description: "Let's work together on your next project",
    href: "/contact",
    className: "col-span-full xl:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
    ),
  },
  {
    name: "I am very Flexible with Timezone",
    description: "US • UK • India",

    className: "col-span-full md:col-span-2 xl:col-span-1",
    background: <Globe config={DARK_GLOBE_CONFIG} />,
  },
  {
    name: "Animated List",
    description: "A list that animates each item in sequence with a delay",
    href: "/docs/animated-list",
    className: "col-span-full md:col-span-2 xl:col-span-1 xl:row-span-2",
    background: <Ribbon />,
  },
  {
    name: "",
    description: "",
    className: "col-span-full md:col-span-2 xl:col-span-1",
    
    background: <CopyEmail/>,
  },
  {
    name: "The Inside Scoop",
    description:
      "Currently building an EdTech platform to revolutionize learning",
    className: "col-span-full md:col-span-2 xl:col-span-2",
    href: "/docs/terminal",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-6 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

const BentoGridSection = () => {
  return (
    <section aria-label="Features showcase">
      <MaxWidthWrapper>
        <BentoDemo features={featuresDataOne} />
      </MaxWidthWrapper>
    </section>
  );
};

export default BentoGridSection;
