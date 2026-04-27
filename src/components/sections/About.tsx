"use client";

import { motion } from "framer-motion";
import { PhotoCardStack } from "@/components/ui/photo-cards";
import { LinkPreview } from "@/components/ui/link-preview";

const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const textFont =
  "'SF Pro Text', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
};

const H = ({ children, href }: { children: React.ReactNode; href?: string }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="[color:var(--link-default)] hover:underline">
        {children}
      </a>
    );
  }
  return <span className="[color:var(--link-default)]">{children}</span>;
};

const socialLinks = [
  { label: "Email",    href: "mailto:saisujay3@gmail.com" },
  { label: "Resume",   href: "/resume" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sujay-reddy-682a1b142/" },
];

export function AboutSection() {
  return (
    <section
      className="about-grid relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto w-full py-24">

        {/* Section label */}
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
            color: "var(--text-tertiary)",
          }}
          className="block mb-10"
        >
          About
        </motion.span>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-20">

          {/* Left: text content */}
          <div className="flex-1 min-w-0">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              style={{
                fontFamily: displayFont,
                fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                fontWeight: 600,
                lineHeight: 1.58,
                letterSpacing: "-0.3px",
                color: "var(--text-primary)",
              }}
              className="mb-8"
            >
              I&apos;m Sujay, nice to meet you! I graduated from{" "}
              <LinkPreview
                url="https://pes.edu"
                isStatic
                imageSrc="/images/pes.jpeg"
                width={200}
                height={125}
                className="[color:var(--link-default)] hover:underline font-[inherit]"
              >
                PES University
              </LinkPreview>
              {" "}with a background in Computer Science, where I built a strong foundation in both
              technology and design thinking. Currently, I&apos;m working at{" "}
              <LinkPreview
                url="https://conglomerateit.com"
                isStatic
                imageSrc="/images/cgit.jpeg"
                width={200}
                height={125}
                className="[color:var(--link-default)] hover:underline font-[inherit]"
              >
                Conglomerate IT Solutions
              </LinkPreview>
              {" "}as a{" "}
              <H>Product Design Lead</H>
              , and previously at{" "}
              <LinkPreview
                url="https://www.linkedin.com/posts/rampraneethreddy_craftmyplate-productbuilding-startuptech-activity-7345761400230694913-BRkG?utm_source=share&utm_medium=member_desktop&rcm=ACoAACKttwIBEhL5HLcu9WOgksT2URUbmFfVYK4"
                isStatic
                imageSrc="/images/cmp.jpeg"
                width={200}
                height={125}
                className="[color:var(--link-default)] hover:underline font-[inherit]"
              >
                CraftMyPlate
              </LinkPreview>
              {" "}as a Product Designer, shaping digital experiences that are both functional and meaningful.
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.16 }}
              style={{
                fontFamily: displayFont,
                fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                fontWeight: 600,
                lineHeight: 1.58,
                letterSpacing: "-0.3px",
                color: "var(--text-primary)",
              }}
              className="mb-8"
            >
              I believe great design should feel{" "}
              <H>intuitive, human, and effortless</H>
              . I&apos;m drawn to solving messy problems, breaking them down, refining them, and iterating
              until the complexity fades away. I care deeply about the little details, because that&apos;s
              what turns a good experience into something people actually enjoy using. I enjoy working in
              collaborative, fast-paced environments where ideas are challenged and creativity flows.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.24 }}
              style={{
                fontFamily: displayFont,
                fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)",
                fontWeight: 600,
                lineHeight: 1.58,
                letterSpacing: "-0.3px",
                color: "var(--text-primary)",
              }}
            >
              Outside of work, you&apos;ll probably find me playing{" "}
              <LinkPreview
                url="https://www.bwfbadminton.com"
                isStatic
                imageSrc="/images/badminton.png"
                width={200}
                height={125}
                className="[color:var(--link-default)] hover:underline font-[inherit]"
              >
                badminton
              </LinkPreview>
              {" "}or catching up on sleep, no in-between.
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex items-center gap-8 mt-16"
            >
              {/* My Journey - Apple Primary Blue CTA */}
              <a
                href="/resume"
                style={{
                  fontFamily: textFont,
                  fontSize: 17,
                  fontWeight: 400,
                  color: "#ffffff",
                  background: "#0071e3",
                  borderRadius: 8,
                  padding: "8px 15px",
                  textDecoration: "none",
                  border: "1px solid transparent",
                  display: "inline-block",
                  lineHeight: 1,
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0077ED")}
                onMouseLeave={e => (e.currentTarget.style.background = "#0071e3")}
              >
                My Journey
              </a>

              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: textFont,
                    fontSize: 13,
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    color: "var(--text-tertiary)",
                    textDecoration: "none",
                  }}
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  {label}
                </a>
              ))}
            </motion.div>

          </div>

          {/* Right: photo cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            style={{ width: 400, height: 400 }}
          >
            <PhotoCardStack />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
