"use client";

import { motion } from "framer-motion";
import { useTheme, THEMES } from "@/context/theme";

export function ThemeOverlay() {
  const { themeKey } = useTheme();

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 999 }}
      animate={{
        backgroundColor: themeKey ? THEMES[themeKey].overlay : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    />
  );
}
