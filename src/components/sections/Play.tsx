"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowUpRight } from "lucide-react";
import { useTheme, THEMES, type ThemeKey } from "@/context/theme";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// ─── Gallery Card (Camera Roll) ───────────────────────────────────────────────
const galleryImages: string[] = [
  "/images/gallery/dp.jpeg",
  "/images/gallery/g1.jpeg",
  "/images/gallery/g2.jpeg",
  "/images/gallery/g3.jpeg",
  "/images/gallery/g4.jpeg",
];

function GalleryCard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % galleryImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col rounded-3xl overflow-hidden w-full h-full"
      style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 flex-shrink-0">
        <span style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-primary)" }}>
          Camera Roll
        </span>
        <div className="flex items-center gap-[5px]">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 18 : 7,
                height: 7,
                borderRadius: 999,
                background: i === current ? "var(--text-primary)" : "var(--dot-inactive)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mx-3 mb-3 rounded-2xl overflow-hidden flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={galleryImages[current]}
            alt={`Gallery image ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Color Picker Card ────────────────────────────────────────────────────────
const RGB_OPTIONS = [
  { key: "R" as const, color: "#FF3B30", fill: "#FFF0EF", label: "Vivid Red"    },
  { key: "G" as const, color: "#34C759", fill: "#EDFAF2", label: "Spring Green" },
  { key: "B" as const, color: "#0071E3", fill: "#EAF3FF", label: "Classic Blue" },
];

type RGBKey = "R" | "G" | "B";

function ColorPickerCard() {
  const { themeKey, setTheme } = useTheme();
  const active = themeKey as RGBKey | null;
  const current = RGB_OPTIONS.find((o) => o.key === active) ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col rounded-3xl overflow-hidden w-full h-full"
      style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
    >
      {/* Grid / colour area */}
      <div className="mx-3 mt-3 rounded-2xl overflow-hidden flex-1 relative">
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "var(--bg-section)",
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "14px 14px",
          }}
        />

        {/* Colour fill overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: current ? current.fill : "rgba(0,0,0,0)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />

        {/* R G B buttons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex items-center gap-2 p-1.5 rounded-full"
            style={{
              background: "var(--frosted-bg)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--frosted-border)",
            }}
          >
            {RGB_OPTIONS.map(({ key, color }) => (
              <button
                key={key}
                onClick={() => setTheme((active === key ? null : key) as ThemeKey)}
                style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: active === key ? color : "#ffffff",
                  color: active === key ? "#ffffff" : "#1d1d1f",
                  fontFamily: displayFont, fontSize: 14, fontWeight: 600,
                  border: "none", cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: active !== key ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
                  flexShrink: 0,
                }}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Selected colour label */}
        <AnimatePresence>
          {current && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-3 left-4"
            >
              <p style={{ fontFamily: textFont, fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(0,0,0,0.3)", marginBottom: 2 }}>
                Selected
              </p>
              <p style={{ fontFamily: displayFont, fontSize: 12, fontWeight: 600, letterSpacing: "-0.1px", color: current.color }}>
                {current.label}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 flex-shrink-0">
        <span style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-primary)" }}>
          Pick a Color
        </span>
        <ArrowUpRight className="h-3.5 w-3.5" style={{ color: "var(--text-tertiary)" }} />
      </div>
    </motion.div>
  );
}

// ─── Sneak Peek Card ──────────────────────────────────────────────────────────
const BLUR_STEPS = [28, 20, 13, 7, 2, 0];
const sneakPeekImage = "/images/shinchan.jpeg";

function SneakPeekCard() {
  const { themeKey } = useTheme();
  const progressColor = themeKey ? THEMES[themeKey].bright : "#2997ff";
  const [step, setStep]               = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const MAX      = 5;
  const revealed = step >= MAX;

  const handleClick = () => {
    if (!revealed) { setStep((s) => s + 1); setTotalClicks((c) => c + 1); }
    else { setStep(0); }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col rounded-3xl overflow-hidden w-full h-full"
      style={{ background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}
    >
      <div className="flex items-center px-5 pt-4 pb-2 flex-shrink-0">
        <span style={{ fontFamily: textFont, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--text-tertiary)" }}>
          In Progress
        </span>
      </div>

      <div className="px-5 pb-3 flex-shrink-0">
        <h3
          style={{ fontFamily: displayFont, fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.3px", color: "var(--text-primary)" }}
          className="mb-3"
        >
          Sneak<br />peek
        </h3>

        <button
          onClick={handleClick}
          className="flex items-center justify-between w-full rounded-full"
          style={{ height: 46, background: "#2e2e2e", border: "none", paddingLeft: 14, paddingRight: 5, cursor: "pointer", gap: 10 }}
        >
          <div className="flex items-center gap-2 flex-shrink-0">
            {revealed ? <Eye className="h-4 w-4 text-white" /> : <EyeOff className="h-4 w-4 text-white" />}
            <span style={{ fontFamily: textFont, fontSize: 13, fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap" }}>
              {revealed ? "Click to hide" : "Click to see"}
            </span>
          </div>
          <div className="flex-1 rounded-full overflow-hidden" style={{ height: 36, background: "rgba(255,255,255,0.1)" }}>
            {revealed ? (
              <div className="w-full h-full flex items-center justify-center">
                <span style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.45)" }}>
                  {totalClicks} clicks
                </span>
              </div>
            ) : (
              <motion.div
                animate={{ width: `${(step / MAX) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: progressColor }}
              />
            )}
          </div>
        </button>
      </div>

      <div className="mx-3 mb-3 rounded-2xl overflow-hidden flex-1 relative">
        <motion.img
          src={sneakPeekImage}
          alt="Sneak peek"
          animate={{ filter: `blur(${BLUR_STEPS[step]}px)` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.12)" }}
        />
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function PlaySection() {
  return (
    <section className="h-screen overflow-hidden px-8 md:px-16 lg:px-24 py-20" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-[1200px] mx-auto w-full">

        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ fontFamily: textFont, fontSize: 12, fontWeight: 400, letterSpacing: "0.02em", color: "var(--text-tertiary)" }}
          className="block mb-10"
        >
          Play
        </motion.span>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}
            style={{ fontFamily: displayFont, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.07, letterSpacing: "-0.28px", color: "var(--text-primary)" }}
          >
            Where ideas run free.
          </motion.h2>

        </div>

        {/* ── Bento grid ── */}
        <div className="flex flex-col gap-4">

          {/* Row 1 Camera Roll · Color Picker · Sneak Peek */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ height: 420 }}>
            <GalleryCard />
            <ColorPickerCard />
            <SneakPeekCard />
          </div>


        </div>

      </div>
    </section>
  );
}
