"use client";

import React from "react";
import { Pin } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

export const PinnedMessage = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="relative rounded-2xl overflow-hidden">
        {/* ✨ Shine Border Effect */}
        <ShineBorder shineColor={["#10B981", "#A3E635", "#C9E651"]} />

        <div className="  rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg backdrop-blur-xl">
              <Pin className="w-5 h-5 text-yellow-300" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg [font-family:var(--font-syne)]">
                Pinned
              </h3>
            </div>
          </div>

          <p className="text-white/90 text-base leading-relaxed [font-family:var(--font-syne)]">
            Hey there! Thanks for visiting my website. If you have a moment, I'd
            love to hear your thoughts on my work. Please log in with your
            account to leave a comment. Thanks!
          </p>
        </div>
      </div>
    </div>
  );
};
