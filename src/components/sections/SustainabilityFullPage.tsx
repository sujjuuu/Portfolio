"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { strategies, lifecycle, corePrinciple } from "@/lib/sustainability";

const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
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
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

export function SustainabilityFullPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-section)" }}>

      {/* ── Hero ── */}
      <div style={{ background: "var(--bg-page)", borderBottom: "1px solid var(--separator)" }}>
        <div className="max-w-[1100px] mx-auto px-8 py-12">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/pov/sustainable-design"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-60 mb-8 block"
              style={{ fontFamily: textFont, fontSize: 13, fontWeight: 400, color: "var(--text-tertiary)", textDecoration: "none" }}
            >
              <ArrowLeft className="h-3.5 w-3.5 inline mr-1" />
              Back to article
            </Link>
          </motion.div>

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.04 }}
            style={{ fontFamily: textFont, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-tertiary)", textTransform: "uppercase" }}
            className="block mb-4"
          >
            BCG Framework · Full Breakdown
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: displayFont, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.4px", lineHeight: 1.06, color: "var(--text-primary)", marginBottom: "1.25rem" }}
          >
            Design for Sustainability
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{ fontFamily: textFont, fontSize: 16, fontWeight: 400, lineHeight: 1.7, letterSpacing: "-0.374px", color: "var(--text-secondary)", maxWidth: 620 }}
          >
            {corePrinciple}
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-8 py-16">

        {/* ── Lifecycle cycle ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <SectionLabel>Lifecycle Stages</SectionLabel>
          <div className="rounded-2xl overflow-hidden" style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}>
            <div className="grid grid-cols-4">
              {lifecycle.map((stage, i) => (
                <div
                  key={i}
                  className="px-6 py-6 flex flex-col gap-2"
                  style={{ borderRight: i < lifecycle.length - 1 ? "1px solid var(--separator)" : "none" }}
                >
                  <span
                    style={{ fontFamily: textFont, fontSize: 10, fontWeight: 700, color: "var(--text-tertiary)", letterSpacing: "0.06em" }}
                  >
                    0{i + 1}
                  </span>
                  <p style={{ fontFamily: displayFont, fontSize: 20, fontWeight: 600, letterSpacing: "-0.3px", color: "var(--text-primary)", lineHeight: 1.2 }}>
                    {stage}
                  </p>
                </div>
              ))}
            </div>
            <div className="px-6 py-4" style={{ background: "#0071e3" }}>
              <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.8)", letterSpacing: "-0.12px" }}>
                Closed-loop system each stage feeds back into the next
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Six strategy cards ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="mb-16"
        >
          <SectionLabel>Six Design Dimensions</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategies.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p style={{ fontFamily: textFont, fontSize: 10, fontWeight: 700, color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                      {s.number} · {s.stage}
                    </p>
                    <p style={{ fontFamily: displayFont, fontSize: 20, fontWeight: 600, letterSpacing: "-0.3px", color: "var(--text-primary)", lineHeight: 1.2 }}>
                      {s.name}
                    </p>
                  </div>
                </div>

                {/* Tagline */}
                <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", letterSpacing: "-0.08px", lineHeight: 1.4 }}>
                  {s.tagline}
                </p>

                {/* Divider */}
                <div style={{ height: 1, background: "var(--separator)" }} />

                {/* Items */}
                <div className="flex flex-col gap-2">
                  {s.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span
                        style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--text-tertiary)", flexShrink: 0, marginTop: 6 }}
                      />
                      <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.55, letterSpacing: "-0.12px" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Core principle ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl overflow-hidden"
          style={{ background: "#1d1d1f" }}
        >
          <div className="px-10 py-10">
            <p style={{ fontFamily: textFont, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Core Principle
            </p>
            <p style={{ fontFamily: displayFont, fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontWeight: 600, lineHeight: 1.4, letterSpacing: "-0.3px", color: "rgba(255,255,255,0.9)", maxWidth: 680 }}>
              &ldquo;{corePrinciple}&rdquo;
            </p>
            <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.35)", marginTop: "1.25rem", letterSpacing: "-0.12px" }}>
              Source: Boston Consulting Group (BCG)
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
