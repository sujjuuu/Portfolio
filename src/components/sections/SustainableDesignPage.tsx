"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { strategies, lifecycle, tradeoffs } from "@/lib/sustainability";

const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: textFont,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.1em",
        color: "var(--text-tertiary)",
        textTransform: "uppercase" as const,
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </p>
  );
}

export function SustainableDesignPage() {
  const [open, setOpen] = useState(false);

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

          {/* Back */}
          <motion.div variants={fadeUp} className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
              style={{ fontFamily: textFont, fontSize: 13, fontWeight: 400, color: "var(--text-tertiary)", textDecoration: "none", letterSpacing: "-0.08px" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Sujay Reddy
            </Link>
          </motion.div>

          {/* Tag row */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full"
              style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", color: "var(--text-primary)", background: "var(--bg-section)", textTransform: "uppercase" }}
            >
              Sustainability
            </span>
            <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)", letterSpacing: "-0.12px" }}>5 min read</span>
            <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)", letterSpacing: "-0.12px" }}>April 2026</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            style={{ fontFamily: displayFont, fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.04, color: "var(--text-primary)", marginBottom: "1.75rem" }}
          >
            Sustainable Design Strategies
          </motion.h1>

          {/* Divider */}
          <motion.div variants={fadeUp} style={{ height: 1, background: "var(--separator)", marginBottom: "1.75rem" }} />

          {/* ── Framework dropdown ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <button
              onClick={() => setOpen((o) => !o)}
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
              Six Core Design Strategies
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                className="inline-flex"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="mt-4 rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>

                    {/* Header */}
                    <div
                      className="grid px-5 py-2.5"
                      style={{ gridTemplateColumns: "28px 1fr auto", borderBottom: "1px solid var(--separator)" }}
                    >
                      <span />
                      <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Strategy</span>
                      <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Stage</span>
                    </div>

                    {/* Rows */}
                    {strategies.map((s, i) => (
                      <div
                        key={i}
                        className="grid items-start px-5 py-3"
                        style={{ gridTemplateColumns: "28px 1fr auto", borderBottom: "1px solid var(--separator)" }}
                      >
                        <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 700, color: "var(--text-tertiary)", lineHeight: 2, flexShrink: 0 }}>
                          {s.number}
                        </span>
                        <div>
                          <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }}>{s.name}</p>
                          <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.5, marginTop: 1 }}>{s.tagline}</p>
                        </div>
                        <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 500, color: "var(--text-tertiary)", letterSpacing: "-0.06px", lineHeight: 2.2, paddingLeft: 8, whiteSpace: "nowrap" }}>
                          {s.stage}
                        </span>
                      </div>
                    ))}

                    {/* View full */}
                    <div className="px-5 py-3">
                      <Link
                        href="/sustainable-design"
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

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: textFont, fontSize: 16, fontWeight: 400, lineHeight: 1.7, letterSpacing: "-0.374px", color: "var(--text-secondary)", marginBottom: "2.5rem" }}
          >
            Sustainability is no longer optional it&apos;s becoming a core part of how products are designed and built. It&apos;s not just about reducing impact at one stage, but across the{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>entire product lifecycle</strong>.
          </motion.p>

          {/* ── Six Core Strategies ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>The Six Core Strategies</SectionLabel>
            <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>
              {strategies.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 py-4"
                  style={{ borderBottom: i < strategies.length - 1 ? "1px solid var(--separator)" : "none" }}
                >
                  <span
                    style={{ fontFamily: textFont, fontSize: 10, fontWeight: 700, color: "var(--text-tertiary)", letterSpacing: "0.06em", lineHeight: 2.2, flexShrink: 0 }}
                  >
                    {s.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4, letterSpacing: "-0.08px", marginBottom: "0.15rem" }}>
                      {s.name}
                    </p>
                    <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, color: "var(--text-tertiary)", letterSpacing: "-0.06px", marginBottom: "0.4rem" }}>
                      {s.tagline}
                    </p>
                    <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.6, letterSpacing: "-0.12px" }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Lifecycle flow ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>How These Work Together</SectionLabel>
            <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>
              {/* Flow */}
              <div className="px-4 pt-4 pb-3" style={{ borderBottom: "1px solid var(--separator)" }}>
                <p style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                  Material Flow
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {["Sourcing", "Operations", "Usage", "End of Life"].map((stage, i, arr) => (
                    <React.Fragment key={i}>
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-lg"
                        style={{ background: "var(--bg-elevated)", fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.12px" }}
                      >
                        {stage}
                      </span>
                      {i < arr.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0" style={{ color: "var(--text-tertiary)" }} />
                      )}
                    </React.Fragment>
                  ))}
                  <span style={{ fontFamily: textFont, fontSize: 14, color: "var(--text-tertiary)", marginLeft: 2 }}>↻</span>
                </div>
              </div>
              {/* Principle row */}
              <div className="px-4 py-3" style={{ background: "#0071e3" }}>
                <p style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Core Principle
                </p>
                <p style={{ fontFamily: displayFont, fontSize: 20, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.3px", lineHeight: 1.2 }}>
                  Design for Sustainability
                </p>
              </div>
            </div>
            <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.6, letterSpacing: "-0.12px", marginTop: "0.75rem" }}>
              Each stage is optimized through these six strategies to reduce overall impact.
            </p>
          </motion.div>

          {/* ── The Trade-Off ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>The Trade-Off</SectionLabel>
            <p style={{ fontFamily: textFont, fontSize: 14, fontWeight: 400, lineHeight: 1.65, letterSpacing: "-0.224px", color: "var(--text-secondary)", marginBottom: "0.875rem" }}>
              Sustainable design is not just a design problem it&apos;s a{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>system challenge</strong>.
              Balancing these tensions is where real design impact happens.
            </p>
            <div className="flex flex-wrap gap-2">
              {tradeoffs.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 rounded-full"
                  style={{ background: "var(--bg-section)", fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.12px" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── The Opportunity ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>The Opportunity</SectionLabel>
            <p style={{ fontFamily: textFont, fontSize: 14, fontWeight: 400, lineHeight: 1.65, letterSpacing: "-0.224px", color: "var(--text-secondary)" }}>
              Sustainability is no longer a constraint,{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>it&apos;s a design advantage</strong>.
              It drives better products, smarter systems, and more responsible innovation.
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeUp}
            style={{ borderLeft: "3px solid var(--text-primary)", paddingLeft: "1.25rem", margin: 0 }}
          >
            <p style={{ fontFamily: displayFont, fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)", fontWeight: 600, lineHeight: 1.4, letterSpacing: "-0.2px", color: "var(--text-primary)" }}>
              &ldquo;Sustainability is no longer a constraint it&apos;s a design advantage.&rdquo;
            </p>
            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 400, color: "var(--text-tertiary)", marginTop: "0.5rem", letterSpacing: "-0.06px" }}>
              Source: Boston Consulting Group (BCG)
            </p>
          </motion.blockquote>

        </motion.div>
      </div>

      {/* ── Right panel image only ── */}
      <div className="flex-1 p-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem]"
          style={{ minHeight: "85vh", background: "#0d1f0d" }}
        >
          <img
            src="/images/sustainable.png"
            alt="Sustainable Design"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-8 right-8">
            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>
              Sustainability
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
