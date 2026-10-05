import React from 'react';
import Link from 'next/link';
import { RESORTS_DATA } from '@/data/resorts';
import ResortCard from '@/components/ResortCard';
import { Flag, Waves, Sun, Sparkles } from 'lucide-react';

export default function ResortsPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Costa Cálida Living
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mb-4">
            Murcia Golf Resorts & Area Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Murcia is blessed with over 300 days of sunshine each year, two warm seas (the Mediterranean and
            the Mar Menor salt lagoon), and some of Europe’s premier championship golf communities designed
            by Jack Nicklaus. Explore each resort’s atmosphere, amenities, and properties below.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Flag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base">Nicklaus Golf Trail</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                6 championship courses located within minutes of each other across the Murcia golf valley.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base">Crystal Lagoon Resort</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Santa Rosalía Lake & Life Resort features Europe’s largest artificial turquoise crystal lagoon.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base">International Airports</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Corvera Murcia Airport (RMU) and Alicante-Elche (ALC) with daily flights across the UK & Europe.
              </p>
            </div>
          </div>
        </div>

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESORTS_DATA.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
      </div>
    </div>
  );
}
