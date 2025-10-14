// components/footer/FooterLink.tsx

import React from "react";

export default function FooterLink({ label }: { label: string }) {
  const isLiveChat = label === "Live Chat";

  return (
    <li className="relative">
      <a href="#" className="hover:text-[#C9E651] transition-colors">
        {label}
      </a>
      {isLiveChat && (
        <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
      )}
    </li>
  );
}
