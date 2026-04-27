"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { pillars, phases, results, principles } from "@/lib/ai-process";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

export function AIProcessPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-page)" }}>

      {/* ── Hero ── */}
      <section className="px-8 md:px-16 lg:px-24 pt-16 pb-20" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-[960px] mx-auto">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="mb-12">
              <Link
                href="/pov/ai-and-designers"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
                style={{ fontFamily: textFont, fontSize: 13, color: "var(--text-tertiary)", textDecoration: "none" }}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Design in the Age of AI
              </Link>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="block mb-6"
              style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, letterSpacing: "0.02em", color: "var(--text-tertiary)" }}
            >
              AI & Process
            </motion.span>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: displayFont,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                lineHeight: 1.06,
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              How I use AI in my design process
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: textFont,
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                maxWidth: 620,
                marginBottom: "3rem",
              }}
            >
              AI accelerates my thinking and execution across real projects. Every decision stays human-led judgment isn&apos;t delegated.
            </motion.p>

            {/* Pillars */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-5 py-4"
                  style={{ background: "var(--bg-section)" }}
                >
                  <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                    {p.label}
                  </p>
                  <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {p.sub}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-5"
              style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-tertiary)", letterSpacing: "0.01em" }}
            >
              All outcomes validated against user needs &amp; accessibility standards.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* ── Process Phases ── */}
      <section className="px-8 md:px-16 lg:px-24 py-20" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-[960px] mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="block mb-4"
              style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, letterSpacing: "0.02em", color: "var(--text-tertiary)" }}
            >
              AI Across My Design Process
            </motion.span>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: textFont,
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                maxWidth: 560,
                marginBottom: "2.5rem",
              }}
            >
              AI reduces cognitive overhead at each phase freeing space for the thinking that only a designer can do.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                >
                  {/* Card header */}
                  <div className="px-5 pt-5 pb-4 flex items-start gap-3">
                    <span
                      style={{
                        fontFamily: textFont,
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#0071e3",
                        letterSpacing: "0.04em",
                        paddingTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      {phase.number}
                    </span>
                    <p style={{ fontFamily: displayFont, fontSize: 17, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {phase.name}
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "var(--separator)", margin: "0 20px" }} />

                  {/* Roles */}
                  <div className="px-5 py-4 flex flex-col gap-3">
                    <div className="flex gap-3">
                      <span
                        className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded-full"
                        style={{
                          width: 20, height: 20,
                          background: "var(--badge-neutral)",
                          fontFamily: textFont,
                          fontSize: 9,
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "0.04em",
                        }}
                      >
                        ME
                      </span>
                      <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {phase.designer}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span
                        className="shrink-0 mt-0.5 inline-flex items-center justify-center rounded-full"
                        style={{
                          width: 20, height: 20,
                          background: "#0071e3",
                          fontFamily: textFont,
                          fontSize: 9,
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "0.04em",
                        }}
                      >
                        AI
                      </span>
                      <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {phase.ai}
                      </p>
                    </div>
                  </div>

                  {/* Outcome */}
                  <div style={{ margin: "0 20px 20px", background: "var(--bg-elevated)", borderRadius: 10, padding: "8px 12px" }}>
                    <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>Outcome </span>
                      {phase.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="px-8 md:px-16 lg:px-24 py-20" style={{ background: "var(--bg-page)" }}>
        <div className="max-w-[960px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="block mb-10"
              style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, letterSpacing: "0.02em", color: "var(--text-tertiary)" }}
            >
              Results Across Projects
            </motion.span>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {results.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl px-5 py-6 flex flex-col gap-2"
                  style={{ background: "var(--bg-section)" }}
                >
                  <p
                    style={{
                      fontFamily: displayFont,
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.5px",
                      lineHeight: 1,
                      color: "var(--text-primary)",
                    }}
                  >
                    {r.metric}
                  </p>
                  <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }}>
                    {r.label}
                  </p>
                  <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    {r.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="px-8 md:px-16 lg:px-24 py-20" style={{ background: "var(--bg-section)" }}>
        <div className="max-w-[960px] mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="block mb-10"
              style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, letterSpacing: "0.02em", color: "var(--text-tertiary)" }}
            >
              My Core Principles
            </motion.span>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl px-6 py-6 flex flex-col gap-3"
                  style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
                >
                  <p
                    style={{
                      fontFamily: displayFont,
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                      letterSpacing: "-0.2px",
                    }}
                  >
                    {p.title}
                  </p>
                  <p style={{ fontFamily: textFont, fontSize: 13, fontWeight: 400, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
