import React, { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#C9E651]/30 px-3 py-1 uppercase text-[#C9E651]",
        className
      )}
      {...otherProps}
    >
      {/* <span>&#10038;</span> */}
      <span className="text-xs">{children}</span>
    </div>
  );
}
