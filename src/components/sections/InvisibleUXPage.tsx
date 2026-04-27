"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

function Bold({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 600 }}>{part}</strong>
        ) : part
      )}
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: textFont,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.1em",
      color: "var(--text-tertiary)",
      textTransform: "uppercase" as const,
      marginBottom: "0.75rem",
    }}>
      {children}
    </p>
  );
}

const beforeSteps = ["Open", "Browse", "Filter", "Select"];

const comparisonRows = [
  { label: "Approach",    old: "Multiple ways to do this",      neo: "Tell me what you want" },
  { label: "Interface",   old: "Prominent menus & navigation",  neo: "Fades into the background" },
  { label: "User effort", old: "Navigate → Filter → Select",    neo: "Express intent" },
  { label: "Output",      old: "Options",                       neo: "Outcomes" },
];

const whyItems = ["Less navigation", "Fewer decisions", "Faster results"];

const newRoleItems = [
  "Understanding how people express goals",
  "Shaping how AI responds",
  "Creating guardrails for trust and clarity",
];

export function InvisibleUXPage() {
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
              UX &amp; AI
            </span>
            <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)", letterSpacing: "-0.12px" }}>4 min read</span>
            <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)", letterSpacing: "-0.12px" }}>April 2026</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            style={{ fontFamily: displayFont, fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.04, color: "var(--text-primary)", marginBottom: "1.75rem" }}
          >
            Invisible UX
          </motion.h1>

          {/* Divider */}
          <motion.div variants={fadeUp} style={{ height: 1, background: "var(--separator)", marginBottom: "1.75rem" }} />

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: textFont, fontSize: 16, fontWeight: 400, lineHeight: 1.7, letterSpacing: "-0.374px", color: "var(--text-secondary)", marginBottom: "2.5rem" }}
          >
            For decades, UX design has been about guiding users through interfaces menus, buttons, cards, flows. But AI is changing this. We&apos;re moving from{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>interaction → intent</strong>.
          </motion.p>

          {/* ── Flow: Interaction → Intent ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>From Interfaces to Intent</SectionLabel>
            <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>
              {/* Before row */}
              <div className="px-4 pt-4 pb-3" style={{ borderBottom: "1px solid var(--separator)" }}>
                <p style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                  Before
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {beforeSteps.map((step, i) => (
                    <React.Fragment key={i}>
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-lg"
                        style={{ background: "var(--bg-elevated)", fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-primary)", letterSpacing: "-0.12px" }}
                      >
                        {step}
                      </span>
                      {i < beforeSteps.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0" style={{ color: "var(--text-tertiary)" }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {/* Now row */}
              <div className="px-4 py-3" style={{ background: "#0071e3" }}>
                <p style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Now
                </p>
                <p style={{ fontFamily: displayFont, fontSize: 20, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.3px", lineHeight: 1.2 }}>
                  Intent → Outcome
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Comparison table ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>What&apos;s Changing</SectionLabel>
            <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>
              {/* Header row */}
              <div className="grid grid-cols-[100px_1fr_1fr] px-4 py-2.5" style={{ borderBottom: "1px solid var(--separator)" }}>
                <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }} />
                <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Traditional UX</span>
                <span style={{ fontFamily: textFont, fontSize: 10, fontWeight: 600, color: "#0071e3", letterSpacing: "0.06em", textTransform: "uppercase" }}>AI-native UX</span>
              </div>
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[100px_1fr_1fr] px-4 py-3"
                  style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid var(--separator)" : "none" }}
                >
                  <span style={{ fontFamily: textFont, fontSize: 11, fontWeight: 600, color: "var(--text-tertiary)", letterSpacing: "-0.08px" }}>{row.label}</span>
                  <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.5, letterSpacing: "-0.12px", paddingRight: 8 }}>{row.old}</span>
                  <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.5, letterSpacing: "-0.12px" }}>{row.neo}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Why It Matters ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>Why This Matters</SectionLabel>
            <p style={{ fontFamily: textFont, fontSize: 14, fontWeight: 400, lineHeight: 1.65, letterSpacing: "-0.224px", color: "var(--text-secondary)", marginBottom: "0.875rem" }}>
              This shift is about <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>reducing friction</strong>. The best UX becomes almost invisible it works without demanding attention.
            </p>
            <div className="flex flex-wrap gap-2">
              {whyItems.map((item, i) => (
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

          {/* ── New Role ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>The New Role of Designers</SectionLabel>
            <p style={{ fontFamily: textFont, fontSize: 14, fontWeight: 400, lineHeight: 1.65, letterSpacing: "-0.224px", color: "var(--text-secondary)", marginBottom: "0.875rem" }}>
              Designers are no longer just arranging screens. They&apos;re{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>designing systems that understand intent</strong>.
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-section)" }}>
              {newRoleItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-4 py-3"
                  style={{ borderBottom: i < newRoleItems.length - 1 ? "1px solid var(--separator)" : "none" }}
                >
                  <span
                    style={{ fontFamily: textFont, fontSize: 10, fontWeight: 700, color: "var(--text-tertiary)", letterSpacing: "0.06em", lineHeight: 2, flexShrink: 0 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.6, letterSpacing: "-0.08px" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── The Future ── */}
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>The Future</SectionLabel>
            <p style={{ fontFamily: textFont, fontSize: 14, fontWeight: 400, lineHeight: 1.65, letterSpacing: "-0.224px", color: "var(--text-secondary)" }}>
              The future of UX won&apos;t be seen. <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>It will be felt.</strong>
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            variants={fadeUp}
            style={{ borderLeft: "3px solid var(--text-primary)", paddingLeft: "1.25rem", margin: 0 }}
          >
            <p style={{ fontFamily: displayFont, fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)", fontWeight: 600, lineHeight: 1.4, letterSpacing: "-0.2px", color: "var(--text-primary)" }}>
              &ldquo;The future of UX won&apos;t be seen. It will be felt.&rdquo;
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
          style={{ minHeight: "85vh", background: "#e8e8ed" }}
        >
          <img
            src="/images/invisible-ux.png"
            alt="Invisible UX"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ padding: "3rem" }}
          />
          <div className="absolute bottom-8 right-8">
            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "rgba(0,0,0,0.2)", textTransform: "uppercase" }}>
              UX &amp; AI
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
