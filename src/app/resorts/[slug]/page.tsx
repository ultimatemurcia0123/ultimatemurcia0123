'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Flag, Waves, Plane, CheckCircle, MessageSquare, ChevronLeft } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import { PROPERTIES_DATA } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';

export default function ResortDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const resort = RESORTS_DATA.find((r) => r.slug === slug || r.id === slug);

  if (!resort) {
    return (
      <div className="py-24 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="display-title text-3xl text-slate-900">Resort Not Found</h1>
        <p className="text-sm text-slate-500 mt-2">The requested resort guide does not exist.</p>
        <Link href="/resorts" className="mt-6 inline-flex items-center gap-2 bg-[#00D26A] text-slate-950 font-bold text-xs uppercase px-6 py-3 rounded-full">
          <ChevronLeft className="w-4 h-4" /> View All Resorts
        </Link>
      </div>
    );
  }

  const resortProperties = PROPERTIES_DATA.filter((p) => p.resortId === resort.id);

  const whatsappMessage = encodeURIComponent(
    `Hello Christine, I would like more information and property availability for ${resort.name}. Could you advise?`
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Header (Dark Luxury matching brand) */}
      <div className="relative bg-[#080C14] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.heroImage}
            alt={resort.name}
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/70 to-[#080C14]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#00D26A] uppercase tracking-wider mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to All Resorts
          </Link>

          <span className="eyebrow block mb-3">
            {resort.location}
          </span>
          <h1 className="display-title text-4xl sm:text-6xl lg:text-7xl text-white max-w-3xl leading-[0.92]">
            {resort.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-4 max-w-2xl font-normal leading-relaxed">
            {resort.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-slate-700/60 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center">
                <Flag className="w-4 h-4 text-[#00D26A]" />
              </div>
              <span>Golf Course: <strong className="text-white">{resort.golfCourse}</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center">
                <Waves className="w-4 h-4 text-[#00D26A]" />
              </div>
              <span>Distance to Sea: <strong className="text-white">{resort.beachDistanceKm} km</strong></span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center">
                <Plane className="w-4 h-4 text-[#00D26A]" />
              </div>
              <span>Murcia Airport: <strong className="text-white">{resort.airportDistanceKm} km</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Full Resort Guide */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
              <span className="eyebrow block mb-2">COMMUNITY OVERVIEW</span>
              <h2 className="display-title text-2xl sm:text-4xl font-bold text-slate-950 mb-4">
                About {resort.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {resort.fullDesc}
              </p>

              <h3 className="display-title text-xl sm:text-2xl font-bold text-slate-950 mt-10 mb-5">
                Resort Highlights &amp; Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resort.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#E6FBF0] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#00D26A]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              {resort.gallery && resort.gallery.length > 0 && (
                <div className="mt-12 pt-10 border-t border-slate-100">
                  <span className="eyebrow block mb-3">PHOTO GALLERY</span>
                  <h3 className="display-title text-xl sm:text-2xl font-bold text-slate-950 mb-6">
                    Inside the Community
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resort.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img}
                          alt={`${resort.name} photo ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Properties Available at this Resort */}
            <div>
              <div className="flex items-baseline justify-between mb-8">
                <div>
                  <span className="eyebrow block mb-1">AVAILABLE HOMES</span>
                  <h2 className="display-title text-2xl sm:text-4xl font-bold text-slate-950">
                    Properties For Sale in {resort.name}
                  </h2>
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-950 bg-[#00D26A] px-3.5 py-1.5 rounded-full">
                  {resortProperties.length} Available
                </span>
              </div>

              {resortProperties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {resortProperties.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center shadow-sm">
                  <p className="text-sm text-slate-600 mb-6">
                    We currently have private, off-market listings in {resort.name}.
                  </p>
                  <a
                    href={`https://wa.me/34617633040?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 text-xs font-black uppercase tracking-wider py-4 px-8 rounded-full shadow-[0_6px_25px_-5px_rgba(0,210,106,0.8)]"
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
            <div className="sticky top-24 bg-[#080C14] text-white p-8 rounded-3xl shadow-2xl border border-slate-800">
              <span className="eyebrow block mb-2">
                RESORT SPECIALIST
              </span>
              <h3 className="display-title text-2xl font-bold text-white mb-2">
                Considering {resort.name}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Our team can provide detailed resort community fee breakdowns, rental yield forecasts, and arrange VIP viewing appointments.
              </p>

              <a
                href={`https://wa.me/34617633040?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-black py-4 px-6 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all shadow-[0_6px_25px_-5px_rgba(0,210,106,0.8)] hover:-translate-y-0.5"
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
