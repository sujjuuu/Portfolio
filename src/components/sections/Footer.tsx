"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const linkedIn = "https://www.linkedin.com/in/sujay-reddy-682a1b142/";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work",  href: "#work"  },
  { label: "POV",   href: "#pov"   },
];

export function Footer() {
  return (
    <footer
      className="px-8 md:px-16 lg:px-24 pt-24 pb-12"
      style={{ backgroundColor: "#1d1d1f" }}
    >
      <div className="max-w-[1200px] mx-auto w-full">

        {/* ── CTA block ── */}
        <div className="mb-20">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#30d158" }}
            />
            <span
              style={{
                fontFamily: textFont,
                fontSize: 12,
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.04em",
              }}
            >
              Available for work
            </span>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.06 }}
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.4px",
              color: "#ffffff",
              marginBottom: "2rem",
            }}
          >
            Let&rsquo;s work<br />together.
          </motion.h2>

          <motion.a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="group inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
            }}
          >
            Get in touch
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "rgba(255,255,255,0.65)" }}
            />
          </motion.a>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "2rem" }} />

        {/* ── Bottom row ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          {/* Brand + copyright */}
          <div>
            <p
              style={{
                fontFamily: textFont,
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                marginBottom: 4,
              }}
            >
              Sujay Reddy
            </p>
            <p
              style={{
                fontFamily: textFont,
                fontSize: 11,
                fontWeight: 400,
                color: "rgba(255,255,255,0.25)",
              }}
            >
              © 2026 · Product Designer
            </p>
          </div>

          {/* Nav + social */}
          <nav className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: textFont,
                  fontSize: 12,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {label}
              </a>
            ))}
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: textFont,
                fontSize: 12,
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              LinkedIn
            </a>
          </nav>
        </motion.div>

      </div>
    </footer>
  );
}
