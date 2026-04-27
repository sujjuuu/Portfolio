"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/theme";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "POV", href: "#pov" },
  { name: "Play", href: "#play" },
  { name: "Get in Touch", href: "https://www.linkedin.com/in/sujay-reddy-682a1b142/", external: true },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const appleFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 15 },
  },
  collapsed: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.25 },
  },
};

const itemVariants: Variants = {
  expanded: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 15 },
  },
  collapsed: {
    opacity: 0,
    x: -20,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const collapsedIconVariants: Variants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 15, stiffness: 300, delay: 0.15 },
  },
};

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { isDark, toggleDark } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        style={{ fontFamily: appleFont, background: "var(--nav-bg)" }}
        className={cn(
          "flex items-center overflow-hidden rounded-full h-12",
          "shadow-[0_2px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_20px_rgba(255,255,255,0.04)]",
          "[backdrop-filter:saturate(180%)_blur(20px)]",
          !isExpanded && "cursor-pointer justify-center",
        )}
      >
        {/* Name / logo */}
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center pl-5 pr-4"
        >
          <span
            style={{
              fontFamily: appleFont,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
            }}
          >
            Sujay Reddy
          </span>
        </motion.div>

        {/* Separator */}
        <motion.div
          variants={logoVariants}
          style={{ background: "var(--nav-border)" }}
          className="h-4 w-px flex-shrink-0"
        />

        {/* Nav links */}
        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-5 pl-4",
            !isExpanded && "pointer-events-none",
          )}
        >
          {navItems.map((item) => {
            const isExternal = "external" in item && item.external;
            const href = isExternal ? item.href : isHome ? item.href : `/${item.href}`;
            return (
              <motion.a
                key={item.name}
                href={href}
                variants={itemVariants}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => e.stopPropagation()}
                style={{ color: "var(--text-secondary)" }}
                className="text-[12px] font-normal transition-colors px-2 py-1 tracking-[0.01em] hover:opacity-100"
              >
                {item.name}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Dark mode toggle separator */}
        <motion.div
          variants={logoVariants}
          style={{ background: "var(--nav-border)" }}
          className="h-4 w-px flex-shrink-0 mx-1"
        />

        {/* Dark mode toggle */}
        <motion.div variants={itemVariants} className="pr-4 flex-shrink-0">
          <button
            onClick={(e) => { e.stopPropagation(); toggleDark(); }}
            className="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200"
            style={{
              background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
              border: "none",
              cursor: "pointer",
            }}
          >
            {isDark
              ? <Sun  className="h-3.5 w-3.5" style={{ color: "rgba(255,255,255,0.8)" }} />
              : <Moon className="h-3.5 w-3.5" style={{ color: "rgba(0,0,0,0.6)"       }} />
            }
          </button>
        </motion.div>

        {/* Collapsed icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
          >
            <Menu className="h-5 w-5" style={{ color: "var(--text-primary)" }} strokeWidth={1.5} />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
