'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Tag, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';
import { IMAGES } from '@/data/images';

export default function HowWeHelpSection() {
  const { howWeHelp } = SITE_CONTENT;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <Home className="w-5 h-5 text-slate-900" />;
      case 'sell':
        return <Tag className="w-5 h-5 text-slate-900" />;
      case 'marketing':
        return <TrendingUp className="w-5 h-5 text-slate-900" />;
      case 'support':
        return <UserCheck className="w-5 h-5 text-slate-900" />;
      default:
        return <Home className="w-5 h-5 text-slate-900" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Title on Left, Angled Luxury Villa Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 relative">
          <div className="lg:col-span-7 space-y-5">
            <span className="eyebrow block">
              {howWeHelp.badge}
            </span>
            <h2 className="display-title text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[0.95]">
              {howWeHelp.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {howWeHelp.description}
            </p>

            <div className="pt-2">
              <Link
                href={howWeHelp.ctaLink}
                className="bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-[0_6px_25px_-5px_rgba(0,210,106,0.8)] inline-flex items-center gap-2 group hover:-translate-y-0.5"
              >
                <span>{howWeHelp.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right angled villa banner preview matching mockup */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.howWeHelp}
                alt="Contemporary Spanish Villa in Murcia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 4 Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWeHelp.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-[#00D26A]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Soft Mint Green Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] border border-[#00D26A]/20 flex items-center justify-center mb-5 group-hover:bg-[#00D26A] group-hover:text-slate-950 transition-colors">
                  {renderIcon(card.iconType)}
                </div>

                <h3 className="text-base font-black text-slate-950 uppercase tracking-tight mb-2">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
