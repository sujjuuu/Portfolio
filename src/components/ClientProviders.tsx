"use client";

import { ThemeProvider } from "@/context/theme";
import { ThemeOverlay } from "@/components/ThemeOverlay";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeOverlay />
      {children}
    </ThemeProvider>
  );
}
