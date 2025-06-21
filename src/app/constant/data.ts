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
  { name: "Work", section: "projects" },
  { name: "Experience", section: "experience" },
  { name: "Testimonials", section: "testimonials" },
  { name: "Contact Me", href: "/contact" },
  { name: "Resume", href: "https://drive.google.com/file/d/1H7jOvt4fqAvKvkVvQxH6j091LbQKJPk3/view" }, // or any external link
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
    name: "Arya Majumdar",
    position: "Senior UI/UX Designr",
    text: "Working with Soumya has been one of those genuinely smooth and stress-free experiences you wish you had on every project. As a designer, you often worry about how your vision will translate once it goes into development, but with Soumya, that worry never existed.He just gets it. He listens, pays attention to the little design details, and genuinely cares about making things look and feel right. What I really appreciate is how open he is to feedback, how quick he is to respond, and how calm he stays even when things get challenging. It always felt like we were working toward the same goal, not just in roles but in mindset. He’s thoughtful, collaborative, and incredibly easy to work with. I’d be happy to collaborate with him again anytime.",
    avatar: "images/assets/soumya-manna.png",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: "images/assets/swap_2025-06-13_15-01-55.png",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: "images/assets/soumya-manna.png",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  {
    name: "Abhishek Das",
    position: "Senior Software Engineer",
    text: "I highly recommend Soumya Manna. He is polite, attentive, and always eager to learn. Soumya has shown solid knowledge in frontend development, especially with React, Next.js, and Tailwind. He follows best practices, writes clean code, and is a reliable team player. His understanding of web development, API integration, Node.js, and Git is commendable. His positive attitude and dedication make him a great asset to any team.",
    avatar: "images/assets/swap_2025-06-13_15-01-55.png",
    linkedin: "https://www.linkedin.com/in/username/",
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: "images/assets/soumya-manna.png",
    linkedin: "https://www.linkedin.com/in/username/",
  },
];
