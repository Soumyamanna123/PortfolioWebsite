import React from 'react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-white font-semibold text-lg mb-4 [font-family:var(--font-syne)]  ">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-white  text-sm [font-family:var(--font-syne)] "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};