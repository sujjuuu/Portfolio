"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { POVPost } from "@/lib/pov";
import { phases, pillars } from "@/lib/ai-process";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

function Bold({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

export function POVPage({ post }: { post: POVPost }) {
  const [processOpen, setProcessOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:items-start min-h-screen" style={{ background: "var(--bg-section)" }}>

      {/* ── Left panel ── */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:w-[52%] shrink-0 px-10 py-10 flex flex-col" style={{ background: "var(--bg-page)" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col flex-1 max-w-[520px]"
        >
          {/* Back link */}
          <motion.div variants={fadeUp} className="mb-10">
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
              Sujay Reddy
            </Link>
          </motion.div>

          {/* Tag + meta row */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full"
              style={{
                fontFamily: textFont,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "var(--text-primary)",
                background: "var(--bg-section)",
                textTransform: "uppercase",
              }}
            >
              {post.tag}
            </span>
            <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)" }}>
              {post.readTime}
            </span>
            <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)" }}>
              {post.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              lineHeight: 1.04,
              color: "var(--text-primary)",
              marginBottom: "1.75rem",
            }}
          >
            {post.title}
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            style={{ height: 1, background: "var(--separator)", marginBottom: "1.75rem" }}
          />

          {/* AI Process CTA */}
          {post.process && (
            <motion.div variants={fadeUp} className="mb-8">
              <button
                onClick={() => setProcessOpen((o) => !o)}
                className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-80 active:opacity-60"
                style={{
                  background: "#0071e3",
                  color: "#ffffff",
                  fontFamily: textFont,
                  fontSize: 15,
                  fontWeight: 400,
                  lineHeight: 1,
                  padding: "10px 18px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                How I use AI in my design process
                <motion.span
                  animate={{ rotate: processOpen ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-flex"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {processOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mt-4 rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>

                      {/* Pillars */}
                      <div className="grid grid-cols-3 gap-px px-5 pt-4 pb-3" style={{ borderBottom: "1px solid var(--separator)" }}>
                        {pillars.map((p, i) => (
                          <div key={i}>
                            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>{p.label}</p>
                            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 400, color: "var(--text-tertiary)", lineHeight: 1.4 }}>{p.sub}</p>
                          </div>
                        ))}
                      </div>

                      {/* Phases condensed */}
                      {phases.map((phase, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 px-5 py-3"
                          style={{ borderBottom: "1px solid var(--separator)" }}
                        >
                          <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 700, color: "#0071e3", lineHeight: 2, minWidth: 18, flexShrink: 0 }}>
                            {phase.number}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }}>
                              {phase.name}
                            </p>
                            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 1 }}>
                              {phase.outcome}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* View Full link */}
                      <div className="px-5 py-3">
                        <Link
                          href="/ai-process"
                          className="group inline-flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-60"
                          style={{ textDecoration: "none" }}
                        >
                          <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 600, color: "#0071e3" }}>
                            View full breakdown
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#0071e3] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: textFont,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            {post.intro}
          </motion.p>

          {/* Body sections */}
          <motion.div variants={stagger} className="flex flex-col gap-8 flex-1">
            {post.sections.map((section, i) => (
              <motion.div key={i} variants={fadeUp}>
                {section.heading && (
                  <p
                    style={{
                      fontFamily: textFont,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "var(--text-tertiary)",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {section.heading}
                  </p>
                )}
                <div className="flex flex-col gap-4">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: textFont,
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Bold text={para} />
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Pull quote */}
            {post.pullQuote && (
              <motion.blockquote
                variants={fadeUp}
                className="mt-2"
                style={{ borderLeft: "3px solid var(--text-primary)", paddingLeft: "1.25rem", margin: 0 }}
              >
                <p
                  style={{
                    fontFamily: displayFont,
                    fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    letterSpacing: "-0.2px",
                    color: "var(--text-primary)",
                  }}
                >
                  &ldquo;{post.pullQuote}&rdquo;
                </p>
              </motion.blockquote>
            )}

          </motion.div>
        </motion.div>
      </div>

      {/* ── Right panel ── */}
      <div className="flex-1 p-3 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] flex-1"
          style={{ minHeight: "85vh", backgroundColor: post.accentColor }}
        >
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.75 }}
            />
          ) : null}

          <div
            className="absolute inset-0 flex flex-col justify-end p-10"
            style={{ pointerEvents: "none" }}
          >
            {!post.image && post.pullQuote && (
              <p
                style={{
                  fontFamily: displayFont,
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  letterSpacing: "-0.4px",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "80%",
                }}
              >
                &ldquo;{post.pullQuote}&rdquo;
              </p>
            )}
            <p
              style={{
                fontFamily: textFont,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase",
                marginTop: post.image ? 0 : "1.5rem",
              }}
            >
              {post.tag}
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
