'use client';

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Flag, Waves, Plane, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import { PROPERTIES_DATA } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';

export default function ResortDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const resort = RESORTS_DATA.find((r) => r.slug === slug || r.id === slug);

  if (!resort) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-serif font-bold text-slate-800">Resort Not Found</h1>
        <p className="text-sm text-slate-500 mt-2">The requested resort guide does not exist.</p>
        <Link href="/resorts" className="mt-4 inline-block text-xs font-semibold text-amber-700 underline">
          View All Resorts
        </Link>
      </div>
    );
  }

  const resortProperties = PROPERTIES_DATA.filter((p) => p.resortId === resort.id);

  const whatsappMessage = encodeURIComponent(
    `Hello Christine, I would like more information and property availability for ${resort.name}. Could you advise?`
  );

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-[#09182b] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={resort.heroImage}
            alt={resort.name}
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09182b] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-white uppercase tracking-wider mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Resorts
          </Link>

          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-2">
            {resort.location}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-3xl leading-tight">
            {resort.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-3 max-w-2xl font-light">
            {resort.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/20 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4 text-amber-400" />
              <span>Golf Course: <strong>{resort.golfCourse}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-400" />
              <span>Distance to Sea: <strong>{resort.beachDistanceKm} km</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-slate-300" />
              <span>Murcia Airport: <strong>{resort.airportDistanceKm} km</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Full Resort Guide */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                About {resort.name}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-light">
                {resort.fullDesc}
              </p>

              <h3 className="font-serif text-lg font-bold text-slate-900 mt-8 mb-4">
                Resort Highlights & Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resort.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Properties Available at this Resort */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">
                    Properties For Sale in {resort.name}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Showing available listings in this resort
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                  {resortProperties.length} Available
                </span>
              </div>

              {resortProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {resortProperties.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                  <p className="text-xs text-slate-600">
                    We currently have private off-market listings in {resort.name}.
                  </p>
                  <a
                    href={`https://wa.me/34617633040?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 px-4 rounded-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp for Secret Listings</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Resort Contact Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b1a2f] text-white p-6 rounded-2xl shadow-xl border border-amber-500/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Resort Specialist
              </span>
              <h3 className="font-serif text-lg font-bold text-white mt-1 mb-2">
                Considering {resort.name}?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Our team can provide detailed resort community fee breakdowns, rental yield forecasts, and floor plans.
              </p>

              <a
                href={`https://wa.me/34617633040?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with an Agent on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
