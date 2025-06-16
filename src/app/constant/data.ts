import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export const navLinks = [
  { name: "Work", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact Me", href: "/contact" },
  { name: "Resume", href: "" },
];

export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg", id: "1" },
  { text: "Concepts", imgPath: "/images/concepts.svg", id: "2" },
  { text: "Designs", imgPath: "/images/designs.svg", id: "3" },
  { text: "Code", imgPath: "/images/code.svg", id: "4" },
  { text: "Ideas", imgPath: "/images/ideas.svg", id: "5" },
  { text: "Concepts", imgPath: "/images/concepts.svg", id: "6" },
  { text: "Designs", imgPath: "/images/designs.svg", id: "7" },
  { text: "Code", imgPath: "/images/code.svg", id: "8" },
];

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

// export const socialLinks: SocialLink[] = [
//   {
//     href: "https://github.com",
//     label: "GitHub",
//     icon: <Github />,
//   },
//   {
//     href: "https://linkedin.com",
//     label: "LinkedIn",
//     icon: <Linkedin />,
//   },
//   {
//     href: "https://twitter.com",
//     label: "Twitter",
//     icon: <Twitter />,
//   },
//   {
//     href: "mailto:soumyamanna729@gmail.com",
//     label: "Email",
//     icon: <Mail />,
//   },
// ];

export const experiencedata: Experience[] = [
  {
    role: " Software Developer",
    company: "DataSpace Academy (Satts CyberTech Pvt Ltd)",
    period: "Dec'23 - Present",
    description: [
      "Built responsive interfaces using React.",
      "Optimized performance across platforms.",
      "Collaborated with designers and backend engineers.",
    ],
    skills: ["React", "Tailwind CSS", "Performance Optimization"],
  },
  {
    role: "Software Developer Intern",
    company: "DataSpace Security (Satts CyberTech Pvt Ltd)",
    period: "Aug'23 - Nov'23",
    description: [
      "Worked on internal tools using Node.js.",
      "Improved codebase maintainability.",
      "Gained exposure to cybersecurity fundamentals.",
    ],
    skills: ["Node.js", "Express", "Cybersecurity"],
  },
];

export const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: "images/assets/soumya-manna.png",
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: "images/assets/swap_2025-06-13_15-01-55.png",
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: "images/assets/soumya-manna.png",
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: "images/assets/swap_2025-06-13_15-01-55.png",
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: "images/assets/soumya-manna.png",
  },
];
