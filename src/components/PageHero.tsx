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

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 ${mascot ? 'pb-60 sm:pb-72 lg:pb-20 lg:min-h-[450px] xl:min-h-[510px] lg:flex lg:items-center' : 'pb-14 md:pb-20'}`}>
        <div className={`relative z-20 animate-fade-up ${mascot ? 'lg:max-w-[68%]' : ''}`}>
          <div className="eyebrow mb-4">{eyebrow}</div>
          <h1 className="display-title text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-8xl">
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
          <div className="absolute bottom-0 right-0 sm:right-4 lg:right-6 z-10 w-44 sm:w-56 lg:w-[330px] xl:w-[390px] pointer-events-none">
            {sticker && (
              <div className="hidden lg:block absolute -left-20 top-8 z-10 -rotate-[8deg]">
                <BurstLines className="absolute -left-8 -top-6 w-12 h-12" />
                <MarkerText lines={sticker} className="text-xl sm:text-2xl xl:text-3xl" />
              </div>
            )}
            <Mascot
              pose={mascot}
              priority
              float={false}
              className="block w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
}
