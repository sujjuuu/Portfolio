"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Layers } from "lucide-react";
import { AnimatedHikeCard, Stat } from "@/components/ui/card-25";
import MacOSDock from "@/components/ui/mac-os-dock";

const toolApps = [
  { id: "figma",      name: "Figma",      icon: "/images/tools/figma-logo.png" },
  { id: "framer",     name: "Framer",     icon: "/images/tools/framer1.png" },
  { id: "chatgpt",    name: "ChatGPT",    icon: "/images/tools/chatgpt.png" },
  { id: "claude",     name: "Claude",     icon: "/images/tools/claude.png" },
  { id: "gemini",     name: "Gemini",     icon: "/images/tools/gemini.png" },
  { id: "notion",     name: "Notion",     icon: "/images/tools/notion.png" },
  { id: "perplexity", name: "Perplexity", icon: "/images/tools/Perplexity.png" },
  { id: "gum",        name: "Gum",        icon: "/images/tools/Gum.png" },
];

const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const textFont =
  "'SF Pro Text', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface Project {
  title: string;
  description: string;
  images: string[];
  stats: Stat[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Ask Diya",
    description:
      "Led end-to-end product design for enterprise platforms, defining systems, flows, and interfaces that balance complexity with clarity.",
    images: [
      "/images/projects/craftmyplate/m1.png",
      "/images/projects/craftmyplate/m2.png",
      "/images/projects/craftmyplate/m3.png",
    ],
    stats: [
      { icon: <Briefcase className="h-3.5 w-3.5" />, label: "Design Lead" },
      { icon: <CalendarDays className="h-3.5 w-3.5" />, label: "2023–Present" },
      { icon: <Layers className="h-3.5 w-3.5" />, label: "Web & Mobile" },
    ],
    href: "/work/ask-diya",
  },
  {
    title: "CraftMyPlate",
    description:
      "Shaped the product experience for a fast-growing food-tech startup,from early concepts to a polished consumer app used daily.",
    images: [
      "/images/projects/craftmyplate/C1.png",
      "/images/projects/craftmyplate/C2.png",
      "/images/projects/craftmyplate/CM.png",
    ],
    stats: [
      { icon: <Briefcase className="h-3.5 w-3.5" />, label: "Product Designer" },
      { icon: <CalendarDays className="h-3.5 w-3.5" />, label: "2022–2023" },
      { icon: <Layers className="h-3.5 w-3.5" />, label: "Mobile App" },
    ],
    href: "/work/craftmyplate",
  },
  {
    title: "Wissh",
    description:
      "Built scalable component libraries and token-based design systems that enabled faster, more consistent product development across teams.",
    images: [
      "/images/projects/wish/w3.png",
      "/images/projects/wish/w2.png",
      "/images/projects/wish/w1.png",
    ],
    stats: [
      { icon: <Briefcase className="h-3.5 w-3.5" />, label: "Systems Design" },
      { icon: <CalendarDays className="h-3.5 w-3.5" />, label: "2022–2024" },
      { icon: <Layers className="h-3.5 w-3.5" />, label: "Multi-platform" },
    ],
    href: "/work/wissh",
  },
  {
    title: "Beta Trading Company",
    description:
      "A collection of freelance engagements and personal experiments, branding, interfaces, and concepts built outside of full-time roles.",
    images: [
      "/images/projects/btc/b1.png",
      "/images/projects/btc/b2.png",
      "/images/projects/btc/b3.png",
    ],
    stats: [
      { icon: <Briefcase className="h-3.5 w-3.5" />, label: "Various" },
      { icon: <CalendarDays className="h-3.5 w-3.5" />, label: "2020–Present" },
      { icon: <Layers className="h-3.5 w-3.5" />, label: "Brand & Web" },
    ],
    href: "/work/beta-trading-company",
  },
];

export function WorkSection() {
  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-24 py-28" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-[1200px] mx-auto w-full">

        {/* Section label */}
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
          Work
        </motion.span>

        {/* Section heading */}
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
          className="mb-10"
        >
          Crafted with intention.
        </motion.h2>

        {/* Tool dock */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="flex mb-16"
        >
          <MacOSDock apps={toolApps} />
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <AnimatedHikeCard
                title={project.title}
                images={project.images}
                stats={project.stats}
                description={project.description}
                href={project.href}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
