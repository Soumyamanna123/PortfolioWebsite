"use client";

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import FillButton from "@/components/ui/FillButton";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const About = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3;

      if (scrollPosition > triggerPoint) {
        setShowSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about"
      className={`bg-black py-16 transition-opacity duration-700 ease-in-out ${
        showSection ? "opacity-100" : "opacity-0"
      }`}
    >
      <MaxWidthWrapper>
        <div ><h2 className="text-5xl">Meet <span className="text-[#C9E651]">Soumya,</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {/* Left side: Heading and paragraph */}
          <div className="text-white">
            <div className="flex items-center justify-start gap-4 mb-6">
              {/* <div className="w-24 h-[2px] bg-[linear-gradient(to_left,white_20%,transparent_100%)]"></div> */}
              <h2 className="text-xl font-normal text-center font-sans">
                More About{" "}
                <span className="text-[#C9E651] [font-family:var(--font-carattere)] italic font-normal">
                  Myself
                </span>
              </h2>
              <div className="w-24 h-[2px] bg-[linear-gradient(to_right,white_20%,transparent_100%)]"></div>
            </div>

            <p className="text-white/60 mb-4">
              Hi there, I'm <strong>Soumya Manna</strong> 👋 — a passionate
              Software Engineer based in <strong>Kolkata, India</strong>, with a
              solid foundation in Full Stack Web Development and a keen interest
              in building innovative, user-centric tech solutions. I currently
              work as a <strong>Software Engineer at DataSpace Academy</strong>,
              where I contribute to scalable web application development and
              enhance user experiences using modern frameworks.
              <br />
              <br />
              Previously, I interned at <strong>DataSpace Security</strong>,
              gaining hands-on experience in web technologies and real-world
              development workflows. I hold a{" "}
              <strong>B.Tech in Computer Science & Engineering</strong> from the{" "}
              <strong>University of Engineering and Management, Kolkata</strong>
              , where I graduated with a 75%.
              <br />
              <br />
              I'm actively involved in competitive programming and
              problem-solving, with a growing profile on platforms like{" "}
              <a
                href="https://leetcode.com/u/soumyamanna729/"
                className="text-[#C9E651] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
              .
              <br />
              <br />
              My skill set includes{" "}
              <strong>C++, JavaScript, Python, and Java</strong>, along with
              frontend tools like{" "}
              <strong>React, HTML, CSS, and Bootstrap</strong>. On the backend,
              I use <strong>Node.js, Express.js, and REST APIs</strong>, with
              database experience in <strong>MySQL and MongoDB</strong>. I'm
              also experienced with{" "}
              <strong>Git, GitHub, Docker, and AWS</strong>, and follow Agile
              methodologies with a focus on clean, testable code.
              <br />
              <br />
              Feel free to connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/soumya-manna-8461411b2/"
                className="text-[#C9E651] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or email me at{" "}
              <a
                href="mailto:soumyamanna729@gmail.com"
                className="text-[#C9E651] hover:underline"
              >
                soumyamanna729@gmail.com
              </a>{" "}
              — I'd love to collaborate or chat tech!
            </p>

            <FillButton
              label="View My Resume"
              href="https://drive.google.com/file/d/1H7jOvt4fqAvKvkVvQxH6j091LbQKJPk3/view"
              className="bg-black/60 text-[#C9E651] border-[#C9E651] mb-4"
            />
            <div className="space-y-4">
              {/* <h4 className="text-lg font-serif text-white">Connect</h4> */}
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:soumyamanna729@gmail.com"
                  className="p-2 rounded-full bg-white/10 hover:bg-[#C9E651] text-[#C9E651] hover:text-black transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center items-center bg-white/10 rounded-xl">
            <img
              src="https://via.placeholder.com/600x400.png/000000/FFFFFF?text=Your+Image"
              alt="Profile"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      {/* <div className="relative w-full h-px mt-16">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div> */}
    </div>
  );
};

export default About;
