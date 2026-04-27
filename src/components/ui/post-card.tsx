"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Repeat2 } from "lucide-react";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

export interface PostCardProps {
  category: string;
  title: string;
  subheadline: string;
  excerpt: string;
  imageSrc: string;
  href: string;
  featured?: boolean;
  repostHref?: string;
}

export function PostCard({
  category,
  title,
  subheadline,
  excerpt,
  imageSrc,
  href,
  featured = false,
  repostHref = "https://www.linkedin.com/in/sujay-reddy-682a1b142/",
}: PostCardProps) {
  return (
    <Link href={href} className="group block cursor-pointer">
      <motion.div
        className="rounded-2xl bg-white overflow-hidden flex flex-col"
        initial={{ boxShadow: "rgba(0,0,0,0.08) 0px 4px 20px 0px" }}
        whileHover={{
          y: -6,
          boxShadow: "rgba(0,0,0,0.20) 0px 16px 40px 0px",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Upper text area */}
        <div className="relative px-5 pt-5 pb-4 text-center">
          {featured && (
            <span
              className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full"
              style={{
                background: "#1d1d1f",
                fontFamily: textFont,
                fontSize: 11,
                fontWeight: 500,
                color: "#ffffff",
                letterSpacing: "0.01em",
              }}
            >
              <Star className="w-3 h-3 fill-white stroke-none" />
              Featured
            </span>
          )}

          <p
            className="mb-2"
            style={{
              fontFamily: textFont,
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "-0.12px",
              color: "rgba(0,0,0,0.38)",
            }}
          >
            {category}
          </p>

          <h2
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.4px",
              lineHeight: 1.14,
              color: "#1d1d1f",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Image */}
        <div className="overflow-hidden mx-3 rounded-xl" style={{ height: 160 }}>
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-[1.05]"
            style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
          />
        </div>

        {/* Footer */}
        <div className="px-5 pt-4 pb-5 flex flex-col gap-1 flex-1">
          <p
            style={{
              fontFamily: displayFont,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "-0.2px",
              lineHeight: 1.35,
              color: "#1d1d1f",
            }}
          >
            {subheadline}
          </p>
          <p
            style={{
              fontFamily: textFont,
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.08px",
              color: "rgba(0,0,0,0.48)",
            }}
          >
            {excerpt}
          </p>

          <a
            href={repostHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 mt-3 w-fit transition-colors duration-200 hover:text-[#0066cc]"
            style={{
              fontFamily: textFont,
              fontSize: 12,
              fontWeight: 400,
              color: "rgba(0,0,0,0.35)",
              letterSpacing: "0.01em",
            }}
          >
            <Repeat2 className="w-3.5 h-3.5" />
            Repost this
          </a>
        </div>
      </motion.div>
    </Link>
  );
}
