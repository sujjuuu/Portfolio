"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MorphingTextDemo } from "@/components/demo/morphing-text-demo";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { WorkSection } from "@/components/sections/Work";
import { POVSection } from "@/components/sections/POV";
import { PlaySection } from "@/components/sections/Play";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const PRELOADER_DURATION = 4500;

// Persists across client-side re-navigations within the same JS session.
// Never read at module-init time on the server only mutated inside useEffect.
let preloaderDone = false;

export function PreloaderTransition() {
  // Always start false so server HTML and client initial render agree.
  // useEffect (client-only) sets this to true when the preloader should run.
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Already ran this session (client-side navigation back to home)
    if (preloaderDone) return;

    // Already ran in a previous page load this browser session
    if (sessionStorage.getItem("preloader-shown") === "1") {
      preloaderDone = true;
      return;
    }

    // First visit show the preloader
    preloaderDone = true;
    sessionStorage.setItem("preloader-shown", "1");
    setShowPreloader(true);

    const timer = setTimeout(() => setShowPreloader(false), PRELOADER_DURATION);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Fixed overlay only mounts/unmounts on first visit */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "var(--bg-page)" }}
          >
            <MorphingTextDemo />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content always rendered, preloader overlays it on first visit */}
      <div style={{ background: "var(--bg-page)" }}>
        <HeroSection />
        <div id="about"><ScrollReveal><AboutSection /></ScrollReveal></div>
        <div id="work"><ScrollReveal><WorkSection /></ScrollReveal></div>
        <div id="pov"><ScrollReveal><POVSection /></ScrollReveal></div>
        <div id="play"><ScrollReveal><PlaySection /></ScrollReveal></div>
      </div>
    </>
  );
}
