"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Star, Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  actionText: string;
  href: string;
  onActionClick?: () => void;
  featured?: boolean;
  repostHref?: string;
  className?: string;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    {
      title,
      subtitle,
      imageUrl,
      actionText,
      href,
      onActionClick,
      featured = false,
      repostHref,
      className,
    },
    ref
  ) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10.5deg", "-10.5deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "relative h-[26rem] w-full rounded-2xl bg-transparent",
          className
        )}
      >
        <div
          style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
          className="absolute inset-3 grid h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] grid-rows-[1fr_auto] rounded-xl shadow-2xl"
        >
          {/* Background image */}
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full rounded-xl object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/25 via-transparent to-black/70" />

          {/* Card content */}
          <div className="relative flex flex-col justify-between rounded-xl p-4 text-white">

            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                {/* Featured pill */}
                {featured && (
                  <motion.span
                    style={{ transform: "translateZ(70px)" }}
                    className="mb-1 flex w-fit items-center gap-1 rounded-full px-2.5 py-1"
                    initial={{ background: "rgba(255,255,255,0.18)" }}
                    whileHover={{ background: "rgba(255,255,255,0.28)" }}
                    transition={{ duration: 0.2 }}
                    // backdrop-blur via style to avoid Tailwind purge
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {...({ style: { transform: "translateZ(70px)", backdropFilter: "blur(8px)" } } as any)}
                  >
                    <Star className="h-3 w-3 fill-white stroke-none" />
                    <span className="text-[11px] font-medium tracking-wide">
                      Featured
                    </span>
                  </motion.span>
                )}

                <motion.h2
                  style={{ transform: "translateZ(50px)" }}
                  className="text-xl font-bold leading-tight"
                >
                  {title}
                </motion.h2>
                <motion.p
                  style={{ transform: "translateZ(40px)" }}
                  className="text-xs font-light text-white/75"
                >
                  {subtitle}
                </motion.p>
              </div>

              {/* Arrow link */}
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: "2.5deg" }}
                whileTap={{ scale: 0.9 }}
                style={{ transform: "translateZ(60px)" }}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/35"
                aria-label={`Read about ${title}`}
              >
                <ArrowUpRight className="h-4 w-4 text-white" />
              </motion.a>
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-2">
              <motion.button
                onClick={onActionClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ transform: "translateZ(40px)" }}
                className="w-full rounded-lg py-2.5 text-center text-sm font-semibold text-white backdrop-blur-md ring-1 ring-inset ring-white/20 transition-colors"
                // bg via style to avoid Tailwind opacity conflicts
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...({ style: { transform: "translateZ(40px)", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" } } as any)}
              >
                {actionText}
              </motion.button>

              {/* Repost */}
              {repostHref && (
                <motion.a
                  href={repostHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  style={{ transform: "translateZ(40px)" }}
                  className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium text-white/60 transition-colors hover:text-white/90"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Repeat2 className="h-3.5 w-3.5" />
                  Repost this
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);
InteractiveTravelCard.displayName = "InteractiveTravelCard";
