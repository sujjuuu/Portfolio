"use client";


const displayFont =
  "'SF Pro Display', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const textFont =
  "'SF Pro Text', 'SF Pro Icons', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif";

const skills = [
  "Product Design", "UI/UX Design", "Design Systems", "Interaction Design",
  "Prototyping & Micro-interactions", "UX Research & Testing", "A/B Testing", "Visual Design",
];

const tools = [
  "Figma", "ProtoPie", "ChatGPT", "Claude", "Gemini", "Lovable", "Google Stitch",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: textFont,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        color: "var(--text-tertiary)",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "var(--separator)", margin: "2.5rem 0" }} />;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li
      style={{
        fontFamily: textFont,
        fontSize: 14,
        lineHeight: 1.65,
        color: "var(--text-secondary)",
        marginBottom: "0.3rem",
      }}
    >
      {children}
    </li>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: textFont,
        fontSize: 12,
        fontWeight: 400,
        color: "var(--text-secondary)",
        background: "var(--bg-elevated)",
        border: "1px solid var(--separator)",
        borderRadius: 6,
        padding: "4px 10px",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

export default function ResumePage() {
  return (
    <div style={{ background: "var(--bg-page)", minHeight: "100vh" }}>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* Content */}
      <div className="max-w-[720px] mx-auto px-6" style={{ paddingTop: 120, paddingBottom: 80 }}>

        {/* Header */}
        <div className="mb-10">
          {/* Download Resume button */}
          <a
            href="/resume.pdf"
            download="Sujay Reddy - Resume.pdf"
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
              marginBottom: "1.5rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#0077ED")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0071e3")}
            className="no-print"
          >
            Download Resume
          </a>

          <h1
            style={{
              fontFamily: displayFont,
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 600,
              lineHeight: 1.07,
              letterSpacing: "-0.3px",
              color: "var(--text-primary)",
              margin: "0 0 0.4rem",
            }}
          >
            Sujay Reddy
          </h1>
          <p
            style={{
              fontFamily: displayFont,
              fontSize: 18,
              fontWeight: 500,
              color: "var(--text-secondary)",
              margin: "0 0 1.25rem",
            }}
          >
            Product Designer
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: "saisujay3@gmail.com", href: "mailto:saisujay3@gmail.com" },
              { label: "+91 96426 73999", href: "tel:+919642673999" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sujay-reddy-682a1b142/" },
              { label: "Portfolio", href: "/" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  fontFamily: textFont,
                  fontSize: 13,
                  color: "var(--link-default)",
                  textDecoration: "none",
                }}
                className="hover:underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <Divider />

        {/* About */}
        <div className="mb-0">
          <SectionLabel>About</SectionLabel>
          <p
            style={{
              fontFamily: textFont,
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            Product Designer with a strong foundation in Computer Science, focused on building
            scalable, high-impact digital experiences across AI, fintech, and consumer platforms.
            I specialize in simplifying complex systems into intuitive user flows, combining strong
            product thinking with clean, efficient design systems. I believe great design should
            feel intuitive, human, and effortless. Outside of work, you&apos;ll find me playing
            badminton or catching up on sleep.
          </p>
        </div>

        <Divider />

        {/* Experience */}
        <div>
          <SectionLabel>Experience</SectionLabel>

          {/* Conglomerate IT */}
          <div className="mb-10">
            <div className="flex items-baseline justify-between gap-4 mb-0.5">
              <h3 style={{ fontFamily: displayFont, fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                Conglomerate IT Solutions
              </h3>
              <span style={{ fontFamily: textFont, fontSize: 12, color: "var(--text-tertiary)", whiteSpace: "nowrap" as const }}>
                Sep 2025 – Present
              </span>
            </div>
            <p style={{ fontFamily: textFont, fontSize: 13, color: "var(--link-default)", margin: "0 0 0.75rem" }}>
              Product Designer → Lead Designer
            </p>
            <p style={{ fontFamily: textFont, fontSize: 13, color: "var(--text-tertiary)", margin: "0 0 0.75rem", fontStyle: "italic" as const }}>
              Promoted to Lead Designer within 2 months based on impact, ownership, and product contributions.
            </p>

            <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", margin: "0.75rem 0 0.4rem", letterSpacing: "0.02em" }}>
              Ask Diya: AI-powered education decision platform
            </p>
            <ul className="pl-4 list-disc" style={{ margin: 0 }}>
              <Bullet>Led end-to-end product design from 0 to 1, defining core architecture and scalable UX flows</Bullet>
              <Bullet>Reduced decision-making time by 40% by consolidating fragmented research into a guided experience</Bullet>
              <Bullet>Achieved 80%+ positive user feedback on recommendation relevance and usefulness</Bullet>
              <Bullet>Increased engagement with 70%+ profile completion and 40% return rate</Bullet>
              <Bullet>Built and scaled a design system, reducing UI development effort by 30%</Bullet>
            </ul>

            <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", margin: "0.75rem 0 0.4rem", letterSpacing: "0.02em" }}>
              As Lead Designer
            </p>
            <ul className="pl-4 list-disc" style={{ margin: 0 }}>
              <Bullet>Owned product design direction across key initiatives and ensured design quality</Bullet>
              <Bullet>Mentored designers and drove consistency through design system adoption</Bullet>
              <Bullet>Collaborated closely with product and engineering to align business and user goals</Bullet>
            </ul>

            <p style={{ fontFamily: textFont, fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", margin: "0.75rem 0 0.4rem", letterSpacing: "0.02em" }}>
              Jokerz: US-based bakery platform
            </p>
            <ul className="pl-4 list-disc" style={{ margin: 0 }}>
              <Bullet>Designed a subscription model to drive recurring revenue and repeat purchases</Bullet>
              <Bullet>Introduced a loyalty program, improving retention and customer engagement</Bullet>
              <Bullet>Optimized checkout flows, reducing drop-offs and improving conversion rates</Bullet>
            </ul>
          </div>

          {/* CraftMyPlate */}
          <div className="mb-10">
            <div className="flex items-baseline justify-between gap-4 mb-0.5">
              <h3 style={{ fontFamily: displayFont, fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                CraftMyPlate
              </h3>
              <span style={{ fontFamily: textFont, fontSize: 12, color: "var(--text-tertiary)", whiteSpace: "nowrap" as const }}>
                Apr 2025 – Sep 2025
              </span>
            </div>
            <p style={{ fontFamily: textFont, fontSize: 13, color: "var(--link-default)", margin: "0 0 0.75rem" }}>
              Product Designer
            </p>
            <ul className="pl-4 list-disc" style={{ margin: 0 }}>
              <Bullet>Increased repeat orders by ~11% through post-order engagement systems (loyalty, referrals, lifecycle nudges)</Bullet>
              <Bullet>Improved conversion by simplifying pre-order flows with structured, guided UX</Bullet>
              <Bullet>Designed internal tools for order management and fulfillment, reducing operational friction</Bullet>
              <Bullet>Owned end-to-end design across consumer and backend experiences</Bullet>
              <Bullet>Built and maintained a scalable multi-product design system</Bullet>
            </ul>
          </div>

          {/* BTC */}
          <div className="mb-0">
            <div className="flex items-baseline justify-between gap-4 mb-0.5">
              <h3 style={{ fontFamily: displayFont, fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                Beta Trading Company
              </h3>
              <span style={{ fontFamily: textFont, fontSize: 12, color: "var(--text-tertiary)", whiteSpace: "nowrap" as const }}>
                Dec 2024 – Mar 2025
              </span>
            </div>
            <p style={{ fontFamily: textFont, fontSize: 13, color: "var(--link-default)", margin: "0 0 0.75rem" }}>
              Product Designer (Contract)
            </p>
            <ul className="pl-4 list-disc" style={{ margin: 0 }}>
              <Bullet>Redesigned product experiences across financial services (trading, distribution, PMS offerings)</Bullet>
              <Bullet>Simplified complex financial workflows, improving clarity and usability</Bullet>
              <Bullet>Increased user confidence through better information architecture and UX patterns</Bullet>
              <Bullet>Established a scalable design foundation for future product expansion</Bullet>
            </ul>
          </div>
        </div>

        <Divider />

        {/* Personal Projects */}
        <div>
          <SectionLabel>Personal Projects</SectionLabel>
          <div className="flex flex-col gap-6">
            {[
              {
                name: "Fitora",
                description: "Fashion discovery platform",
                period: "Nov 2024 – Feb 2025",
                detail: "Location-based discovery experience for local designers and boutiques, focused on personalization and seamless browsing.",
              },
              {
                name: "Cigarzzz",
                description: "Immersive web experience",
                period: "Sep 2024 – Nov 2024",
                detail: "Interactive, visually engaging website with strong brand storytelling and immersive interactions.",
              },
            ].map(({ name, description, period, detail }) => (
              <div key={name}>
                <div className="flex items-baseline justify-between gap-4 mb-0.5">
                  <h3 style={{ fontFamily: displayFont, fontSize: 15, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                    {name}
                  </h3>
                  <span style={{ fontFamily: textFont, fontSize: 12, color: "var(--text-tertiary)", whiteSpace: "nowrap" as const }}>
                    {period}
                  </span>
                </div>
                <p style={{ fontFamily: textFont, fontSize: 12, color: "var(--link-default)", margin: "0 0 0.4rem" }}>
                  {description}
                </p>
                <p style={{ fontFamily: textFont, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Skills & Tools */}
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex-1">
            <SectionLabel>Skills</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => <Tag key={s} label={s} />)}
            </div>
          </div>
          <div className="flex-1">
            <SectionLabel>Tools</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {tools.map(t => <Tag key={t} label={t} />)}
            </div>
          </div>
        </div>

        <Divider />

        {/* Education */}
        <div>
          <SectionLabel>Education</SectionLabel>
          <div className="flex flex-col gap-5">
            {[
              { school: "PES University", degree: "Bachelor of Technology in Computer Science Engineering" },
              { school: "Designboat", degree: "Professional Bootcamp in UI/UX Design" },
            ].map(({ school, degree }) => (
              <div key={school}>
                <h3 style={{ fontFamily: displayFont, fontSize: 15, fontWeight: 600, color: "var(--text-primary)", margin: "0 0 2px" }}>
                  {school}
                </h3>
                <p style={{ fontFamily: textFont, fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>
                  {degree}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer padding */}
        <div style={{ height: 80 }} />
      </div>
    </div>
  );
}
