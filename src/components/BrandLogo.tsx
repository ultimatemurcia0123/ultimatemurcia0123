import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function BrandLogo({ variant = 'light', className = '' }: BrandLogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-2 group ${className}`}>
      <svg viewBox="0 0 86 50" aria-hidden="true" className="w-14 sm:w-[70px] h-11 shrink-0 text-[#00F34A]" fill="currentColor">
        {Array.from({ length: 19 }, (_, index) => {
          const angle = Math.PI + index * Math.PI / 18;
          const radius = index % 2 === 0 ? 40 : 32;
          const x = 43 + Math.cos(angle) * radius;
          const y = 44 + Math.sin(angle) * radius;
          const left = angle - 0.043;
          const right = angle + 0.043;
          return <path key={index} d={`M ${43 + Math.cos(left) * 17} ${44 + Math.sin(left) * 17} L ${x} ${y} L ${43 + Math.cos(right) * 17} ${44 + Math.sin(right) * 17} Z`} />;
        })}
        <path d="M4 45h23v2H4zM59 45h23v2H59zM10 41h15v1.4H10zM61 41h15v1.4H61z" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight text-base sm:text-lg uppercase transition-colors ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          ULTIMATE MURCIA
        </span>
        <span
          className="font-bold text-[10px] sm:text-[11px] tracking-[0.32em] text-[#00F34A] uppercase mt-0.5"
        >
          PROPERTY SALES
        </span>
      </div>
    </Link>
  );
}
