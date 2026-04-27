"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

export type ThemeKey = "R" | "G" | "B" | null;

export const THEMES = {
  R: { color: "#FF3B30", overlay: "rgba(255,59,48,0.07)",  link: "#D92B20", bright: "#FF6961" },
  G: { color: "#34C759", overlay: "rgba(52,199,89,0.07)",  link: "#248A3D", bright: "#4CD964" },
  B: { color: "#0071E3", overlay: "rgba(0,113,227,0.06)",  link: "#0066CC", bright: "#2997FF" },
} as const;

interface ThemeContextValue {
  themeKey: ThemeKey;
  setTheme: (key: ThemeKey) => void;
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeKey: null,
  setTheme: () => {},
  isDark: false,
  toggleDark: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>(null);
  const [isDark, setIsDark] = useState(true);

  const setTheme = useCallback((key: ThemeKey) => {
    setThemeKey(key);
    if (typeof document === "undefined") return;
    const c = key ? THEMES[key] : null;
    document.documentElement.style.setProperty("--theme-accent", c?.color  ?? "#0071e3");
    document.documentElement.style.setProperty("--theme-link",   c?.link   ?? "#0066cc");
    document.documentElement.style.setProperty("--theme-bright", c?.bright ?? "#2997ff");
  }, []);

  // Restore dark preference from localStorage; default to dark on first visit
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeKey, setTheme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
