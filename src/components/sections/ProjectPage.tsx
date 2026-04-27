"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Plus, Download } from "lucide-react";
import { Project } from "@/lib/projects";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function H({ text }: { text: string }) {
  const boldParts = text.split("**");
  return (
    <>
      {boldParts.map((part, i) => {
        if (i % 2 === 1) {
          const metricParts = part.split(/(\d+[%+]*\+?)/);
          return (
            <strong key={i} style={{ fontWeight: 600 }}>
              {metricParts.map((mp, j) =>
                j % 2 === 1 ? (
                  <span key={j} style={{ color: "#0071e3" }}>{mp}</span>
                ) : (
                  <span key={j} style={{ color: "var(--text-primary)" }}>{mp}</span>
                )
              )}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

function MetaBlock({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <p
        style={{
          fontFamily: textFont,
          fontSize: 12,
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: 4,
        }}
      >
        {label}
      </p>
      {values.map((v, i) => (
        <p
          key={i}
          style={{
            fontFamily: textFont,
            fontSize: 13,
            fontWeight: 400,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}
        >
          {v}
        </p>
      ))}
    </div>
  );
}

function AccordionItem({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-4"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: textFont,
            fontSize: 14,
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          {label}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          <Plus className="h-4 w-4" style={{ color: "var(--text-primary)" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <ul className="pb-4 space-y-2">
              {items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: textFont,
                    fontSize: 13,
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    paddingLeft: 12,
                    borderLeft: "2px solid var(--separator)",
                  }}
                >
                  <H text={item} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: 1, background: "var(--separator)" }} />
    </div>
  );
}

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

function ShoutoutAccordionItem({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  React.useEffect(() => {
    if (!open) { setSparkles([]); return; }

    const palette = ["#0071e3", "#2997ff", "#FF375F"];
    const generate = (): Sparkle => ({
      id: `${Math.random()}-${Date.now()}`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      color: palette[Math.floor(Math.random() * palette.length)],
      delay: Math.random() * 2,
      scale: Math.random() * 0.9 + 0.6,
      lifespan: Math.random() * 10 + 5,
    });

    setSparkles(Array.from({ length: 12 }, generate));

    const interval = setInterval(() => {
      setSparkles((cur) =>
        cur.map((s) => (s.lifespan <= 0 ? generate() : { ...s, lifespan: s.lifespan - 0.1 }))
      );
    }, 100);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-4"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span style={{ fontFamily: textFont, fontSize: 14, fontWeight: 400, color: "var(--text-primary)" }}>
          Shout-outs
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          <Plus className="h-4 w-4" style={{ color: "var(--text-primary)" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-6 space-y-3 relative">
              {sparkles.map((s) => (
                <motion.svg
                  key={s.id}
                  className="pointer-events-none absolute z-20"
                  initial={{ opacity: 0, left: s.x, top: s.y }}
                  animate={{ opacity: [0, 0.8, 0], scale: [0, s.scale, 0], rotate: [75, 120, 150] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: s.delay }}
                  width="24"
                  height="24"
                  viewBox="0 0 21 21"
                >
                  <path
                    d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
                    fill={s.color}
                  />
                </motion.svg>
              ))}
              {items.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: textFont,
                    fontSize: 13,
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    paddingLeft: 12,
                    borderLeft: "2px solid var(--separator)",
                  }}
                >
                  <H text={item} />
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: 1, background: "var(--separator)" }} />
    </div>
  );
}

export function ProjectPage({ project, nextProject }: { project: Project; nextProject?: Project }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start min-h-screen" style={{ background: "var(--bg-section)" }}>

      {/* ── Left panel ── */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:w-[42%] shrink-0 px-10 py-10 flex flex-col" style={{ background: "var(--bg-page)" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1"
        >
          {/* Back link / author */}
          <motion.div variants={fadeUp} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
              style={{
                fontFamily: textFont,
                fontSize: 13,
                fontWeight: 400,
                color: "var(--text-tertiary)",
                textDecoration: "none",
              }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {project.company}
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: 1.0,
              color: "var(--text-primary)",
              marginBottom: "1.75rem",
            }}
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.div variants={fadeUp} className="mb-6 space-y-3">
            {project.description.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: textFont,
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                <H text={para} />
              </p>
            ))}
          </motion.div>

          {/* Case study link */}
          {project.caseStudyHref && (
            <motion.div variants={fadeUp} className="mb-8">
              <a
                href={project.caseStudyHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: textFont,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
                className="transition-opacity duration-200 hover:opacity-60"
              >
                Request full case study.
              </a>
            </motion.div>
          )}

          {/* Website link */}
          {project.websiteHref && (
            <motion.div variants={fadeUp} className="mb-8">
              <a
                href={project.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 group transition-opacity duration-200 hover:opacity-60"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    fontFamily: textFont,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0071e3",
                  }}
                >
                  Visit website
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#0071e3" }}
                />
              </a>
            </motion.div>
          )}

          {/* App store link */}
          {project.appHref && (
            <motion.div variants={fadeUp} className="mb-8">
              <a
                href={project.appHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 group transition-opacity duration-200 hover:opacity-60"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    fontFamily: textFont,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0071e3",
                  }}
                >
                  View app
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#0071e3" }}
                />
              </a>
            </motion.div>
          )}

          {/* Case study download */}
          {project.caseStudyDownload && (
            <motion.div variants={fadeUp} className="mb-8">
              <a
                href={project.caseStudyDownload.href}
                download={project.caseStudyDownload.filename}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl transition-opacity duration-200 hover:opacity-80"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--separator)",
                  textDecoration: "none",
                }}
              >
                <Download
                  className="h-3.5 w-3.5 flex-shrink-0"
                  style={{ color: "var(--text-primary)" }}
                />
                <span
                  style={{
                    fontFamily: textFont,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  Download case study
                </span>
              </a>
            </motion.div>
          )}

          {/* Separator */}
          <motion.div
            variants={fadeUp}
            style={{ height: 1, background: "var(--separator)", marginBottom: "1.5rem" }}
          />

          {/* Metadata grid */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="grid grid-cols-3 gap-x-6 gap-y-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-5">
                <MetaBlock label="When" values={[project.meta.when]} />
                {project.meta.company && (
                  <MetaBlock label="Company" values={[project.meta.company]} />
                )}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-5">
                <MetaBlock label="Role" values={project.meta.role} />
                {project.meta.platforms && (
                  <MetaBlock label="Platforms" values={project.meta.platforms} />
                )}
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-5">
                <MetaBlock label="Pod Team" values={project.meta.podTeam} />
              </div>
            </div>
          </motion.div>

          {/* Accordions */}
          <motion.div variants={fadeUp} className="mt-auto">
            <div style={{ height: 1, background: "var(--separator)" }} />
            <AccordionItem label="The Challenge & Business" items={project.challenge} />
            <AccordionItem label="Solutions" items={project.solutions} />
            <AccordionItem label="Results" items={project.results} />
            <AccordionItem label="Learnings" items={project.learnings} />
            {project.shoutouts && (
              <ShoutoutAccordionItem items={project.shoutouts} />
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 p-3 flex flex-col gap-3">
        {project.images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2rem]"
            style={{ height: "85vh", backgroundColor: project.accentColor }}
          >
            <img
              src={src}
              alt={`${project.title} – view ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.88 }}
            />
          </motion.div>
        ))}

        {/* Next project */}
        {nextProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/work/${nextProject.slug}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[2rem] p-10"
              style={{
                height: "50vh",
                backgroundColor: nextProject.accentColor,
                textDecoration: "none",
                display: "flex",
              }}
            >
              {/* background image */}
              {nextProject.images[0] && (
                <img
                  src={nextProject.images[0]}
                  alt={nextProject.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  style={{ opacity: 0.45 }}
                />
              )}

              {/* overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
              />

              {/* label + title */}
              <div className="relative z-10 flex items-end justify-between gap-6">
                <div>
                  <p
                    style={{
                      fontFamily: textFont,
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: 8,
                    }}
                  >
                    Next Project
                  </p>
                  <h3
                    style={{
                      fontFamily: displayFont,
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.3px",
                      lineHeight: 1.1,
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    {nextProject.title}
                  </h3>
                </div>
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <ArrowUpRight className="h-5 w-5" style={{ color: "#ffffff" }} />
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>

    </div>
  );
}
