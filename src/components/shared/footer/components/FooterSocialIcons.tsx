// components/footer/FooterSocialIcons.tsx

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
};

export default function FooterSocialIcons({
  links,
}: {
  links: { icon: string; href: string }[];
}) {
  return (
    <div className="flex space-x-6 text-gray-400">
      {links.map(({ icon, href }) => {
        const Icon = iconMap[icon];
        return (
          <a
            key={icon}
            href={href}
            aria-label={icon}
            className="hover:text-[#3ca2fa] transition-colors"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}
