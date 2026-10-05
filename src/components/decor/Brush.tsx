import React from 'react';

/**
 * Hand-painted green brush swoosh (used under marker stickers & headings).
 */
export function BrushStroke({
  className = '',
  color = '#00F34A',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 30"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 20 C 60 8, 140 4, 296 10 C 230 14, 150 18, 70 26 C 50 28, 20 27, 4 20 Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Comic-style "burst" dashes that radiate around a sticker.
 */
export function BurstLines({
  className = '',
  color = '#00F34A',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <g stroke={color} strokeWidth="6" strokeLinecap="round">
        <path d="M40 6 L44 22" />
        <path d="M66 18 L54 30" />
        <path d="M74 46 L58 44" />
        <path d="M10 18 L24 30" />
      </g>
    </svg>
  );
}

/**
 * Large ragged paint splash used to frame dark sections (Discover Murcia).
 */
export function PaintSplash({
  className = '',
  color = '#00F34A',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 400 200" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        fill={color}
        d="M0 40 L60 20 L40 48 L120 10 L95 50 L190 0 L150 58 L260 18 L210 70 L330 30 L270 90 L400 60 L400 80 L300 120 L340 110 L230 160 L260 140 L150 190 L180 160 L80 200 L100 170 L0 190 Z"
        opacity="0.95"
      />
    </svg>
  );
}

/**
 * Handwritten marker-style sticker text ("Life in Murcia").
 */
export function MarkerText({
  lines,
  className = '',
  underline = true,
}: {
  lines: string[];
  className?: string;
  underline?: boolean;
}) {
  return (
    <div className={`relative inline-block font-marker uppercase text-white leading-[0.95] ${className}`}>
      {lines.map((line) => (
        <span key={line} className="block drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {line}
        </span>
      ))}
      {underline && <BrushStroke className="absolute -bottom-3 left-0 w-full h-3" />}
    </div>
  );
}
