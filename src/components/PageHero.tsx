import React from 'react';
import Mascot, { MascotPose } from '@/components/Mascot';
import { MarkerText, BurstLines } from '@/components/decor/Brush';

/**
 * Shared dark hero banner for inner pages (About, Services, Areas, Contact…).
 * Keeps every page on-brand with the homepage: photo background, eyebrow,
 * slanted italic headline with a green highlight word, marker sticker and mascot.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  mascot,
  sticker,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Words rendered in neon green on a second line */
  highlight?: string;
  description?: string;
  image: string;
  mascot?: MascotPose;
  /** Handwritten marker lines shown near the mascot */
  sticker?: string[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative bg-[#080C14] text-white overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#080C14]/80 to-[#080C14]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-[#080C14]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="grid lg:grid-cols-12 items-end gap-8">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="eyebrow mb-4">{eyebrow}</div>
            <h1 className="display-title text-5xl sm:text-7xl lg:text-8xl">
              <span className="block">{title}</span>
              {highlight && <span className="block text-[#00D26A] text-glow">{highlight}</span>}
            </h1>
            {description && (
              <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>

          {mascot && (
            <div className="relative flex justify-center lg:justify-end items-end col-span-12 lg:col-span-4 min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]">
              {sticker && (
                <div className="absolute left-4 lg:-left-6 top-2 lg:top-4 z-10 -rotate-[8deg]">
                  <BurstLines className="absolute -left-8 -top-6 w-12 h-12" />
                  <MarkerText lines={sticker} className="text-xl sm:text-2xl xl:text-3xl" />
                </div>
              )}
              <Mascot
                pose={mascot}
                priority
                className="h-56 sm:h-72 md:h-80 lg:h-[380px] w-auto object-contain object-bottom"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
