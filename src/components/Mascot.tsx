import React from 'react';
import { IMAGES } from '@/data/images';

export type MascotPose = keyof typeof IMAGES.mascot;

/**
 * "Sunny" — the Ultimate Murcia mascot.
 *
 * Swap the artwork by replacing the files listed in IMAGES.mascot
 * (transparent PNG/WebP, portrait). Every page picks a pose.
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
      className={`select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] ${
        float ? 'animate-float' : ''
      } ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      draggable={false}
    />
  );
}
