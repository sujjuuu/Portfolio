"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Tag, Clock } from "lucide-react";
import { AnimatedHikeCard, Stat } from "@/components/ui/card-25";
import { GradientText } from "@/components/ui/gradient-text";

const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const textFont =
  "'SF Pro Text', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const linkedIn = "https://www.linkedin.com/in/sujay-reddy-682a1b142/";

const H = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{children}</span>
);

const posts = [
  {
    title: "Design in the Age of AI",
    images: ["/images/Ai.webp"],
    stats: [
      { icon: <Tag className="h-3.5 w-3.5" />, label: "AI & Design" },
      { icon: <Clock className="h-3.5 w-3.5" />, label: "4 min read" },
    ] as Stat[],
    description: (
      <>
        AI is not the disruption it&apos;s the exposure.{" "}
        <H>Design&apos;s real value</H> isn&apos;t in screens.{" "}
        <H>It&apos;s in decisions.</H>
      </>
    ),
    href: "/pov/ai-and-designers",
  },
  {
    title: "Invisible UX",
    images: ["/images/invisible-ux.png"],
    stats: [
      { icon: <Tag className="h-3.5 w-3.5" />, label: "UX & AI" },
      { icon: <Clock className="h-3.5 w-3.5" />, label: "4 min read" },
    ] as Stat[],
    description: (
      <>
        We&apos;re moving from <H>interaction</H> to <H>intent</H>. The interface
        isn&apos;t disappearing it&apos;s fading into the background.
      </>
    ),
    href: "/pov/invisible-ux",
  },
  {
    title: "Sustainable Design Strategies",
    images: ["/images/sustainable.png"],
    stats: [
      { icon: <Tag className="h-3.5 w-3.5" />, label: "Sustainability" },
      { icon: <Clock className="h-3.5 w-3.5" />, label: "5 min read" },
    ] as Stat[],
    description: (
      <>
        Sustainability is no longer a constraint,{" "}
        <H>it&apos;s a design advantage.</H> Six BCG strategies for{" "}
        <H>designing across the full product lifecycle.</H>
      </>
    ),
    href: "/pov/sustainable-design",
  },
];

export function POVSection() {
  return (
    <section className="h-screen overflow-hidden px-8 md:px-16 lg:px-24 py-20" style={{ background: "var(--bg-section)" }}>
      <div className="max-w-[1200px] mx-auto w-full">

        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: textFont,
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "var(--text-tertiary)",
          }}
          className="block mb-10"
        >
          Point of View
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          style={{
            fontFamily: displayFont,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.07,
            letterSpacing: "-0.28px",
            color: "var(--text-primary)",
          }}
          className="mb-16"
        >
          Things I think about.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {posts.map((post, i) => (
            <motion.div
              key={post.href}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <AnimatedHikeCard
                title={post.title}
                images={post.images}
                stats={post.stats}
                description={post.description}
                href={post.href}
                repostHref={linkedIn}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-opacity duration-200 hover:opacity-70"
          >
            <span
              style={{
                fontFamily: displayFont,
                fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                fontWeight: 600,
                letterSpacing: "-0.25px",
                color: "var(--text-primary)",
              }}
            >
              Have a take?{" "}
              <GradientText className="rounded-sm">
                Share your thoughts directly.
              </GradientText>
            </span>
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--text-primary)" }} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
