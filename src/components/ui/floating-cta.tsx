"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Mail, Phone } from "lucide-react";
import { Folder } from "@/components/ui/folder-components";

const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

const menuItems = [
  {
    icon: Download,
    label: "Download Resume",
    href: "/resume.pdf",
    download: true,
  },
  {
    icon: FileText,
    label: "View Resume",
    href: "/resume",
    download: false,
  },
  {
    icon: Mail,
    label: "Mail",
    href: "mailto:saisujay3@gmail.com",
    download: false,
  },
  {
    icon: Phone,
    label: "9642673999",
    href: "tel:+919642673999",
    download: false,
  },
];

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3"
    >
      {/* Popup menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col overflow-hidden rounded-2xl"
            style={{
              background: "#ffffff",
              boxShadow: "rgba(0,0,0,0.22) 3px 5px 30px 0px",
              minWidth: 200,
              transformOrigin: "bottom center",
            }}
          >
            {menuItems.map(({ icon: Icon, label, href, download }, i) => (
              <a
                key={label}
                href={href}
                download={download || undefined}
                target={!download && href.startsWith("mailto") ? undefined : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 transition-colors duration-150 hover:bg-[#f5f5f7]"
                style={{
                  fontFamily: textFont,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  borderBottom: i < menuItems.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
              >
                <Icon
                  className="flex-shrink-0"
                  style={{ width: 15, height: 15, color: "#0071e3" }}
                />
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Folder button */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        aria-label="Contact options"
      >
        <Folder color="blue" size="md" />
      </button>
    </motion.div>
  );
}
