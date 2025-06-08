"use client";

import React from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import AuthorCard from "../components/AuthorCard";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className=" pt-28  lg:pt-32">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/2  md:sticky md:top-32 self-start">
            <p className="text-5xl text-center md:text-left max-w-xl pb-10  xl:text-7xl text-[#C9E651] font-sans font-medium">
              Let’s Get Acquainted
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-4 ">
              <Image
                src="/images/soumya-manna.webp"
                alt="Soumya Manna"
                width={42}
                height={42}
                className="rounded-full object-cover h-16 w-16 "
              />
              <div className="text-center md:text-left space-y-4 pt-4 md:pt-0">
                <h2 className="text-3xl font-sans font-medium text-white">
                  Soumya Manna
                </h2>
                <p className="text-gray-500">Software Developer</p>

                <p className="text-gray-500">
                  {" "}
                  A passionate software engineer focused on building clean,
                  efficient, and user-friendly web applications. I enjoy solving
                  problems and crafting great digital experiences.
                </p>
                <div className="mt-4 flex justify-center md:justify-start space-x-4 footer-socials">
                  <Link href="https://github.com" target="_blank">
                    <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </div>
                  </Link>
                  <Link href="mailto:soumyamanna729@gmail.com">
                    <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="flex flex-col space-y-4 md:space-y-8">
              <p>
                Hi, I’m Soumya. I’m a software engineer with over 2 years of
                experience building easy-to-use websites and apps. I enjoy
                learning new skills and creating websites that look good and
                work well on all devices like phones, tablets, and computers.
              </p>
              <p>
                I’m open to different opportunities. Whether you want to hire me
                as a full-time employee or need a freelancer for your project,
                I’m ready to help. I’m excited to keep growing my skills and
                deliver great results.
              </p>
              <p>Let’s work together to build something great!</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
