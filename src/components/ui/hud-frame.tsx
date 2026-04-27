"use client";

// Colors
const OG  = "#E55010"; // primary orange
const OGD = "#B83008"; // dark orange corner accent
const BLK = "#111111"; // notch black
const GLS = "#E2E2E2"; // grey light shape fill
const GLN = "#C8C8C8"; // grey connector line

// Single diagonal stripe (parallelogram, / direction)
function Stripe({ sx, sy, h }: { sx: number; sy: number; h: number }) {
  const w = 7;
  return (
    <polygon
      points={`${sx},${sy + h} ${sx + w},${sy + h} ${sx + w + h},${sy} ${sx + h},${sy}`}
      fill="white"
      opacity={0.88}
    />
  );
}

// Group of 3 stripes centered on cx
function StripeGroup({ cx, sy, h }: { cx: number; sy: number; h: number }) {
  const gap = 15;
  return (
    <>
      <Stripe sx={cx - gap}     sy={sy} h={h} />
      <Stripe sx={cx}           sy={sy} h={h} />
      <Stripe sx={cx + gap}     sy={sy} h={h} />
    </>
  );
}

// '+' crosshair
function Cross({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke={BLK} strokeWidth={1.5}>
      <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} />
      <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} />
    </g>
  );
}

export function HUDFrame() {
  const W = 1600, H = 900;
  const B = 22;          // border thickness
  const C = 60;          // outer chamfer size
  const iC = C - B;      // inner chamfer (38)

  // Inner boundary corners
  const [x1, y1, x2, y2] = [B, B, W - B, H - B];

  // Frame compound path (fill-rule evenodd = hollow center)
  const outerRect = `M0,0 H${W} V${H} H0 Z`;
  const innerOct  = `M${C},${B} H${W-C} L${x2},${C} V${H-C} L${W-C},${y2} H${C} L${x1},${H-C} V${C} Z`;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="hud-top">
            <rect x="0" y="0" width={W} height={B} />
          </clipPath>
          <clipPath id="hud-bot">
            <rect x="0" y={H - B} width={W} height={B} />
          </clipPath>
        </defs>

        {/* ── 1. Orange frame ─────────────────────────────────────────────── */}
        <path fillRule="evenodd" fill={OG} d={`${outerRect} ${innerOct}`} />

        {/* ── 2. Dark orange corner triangles ─────────────────────────────── */}
        <polygon points={`0,0 ${C},0 0,${C}`}               fill={OGD} />
        <polygon points={`${W},0 ${W-C},0 ${W},${C}`}       fill={OGD} />
        <polygon points={`0,${H} ${C},${H} 0,${H-C}`}       fill={OGD} />
        <polygon points={`${W},${H} ${W-C},${H} ${W},${H-C}`} fill={OGD} />

        {/* ── 3. Hazard stripes — top bar ─────────────────────────────────── */}
        <g clipPath="url(#hud-top)">
          <StripeGroup cx={W/2 - 10} sy={0} h={B} />
          <StripeGroup cx={100}      sy={0} h={B} />
          <StripeGroup cx={W - 110}  sy={0} h={B} />
        </g>

        {/* ── 4. Hazard stripes — bottom bar ──────────────────────────────── */}
        <g clipPath="url(#hud-bot)">
          <StripeGroup cx={W/2 - 10} sy={H - B} h={B} />
          <StripeGroup cx={100}      sy={H - B} h={B} />
          <StripeGroup cx={W - 110}  sy={H - B} h={B} />
        </g>

        {/* ── 5. Black notches — left & right borders ─────────────────────── */}
        <rect x={0}     y={78}      width={B} height={40} fill={BLK} />
        <rect x={0}     y={H - 118} width={B} height={40} fill={BLK} />
        <rect x={W - B} y={78}      width={B} height={40} fill={BLK} />
        <rect x={W - B} y={H - 118} width={B} height={40} fill={BLK} />

        {/* ── 6. Corner '+' crosshairs ────────────────────────────────────── */}
        <Cross cx={46}     cy={46} />
        <Cross cx={W - 46} cy={46} />
        <Cross cx={46}     cy={H - 46} />
        <Cross cx={W - 46} cy={H - 46} />

        {/* ── 7. Interior grey corner blocks ──────────────────────────────── */}

        {/* Top-left */}
        <polygon fill={GLS}
          points={`${C},${B} 340,${B} 385,63 385,95 305,175 82,175 ${B},148 ${B},${C}`} />

        {/* Top-right */}
        <polygon fill={GLS}
          points={`${W-C},${B} ${W-340},${B} ${W-385},63 ${W-385},95 ${W-305},175 ${W-82},175 ${W-B},148 ${W-B},${C}`} />

        {/* Bottom-left */}
        <polygon fill={GLS}
          points={`${C},${H-B} 340,${H-B} 385,${H-63} 385,${H-95} 305,${H-175} 82,${H-175} ${B},${H-148} ${B},${H-C}`} />

        {/* Bottom-right */}
        <polygon fill={GLS}
          points={`${W-C},${H-B} ${W-340},${H-B} ${W-385},${H-63} ${W-385},${H-95} ${W-305},${H-175} ${W-82},${H-175} ${W-B},${H-148} ${W-B},${H-C}`} />

        {/* Left-center side block */}
        <polygon fill={GLS}
          points={`${B},360 162,308 218,360 218,540 162,592 ${B},540`} />

        {/* Right-center side block */}
        <polygon fill={GLS}
          points={`${W-B},360 ${W-162},308 ${W-218},360 ${W-218},540 ${W-162},592 ${W-B},540`} />

        {/* ── 8. Thin secondary outlines on corner blocks (darker edge) ───── */}
        <polygon fill="none" stroke={GLN} strokeWidth={1}
          points={`${C},${B} 340,${B} 385,63 385,95 305,175 82,175 ${B},148 ${B},${C}`} />
        <polygon fill="none" stroke={GLN} strokeWidth={1}
          points={`${W-C},${B} ${W-340},${B} ${W-385},63 ${W-385},95 ${W-305},175 ${W-82},175 ${W-B},148 ${W-B},${C}`} />
        <polygon fill="none" stroke={GLN} strokeWidth={1}
          points={`${C},${H-B} 340,${H-B} 385,${H-63} 385,${H-95} 305,${H-175} 82,${H-175} ${B},${H-148} ${B},${H-C}`} />
        <polygon fill="none" stroke={GLN} strokeWidth={1}
          points={`${W-C},${H-B} ${W-340},${H-B} ${W-385},${H-63} ${W-385},${H-95} ${W-305},${H-175} ${W-82},${H-175} ${W-B},${H-148} ${W-B},${H-C}`} />

        {/* ── 9. Diagonal connector lines ─────────────────────────────────── */}
        {/* Top-left → center */}
        <line x1={385} y1={95}  x2={670} y2={380} stroke={GLN} strokeWidth={0.8} />
        <line x1={305} y1={175} x2={560} y2={430} stroke={GLN} strokeWidth={0.8} />

        {/* Top-right → center */}
        <line x1={W-385} y1={95}  x2={W-670} y2={380} stroke={GLN} strokeWidth={0.8} />
        <line x1={W-305} y1={175} x2={W-560} y2={430} stroke={GLN} strokeWidth={0.8} />

        {/* Bottom-left → center */}
        <line x1={385} y1={H-95}  x2={670} y2={H-380} stroke={GLN} strokeWidth={0.8} />
        <line x1={305} y1={H-175} x2={560} y2={H-430} stroke={GLN} strokeWidth={0.8} />

        {/* Bottom-right → center */}
        <line x1={W-385} y1={H-95}  x2={W-670} y2={H-380} stroke={GLN} strokeWidth={0.8} />
        <line x1={W-305} y1={H-175} x2={W-560} y2={H-430} stroke={GLN} strokeWidth={0.8} />

        {/* Horizontal inner edge lines */}
        <line x1={B}   y1={175} x2={300} y2={175} stroke={GLN} strokeWidth={0.6} opacity={0.5} />
        <line x1={W-B} y1={175} x2={W-300} y2={175} stroke={GLN} strokeWidth={0.6} opacity={0.5} />
        <line x1={B}   y1={H-175} x2={300} y2={H-175} stroke={GLN} strokeWidth={0.6} opacity={0.5} />
        <line x1={W-B} y1={H-175} x2={W-300} y2={H-175} stroke={GLN} strokeWidth={0.6} opacity={0.5} />
      </svg>
    </div>
  );
}
