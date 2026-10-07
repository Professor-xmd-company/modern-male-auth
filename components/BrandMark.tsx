import React from "react";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <svg
        width="160"
        height="160"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-none"
        aria-hidden="true"
      >
        {/* Outer Precision Frame */}
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          stroke="#2A2E33"
          strokeWidth="1.5"
        />
        {/* Inner Precision Grid & Diamond */}
        <polygon
          points="50,18 82,50 50,82 18,50"
          stroke="#2A2E33"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        {/* Center Metallic Bronze Precision Accent */}
        <path
          d="M30 30L70 70M70 30L30 70"
          stroke="#B87333"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="3" fill="#B87333" />
        {/* Micro coordinate markers */}
        <line x1="50" y1="10" x2="50" y2="15" stroke="#B87333" strokeWidth="1.5" />
        <line x1="50" y1="85" x2="50" y2="90" stroke="#B87333" strokeWidth="1.5" />
        <line x1="10" y1="50" x2="15" y2="50" stroke="#B87333" strokeWidth="1.5" />
        <line x1="85" y1="50" x2="90" y2="50" stroke="#B87333" strokeWidth="1.5" />
      </svg>
      <div className="mt-6 flex flex-col items-center tracking-[0.25em] text-xs uppercase text-[#E2E4E7]/60 font-medium">
        <span className="text-[#E2E4E7] tracking-[0.35em] text-sm font-semibold">VALENCE</span>
        <span className="text-[10px] text-[#B87333] tracking-[0.4em] mt-1">ENGINEERED CALM</span>
      </div>
    </div>
  );
}
