"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  as?: React.ElementType;
}

function GradientText({
  className,
  style,
  children,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component className={cn("gradient-text-animated", className)} style={style}>
      {children}
    </Component>
  );
}

export { GradientText };
