"use client";

import React, { useRef, useState } from "react";
import { Confetti, ConfettiRef } from "./ui/confetti";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";

const CopyEmail = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  const [copied, setCopied] = useState(false);
  const email = "soumyamanna123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);

    confettiRef.current?.fire({});
    toast.success("Email copied!");

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#06101e] via-[#050505] to-[#190017] shadow-[0_0_40px_rgba(255,255,255,0.05)]">
      {/* Gradient glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,102,255,0.4),transparent_70%),radial-gradient(circle_at_bottom,rgba(255,0,128,0.25),transparent_70%)] animate-pulse" />

      {/* Confetti */}
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 size-full z-0"
      />

      {/* Heading */}
      <h2 className="relative z-10 text-center text-3xl md:text-4xl font-semibold text-white drop-shadow-lg leading-snug">
        Let&apos;s work together
        <br />
        on your next project
      </h2>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="relative z-10 mt-6 flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white text-base hover:bg-white/20 transition-all backdrop-blur-md"
      >
        <Copy size={18} />
        <span>{copied ? "Copied!" : email}</span>
      </button>
    </div>
  );
};

export default CopyEmail;
