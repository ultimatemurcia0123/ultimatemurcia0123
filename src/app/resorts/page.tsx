import React from 'react';
import { RESORTS_DATA } from '@/data/resorts';
import ResortCard from '@/components/ResortCard';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/data/images';
import { Flag, Waves, Sun } from 'lucide-react';

export default function ResortsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* 1. Page Hero with Mascot & Marker Sticker */}
      <PageHero
        eyebrow="COSTA CÁLIDA LIVING"
        title="MURCIA GOLF RESORTS"
        highlight="& AREA GUIDES."
        description="Murcia is blessed with over 300 days of sunshine each year, two warm seas (the Mediterranean and Mar Menor lagoon), and Europe’s premier championship golf communities designed by Jack Nicklaus. Explore each resort’s atmosphere, amenities, and properties below."
        image={IMAGES.resorts.santaRosalia}
        mascot="point"
        sticker={['Fore!', 'Golf & sun']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
              <Flag className="w-6 h-6 text-[#00D26A]" />
            </div>
            <div>
              <h3 className="display-title text-lg font-bold text-slate-950 uppercase tracking-tight">Nicklaus Golf Trail</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                6 championship courses located within minutes of each other across the Murcia golf valley.
              </p>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
              <Waves className="w-6 h-6 text-[#00D26A]" />
            </div>
            <div>
              <h3 className="display-title text-lg font-bold text-slate-950 uppercase tracking-tight">Crystal Lagoon Resort</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                Santa Rosalía Lake &amp; Life Resort features Europe’s largest artificial turquoise crystal lagoon.
              </p>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
              <Sun className="w-6 h-6 text-[#00D26A]" />
            </div>
            <div>
              <h3 className="display-title text-lg font-bold text-slate-950 uppercase tracking-tight">International Airports</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                Corvera Murcia Airport (RMU) and Alicante-Elche (ALC) with daily flights across the UK &amp; Europe.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-10 text-center sm:text-left">
          <span className="eyebrow block mb-2">COMMUNITY DIRECTORY</span>
          <h2 className="display-title text-3xl sm:text-5xl text-slate-950 uppercase">
            All Murcia Resort Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Click any resort below to see full guides, photo galleries, and properties for sale.
          </p>
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
