"use client";

const displayFont =
  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const textFont =
  "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";

export function MobileWarning() {
  return (
    <div
      className="fixed inset-0 z-[9999] hidden max-[600px]:flex flex-col items-center justify-center px-10 text-center"
      style={{ background: "var(--bg-page)" }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="mb-6 opacity-30"
        aria-hidden="true"
      >
        <rect x="4" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--text-primary)" }} />
        <path d="M14 32v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-primary)" }} />
        <path d="M26 32v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-primary)" }} />
        <path d="M10 36h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-primary)" }} />
        <rect x="36" y="16" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--text-primary)" }} />
        <circle cx="40" cy="29" r="1" fill="currentColor" style={{ color: "var(--text-primary)" }} />
      </svg>

      <p
        style={{
          fontFamily: displayFont,
          fontSize: "1.375rem",
          fontWeight: 600,
          letterSpacing: "-0.3px",
          lineHeight: 1.3,
          color: "var(--text-primary)",
          marginBottom: "0.75rem",
        }}
      >
        Best viewed on a larger screen
      </p>

      <p
        style={{
          fontFamily: textFont,
          fontSize: "0.9375rem",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "var(--text-secondary)",
          maxWidth: 280,
        }}
      >
        For the full experience, open this on a laptop, iPad, or a larger display.
      </p>
    </div>
  );
}
