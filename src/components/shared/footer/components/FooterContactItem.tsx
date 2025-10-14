// components/footer/FooterContactItem.tsx

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const icons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

interface Contact {
  type: "email" | "phone" | "location";
  label: string;
  href?: string;
}

export default function FooterContactItem({ item }: { item: Contact }) {
  const Icon = icons[item.type];

  return (
    <li className="flex items-center space-x-3">
      <Icon size={18} className="text-[#3ca2fa]" />
      {item.href ? (
        <a href={item.href} className="hover:text-[#3ca2fa] transition-colors">
          {item.label}
        </a>
      ) : (
        <span className="hover:text-[#3ca2fa] transition-colors">{item.label}</span>
      )}
    </li>
  );
}
