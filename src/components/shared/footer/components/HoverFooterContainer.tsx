// components/footer/HoverFooterContainer.tsx

import React from "react";
import HoverFooterPresenter from "./HoverFooterPresenter";


const footerData = {
  brand: {
    name: "Soumya Manna",
    description: "I'm Soumya - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!",
  },
  sections: [
    {
      title: "General",
      links: [
        "Home",
        "About",
        "Projects"
       
      ],
    },
    {
      title: "Specifics",
      links: ["Attribution", "Guest Book"],
    },
  ],
  contact: [
    { type: "email", label: "hello@nurui.com", href: "mailto:hello@nurui.com" },
    { type: "phone", label: "+91 86373 73116", href: "tel:+918637373116" },
    { type: "location", label: "Sylhet, Bangladesh" },
  ],
  socialLinks: [
    { icon: "Facebook", href: "#" },
    { icon: "Instagram", href: "#" },
    { icon: "Twitter", href: "#" },
    { icon: "Dribbble", href: "#" },
    { icon: "Globe", href: "#" },
  ],
};

export default function HoverFooterContainer() {
  return <HoverFooterPresenter {...footerData} />;
}
