import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AnimatedNavFramer } from "@/components/ui/navigation-menu";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { ClientProviders } from "@/components/ClientProviders";
import { MobileWarning } from "@/components/ui/mobile-warning";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujay Reddy Product Designer",
  description: "Product designer focused on AI-native products, design systems, and meaningful user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <MobileWarning />
        <ClientProviders>
          <AnimatedNavFramer />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <FloatingCTA />
        </ClientProviders>
      </body>
    </html>
  );
}
