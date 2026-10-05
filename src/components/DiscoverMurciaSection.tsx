'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

export default function DiscoverMurciaSection() {
  const { discoverMurcia } = SITE_CONTENT;

  return (
    <section id="discover" className="relative py-24 sm:py-32 bg-[#080C14] text-white overflow-hidden">
      {/* Background Palm Silhouettes & Green Glow Splatters */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00D26A]/10 rounded-full blur-[120px]" />
        <div className="absolute -top-12 left-10 w-96 h-96 bg-[#00D26A]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#00D26A]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Tilted Polaroid: STUNNING COASTLINE */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[280px] mx-auto">
              <div className="bg-white p-3 pb-5 rounded-2xl shadow-2xl shadow-black/80 border border-white/20">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                  <img
                    src={discoverMurcia.polaroids[0].image}
                    alt="Murcia Mediterranean Coastline"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Sticker Tape Badge */}
                <div className="mt-3 text-center">
                  <span className="inline-block bg-[#080C14] text-white font-mono font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded border-b-2 border-[#00D26A]">
                    {discoverMurcia.polaroids[0].label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Text & CTA */}
          <div className="lg:col-span-6 text-center max-w-2xl mx-auto space-y-6">
            <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#00D26A] uppercase">
              {discoverMurcia.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.05] italic">
              <span className="text-white block">{discoverMurcia.titlePart1}</span>
              <span className="text-[#00D26A] block">{discoverMurcia.titlePart2}</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {discoverMurcia.description}
            </p>

            <div className="pt-2">
              <Link
                href={discoverMurcia.ctaLink}
                className="inline-flex items-center gap-2 bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-xl shadow-[#00D26A]/20 group"
              >
                <span>{discoverMurcia.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Tilted Polaroid: WORLD CLASS GOLF */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="transform rotate-6 hover:rotate-0 transition-transform duration-500 max-w-[280px] mx-auto">
              <div className="bg-white p-3 pb-5 rounded-2xl shadow-2xl shadow-black/80 border border-white/20">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                  <img
                    src={discoverMurcia.polaroids[1].image}
                    alt="Murcia Golf Courses"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Sticker Tape Badge */}
                <div className="mt-3 text-center">
                  <span className="inline-block bg-[#080C14] text-white font-mono font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded border-b-2 border-[#00D26A]">
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
