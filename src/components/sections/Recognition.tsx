"use client";

import { motion } from "framer-motion";
import { AwardBadge } from "@/components/ui/award-badge";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const phLink = "https://www.producthunt.com";

const badges = [
  { type: "product-of-the-day",   place: 2, link: phLink, customTitle: "Figma.",  logoSrc: "/images/tools/figma.png"    },
  { type: "product-of-the-week",  place: 2, link: phLink, customTitle: "ChatGPT", logoSrc: "/images/tools/chatgpt.png"  },
  { type: "product-of-the-month", place: 2, link: phLink, customTitle: "Gemini",  logoSrc: "/images/tools/gemini.png"   },
  { type: "golden-kitty",         place: 2, link: phLink, customTitle: "Claude",  logoSrc: "/images/tools/claude.png"   },
  { type: "product-of-the-month", place: 2, link: phLink, customTitle: "Framer",  logoSrc: "/images/tools/framer.png"   },
  { type: "product-of-the-week",  place: 2, link: phLink, customTitle: "Notion",  logoSrc: "/images/tools/notion.png"   },
] as const;

export function RecognitionSection() {
  return (
    <section className="bg-white px-8 py-28">
      <div className="max-w-[980px] mx-auto w-full">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={`${badge.type}-${i}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AwardBadge
                type={badge.type}
                place={badge.place}
                link={badge.link}
                customTitle={badge.customTitle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
