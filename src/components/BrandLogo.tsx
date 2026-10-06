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
        {/* Fixed coordinates keep server and browser markup identical. */}
        <path d="M 27.03 45.04 L 9.00 44.00 L 27.03 42.96 Z M 27.05 42.76 L 9.35 39.16 L 27.34 40.70 Z M 27.39 40.50 L 3.66 32.45 L 27.97 38.50 Z M 28.04 38.31 L 12.07 29.88 L 28.91 36.42 Z M 29.01 36.24 L 8.51 21.83 L 30.13 34.49 Z M 30.25 34.33 L 17.30 21.73 L 31.61 32.76 Z M 31.76 32.61 L 16.15 13.01 L 33.33 31.25 Z M 33.49 31.13 L 24.62 15.40 L 35.24 30.01 Z M 35.42 29.91 L 25.97 6.71 L 37.31 29.04 Z M 37.50 28.97 L 33.42 11.38 L 39.50 28.39 Z M 39.70 28.34 L 37.17 3.42 L 41.76 28.05 Z M 41.96 28.03 L 43.00 10.00 L 44.04 28.03 Z M 44.24 28.05 L 48.83 3.42 L 46.30 28.34 Z M 46.50 28.39 L 52.58 11.38 L 48.50 28.97 Z M 48.69 29.04 L 60.03 6.71 L 50.58 29.91 Z M 50.76 30.01 L 61.38 15.40 L 52.51 31.13 Z M 52.67 31.25 L 69.85 13.01 L 54.24 32.61 Z M 54.39 32.76 L 68.70 21.73 L 55.75 34.33 Z M 55.87 34.49 L 77.49 21.83 L 56.99 36.24 Z M 57.09 36.42 L 73.93 29.88 L 57.96 38.31 Z M 58.03 38.50 L 82.34 32.45 L 58.61 40.50 Z M 58.66 40.70 L 76.65 39.16 L 58.95 42.76 Z M 58.97 42.96 L 77.00 44.00 L 58.97 45.04 Z" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight text-base sm:text-[20px] uppercase transition-colors ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          ULTIMATE MURCIA
        </span>
        <span
          className="font-extrabold text-[10px] sm:text-[11px] tracking-[0.32em] text-[#00F34A] uppercase mt-0.5"
        >
          PROPERTY SALES
        </span>
      </div>
    </Link>
  );
}
