// components/footer/FooterSection.tsx

import React from "react";
import FooterLink from "./FooterLink";

interface Props {
  title: string;
  links: string[];
}

export default function FooterSection({ title, links }: Props) {
  return (
    <div>
      <h4 className="text-white text-lg font-semibold mb-6">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <FooterLink key={link} label={link} />
        ))}
      </ul>
    </div>
  );
}
