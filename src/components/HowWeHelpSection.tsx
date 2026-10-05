'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Tag, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

export default function HowWeHelpSection() {
  const { howWeHelp } = SITE_CONTENT;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'buy':
        return <Home className="w-5 h-5 text-emerald-700" />;
      case 'sell':
        return <Tag className="w-5 h-5 text-emerald-700" />;
      case 'marketing':
        return <TrendingUp className="w-5 h-5 text-emerald-700" />;
      case 'support':
        return <UserCheck className="w-5 h-5 text-emerald-700" />;
      default:
        return <Home className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid: Title on Left, Description & Button on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-black tracking-[0.25em] text-[#00D26A] uppercase block mb-2">
              {howWeHelp.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight leading-[1.05]">
              {howWeHelp.title}
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              {howWeHelp.description}
            </p>

            <Link
              href={howWeHelp.ctaLink}
              className="shrink-0 bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md shadow-[#00D26A]/20 inline-flex items-center gap-2 group"
            >
              <span>{howWeHelp.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Feature Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howWeHelp.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#00D26A]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Soft Mint Green Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
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
