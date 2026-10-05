'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';
import { PaintSplash } from '@/components/decor/Brush';

export default function DiscoverMurciaSection() {
  const { discoverMurcia } = SITE_CONTENT;

  return (
    <section id="discover" className="relative py-24 sm:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00D26A]/10 rounded-full blur-[140px]" />
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-[#00D26A]/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-[#00D26A]/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Tilted Polaroid: STUNNING COASTLINE with Green Paint Splash */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative max-w-[290px] mx-auto">
              {/* Green Paint Splashes behind */}
              <PaintSplash className="absolute -top-10 -left-10 w-44 h-28 -rotate-12 pointer-events-none text-[#00D26A]" />
              <PaintSplash className="absolute -bottom-8 -right-8 w-44 h-28 rotate-180 pointer-events-none text-[#00D26A]" />

              <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-500 bg-white p-3.5 pb-6 rounded-2xl shadow-2xl shadow-black/90">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={discoverMurcia.polaroids[0].image}
                    alt="Murcia Mediterranean Coastline"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Slanted Tape Badge in Marker Font */}
                <div className="absolute -bottom-3 left-6 -rotate-6 bg-white px-3 py-1 shadow-lg border border-slate-200">
                  <span className="font-marker text-slate-950 text-xs sm:text-sm tracking-wider uppercase">
                    {discoverMurcia.polaroids[0].label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Display Headline & Explore CTA */}
          <div className="lg:col-span-6 text-center max-w-2xl mx-auto space-y-6">
            <div className="eyebrow">
              {discoverMurcia.badge}
            </div>

            <h2 className="display-title text-4xl sm:text-6xl lg:text-7xl leading-[0.9]">
              <span className="text-white block">{discoverMurcia.titlePart1}</span>
              <span className="text-[#00D26A] text-glow block">{discoverMurcia.titlePart2}</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
              {discoverMurcia.description}
            </p>

            <div className="pt-2">
              <Link
                href={discoverMurcia.ctaLink}
                className="inline-flex items-center gap-2.5 bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-[0_10px_35px_-10px_rgba(0,210,106,0.8)] hover:-translate-y-0.5 group"
              >
                <span>{discoverMurcia.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Tilted Polaroid: WORLD CLASS GOLF with Green Paint Splash */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative max-w-[290px] mx-auto">
              {/* Green Paint Splashes behind */}
              <PaintSplash className="absolute -top-10 -right-8 w-44 h-28 rotate-45 pointer-events-none text-[#00D26A]" />
              <PaintSplash className="absolute -bottom-8 -left-8 w-44 h-28 -rotate-90 pointer-events-none text-[#00D26A]" />

              <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500 bg-white p-3.5 pb-6 rounded-2xl shadow-2xl shadow-black/90">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={discoverMurcia.polaroids[1].image}
                    alt="Murcia Championship Golf"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Slanted Tape Badge in Marker Font */}
                <div className="absolute -bottom-3 right-6 rotate-3 bg-white px-3 py-1 shadow-lg border border-slate-200">
                  <span className="font-marker text-slate-950 text-xs sm:text-sm tracking-wider uppercase">
                    {discoverMurcia.polaroids[1].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
