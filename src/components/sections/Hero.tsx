"use client";

import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6" style={{ background: "var(--bg-page)" }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          fontFamily: displayFont,
          fontWeight: 600,
          lineHeight: 1.07,
          letterSpacing: "-0.28px",
          color: "var(--text-primary)",
          fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
        }}
        className="max-w-[980px] w-full text-center"
      >
        I&apos;m{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/sujay-reddy-682a1b142/"
          isStatic
          imageSrc="/images/sujay.jpeg"
          width={200}
          height={125}
          className="[color:var(--link-default)] hover:underline"
        >
          Sujay Reddy
        </LinkPreview>
        . I design products you{" "}
        <LinkPreview
          url="https://dribbble.com"
          isStatic
          imageSrc="/images/experiences.png"
          width={200}
          height={125}
          noLink
          className="[color:var(--link-default)] cursor-default"
        >
          want to use
        </LinkPreview>
        {" "}and{" "}
        <LinkPreview
          url="https://www.awwwards.com"
          isStatic
          imageSrc="/images/want-to-use.jpg"
          width={200}
          height={125}
          noLink
          className="[color:var(--link-default)] cursor-default"
        >
          experiences
        </LinkPreview>
        {" "}you remember.
      </motion.div>
    </section>
  );
}
