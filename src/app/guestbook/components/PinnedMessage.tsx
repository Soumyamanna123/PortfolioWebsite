
import React  from 'react';
import { Pin } from "lucide-react";

export const PinnedMessage = () => {
  return (
    <div className="max-w-4xl mx-auto  py-8">
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 rounded-2xl p-[2px] shadow-2xl">
        <div className="bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-cyan-900/90 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="flex-shrink-0 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <Pin className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-white font-semibold text-lg">Pinned</h3>
              </div>
            </div>
          </div>
          
          <p className="text-white/90 text-base leading-relaxed">
            Hey there! Thanks for visiting my website. If you have a moment, I'd love to hear your thoughts on my work. Please log in with your account to leave a comment. Thanks!
          </p>
        </div>
      </div>
    </div>
  );
};