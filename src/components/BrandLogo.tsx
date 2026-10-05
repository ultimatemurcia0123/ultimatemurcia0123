import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function BrandLogo({ variant = 'light', className = '' }: BrandLogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Sunburst / Palm Geometric Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-[#00D26A] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Central sun half */}
          <path
            d="M14 26C14 20.4772 18.4772 16 24 16C29.5228 16 34 20.4772 34 26H14Z"
            fill="currentColor"
            opacity="0.95"
          />
          {/* Radiating sunburst palm fronds / rays */}
          <path d="M24 6V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M17 9L20 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M31 9L28 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M11 15L16 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M37 15L32 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8 23H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35 23H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          {/* Base horizon bars */}
          <path d="M10 29H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 33H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-wider text-base sm:text-lg uppercase transition-colors ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
          style={{ letterSpacing: '0.08em' }}
        >
          ULTIMATE MURCIA
        </span>
        <span
          className="font-bold text-[10px] sm:text-[11px] tracking-[0.25em] text-[#00D26A] uppercase mt-0.5"
        >
          PROPERTY SALES
        </span>
      </div>
    </Link>
  );
}
