"use client";

import * as React from "react";
import { ArrowRight, Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Stat {
  icon: React.ReactNode;
  label: string;
}

export interface AnimatedHikeCardProps {
  title: string;
  images: string[];
  stats: Stat[];
  description: React.ReactNode;
  href: string;
  repostHref?: string;
  className?: string;
}

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

function RepostButton({ href }: { href: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleRepost = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const postUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${href}`
        : href;

    navigator.clipboard.writeText(postUrl).catch(() => {});

    const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
    window.open(linkedInShare, "_blank", "noopener,noreferrer");

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleRepost}
      className="mt-4 flex w-fit items-center gap-1.5 cursor-pointer transition-colors duration-200"
      style={{
        fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
        fontSize: 12,
        fontWeight: 400,
        color: copied ? "var(--link-default)" : "var(--text-tertiary)",
        letterSpacing: "0.01em",
        background: "none",
        border: "none",
        padding: 0,
        transition: "color 0.2s ease",
      }}
    >
      <Repeat2 className="h-3.5 w-3.5" />
      {copied ? "Link copied!" : "Repost this"}
    </button>
  );
}

export const AnimatedHikeCard = React.forwardRef<
  HTMLAnchorElement,
  AnimatedHikeCardProps
>(({ title, images, stats, description, href, repostHref, className }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "group relative flex h-full w-full flex-col cursor-pointer rounded-2xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1",
        className
      )}
      style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
      aria-label={`Learn more about ${title}`}
    >
      <div className="flex flex-col flex-1">
        {/* Header: title + arrow */}
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="truncate"
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          <ArrowRight
            className="h-5 w-5 flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            style={{ color: "var(--text-primary)" }}
          />
        </div>

        {/* Image area */}
        {images.length === 1 ? (
          <div className="mb-6 overflow-hidden rounded-xl" style={{ height: 180 }}>
            <img
              src={images[0]}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <div className="relative mb-6 h-36">
            {images.map((src, index) => (
              <div
                key={index}
                className={cn(
                  "absolute h-full w-[42%] overflow-hidden rounded-xl shadow-md transition-all duration-300 ease-in-out",
                  "group-hover:translate-x-[var(--tx)] group-hover:rotate-[var(--r)]"
                )}
                style={{
                  transform: `translateX(${index * 36}px)`,
                  "--tx": `${index * 84}px`,
                  "--r": `${index * 5 - 5}deg`,
                  zIndex: images.length - index,
                } as React.CSSProperties}
              >
                <img
                  src={src}
                  alt={`${title} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div
          className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1"
          style={{
            fontFamily: textFont,
            fontSize: 12,
            color: "var(--text-tertiary)",
            letterSpacing: "0.01em",
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span className="opacity-60">{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          className="flex-1"
          style={{
            fontFamily: textFont,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: "-0.1px",
            color: "var(--text-secondary)",
          }}
        >
          {description}
        </p>

        {/* Repost */}
        {repostHref && <RepostButton href={href} />}
      </div>
    </a>
  );
});

AnimatedHikeCard.displayName = "AnimatedHikeCard";
