import React from 'react';
import Link from 'next/link';

export const FooterBrand = () => {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2 mb-4 group">
        <div className=" bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform p-2">
          <span className="text-black font-bold text-xl">Soumya Manna</span>
        </div>
       
      </Link>
      <p className=" text-sm max-w-md">
        I'm Soumya - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!
      </p>
    </div>
  );
};