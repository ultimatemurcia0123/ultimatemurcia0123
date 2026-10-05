import React from 'react';
import { IMAGES } from '@/data/images';

export type MascotPose = keyof typeof IMAGES.mascot;

/**
 * "Sunny" — the Ultimate Murcia mascot.
 *
 * The artwork is registered in IMAGES.mascot (transparent WebP, portrait).
 */
export default function Mascot({
  pose = 'point',
  className = '',
  float = true,
  priority = false,
}: {
  pose?: MascotPose;
  className?: string;
  float?: boolean;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={IMAGES.mascot[pose]}
      alt="Sunny, the Ultimate Murcia mascot"
      width={1108}
      height={1420}
      className={`select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] ${
        float ? 'animate-float' : ''
      } ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      draggable={false}
    />
  );
}
