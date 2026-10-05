import React from 'react';
import Link from 'next/link';
import { Flag, Waves, Plane, ArrowRight } from 'lucide-react';
import { Resort } from '@/types/property';

interface ResortCardProps {
  resort: Resort;
}

export default function ResortCard({ resort }: ResortCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={resort.heroImage}
          alt={resort.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
            {resort.location}
          </span>
          <h3 className="font-serif text-lg font-bold text-white mt-1 group-hover:text-amber-200 transition-colors">
            {resort.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {resort.shortDesc}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-slate-50 rounded-lg text-slate-700 text-xs mb-4">
            <div className="flex flex-col items-center text-center">
              <span className="flex items-center gap-1 text-slate-400 text-[10px]">
                <Flag className="w-3 h-3 text-amber-600" /> Golf
              </span>
              <strong className="text-slate-900 text-xs mt-0.5">{resort.golfHoles} Holes</strong>
            </div>

            <div className="flex flex-col items-center text-center border-x border-slate-200">
              <span className="flex items-center gap-1 text-slate-400 text-[10px]">
                <Waves className="w-3 h-3 text-cyan-600" /> Beach
              </span>
              <strong className="text-slate-900 text-xs mt-0.5">{resort.beachDistanceKm} km</strong>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="flex items-center gap-1 text-slate-400 text-[10px]">
                <Plane className="w-3 h-3 text-slate-500" /> Airport
              </span>
              <strong className="text-slate-900 text-xs mt-0.5">{resort.airportDistanceKm} km</strong>
            </div>
          </div>
        </div>

        <Link
          href={`/resorts/${resort.slug}`}
          className="inline-flex items-center justify-between text-xs font-semibold text-[#0b1a2f] hover:text-amber-700 py-1.5 transition-colors border-t border-slate-100 mt-2"
        >
          <span>Explore Resort Guide & Listings</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
