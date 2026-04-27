"use client";

interface GlitchButtonProps {
  label?: string;
  className?: string;
}

export function GlitchButton({ label = "VIEW", className = "" }: GlitchButtonProps) {
  return (
    <div className={`sv-wrapper relative group transform-gpu transition-transform duration-200 ease-out ${className}`}>
      <button
        className="sv-btn relative px-6 py-2.5 text-[11px] font-black border-none rounded-full cursor-pointer bg-white text-black uppercase tracking-[3px] transform-gpu transition-all duration-150 ease-out"
        style={{
          textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        {label}

        {/* Glitch layers */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="sv-layer-1 glitch-layer absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-full text-cyan-400 opacity-0 transition-all duration-150 origin-center text-[11px] font-black uppercase tracking-[3px]">
            {label}
          </div>
          <div className="sv-layer-2 glitch-layer absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-full text-fuchsia-500 opacity-0 transition-all duration-150 origin-center text-[11px] font-black uppercase tracking-[3px]">
            {label}
          </div>
        </div>

        {/* Noise overlay */}
        <div
          className="sv-noise absolute pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "repeating-radial-gradient(circle at 50% 50%, transparent 0, rgba(0,0,0,0.08) 1px, transparent 2px)",
          }}
        />

        {/* Scanning slice */}
        <div className="sv-slice absolute w-[120%] h-[4px] bg-white opacity-0" />
      </button>
    </div>
  );
}
