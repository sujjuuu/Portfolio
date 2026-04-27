'use client'

import * as React from "react";
import { cn } from "@/lib/utils";

export interface HoverSlatButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  initialText: string;
  hoverText: string;
  fill?: boolean;
  slotClassName?: string;
  hoverSlotClassName?: string;
}

const HoverSlatButton = React.forwardRef<HTMLDivElement, HoverSlatButtonProps>(
  ({ initialText, hoverText, fill = false, className, slotClassName, hoverSlotClassName, ...props }, ref) => {
    if (initialText.length !== hoverText.length) {
      console.error("Initial and hover text must have the same length.");
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("group flex cursor-pointer", fill && "w-full h-full", className)}
        {...props}
      >
        {initialText.split("").map((char, index) => (
          <div
            key={index}
            className={cn(
              "relative flex items-center justify-center overflow-hidden font-black text-white transition-all duration-700",
              fill ? "flex-1 h-full text-xl tracking-wider" : "h-10 w-9 text-sm",
              "bg-sky-500",
              slotClassName
            )}
          >
            {/* Hover panel slides in from alternating directions */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-zinc-900 transition-transform duration-300 group-hover:translate-y-0",
                index % 2 === 0 ? "translate-y-full" : "-translate-y-full",
                hoverSlotClassName
              )}
            >
              {hoverText[index]}
            </div>
            {char}
          </div>
        ))}
      </div>
    );
  }
);

HoverSlatButton.displayName = "HoverSlatButton";
export default HoverSlatButton;
