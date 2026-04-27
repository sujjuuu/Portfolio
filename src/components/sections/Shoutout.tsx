"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/ui/sparkles-text";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const names = [
  "Akash Malla Reddy",
  "Prajwal Yashasvi Maredukonda",
  "Visist Tallam",
  "Akhilesh",
  "Laasya",
];

function highlightNames(text: string) {
  const parts = text.split(new RegExp(`(${names.join("|")})`, "g"));
  return parts.map((part, i) =>
    names.includes(part) ? (
      <span key={i} style={{ color: "#1d1d1f", fontWeight: 600 }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function ShoutoutSection() {
  return (
    <section className="bg-white px-8 md:px-16 lg:px-24 py-28">
      <div className="max-w-[760px] mx-auto w-full">

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
            color: "rgba(0,0,0,0.4)",
          }}
          className="block mb-10"
        >
          Credits
        </motion.span>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mb-12"
          style={{ fontFamily: displayFont, letterSpacing: "-0.5px", color: "#1d1d1f" }}
        >
          <SparklesText
            text="Shout-outs"
            sparklesCount={12}
            colors={{ first: "#0071e3", second: "#2997ff" }}
            className="text-[clamp(2.5rem,5vw,4rem)] leading-none"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="space-y-5"
        >
          <p
            style={{
              fontFamily: textFont,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            A huge thank you to everyone involved in bringing this to life. From shaping the vision
            to executing across multiple touchpoints, this was a true team effort.
          </p>

          <p
            style={{
              fontFamily: textFont,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            {highlightNames(
              "Special thanks to Akash Malla Reddy, Prajwal Yashasvi Maredukonda, Visist Tallam, and fellow designers Akhilesh and Laasya for their collaboration, support, and contributions throughout the process."
            )}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
