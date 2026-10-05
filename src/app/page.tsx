import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import PropertyCard from '@/components/PropertyCard';
import ResortCard from '@/components/ResortCard';
import DiscoverMurciaSection from '@/components/DiscoverMurciaSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';
import { SITE_CONTENT } from '@/data/site-content';

export default function HomePage() {
  const latestProperties = PROPERTIES_DATA.slice(0, 3);
  const featuredResorts = RESORTS_DATA.slice(0, 3);
  const { featuredPropertiesSection } = SITE_CONTENT;

  return (
    <div className="home-page">
      {/* 1. Hero & Real Estate Search Filter (Mockup Match) */}
      <HeroSearch />

      {/* 2. Featured Properties / Our Latest Properties (Mockup Match) */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-4">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-[#00F34A] uppercase block mb-2">
                {featuredPropertiesSection.badge}
              </span>
              <h2 className="display-title text-4xl sm:text-6xl text-slate-950">
                {featuredPropertiesSection.title}
              </h2>
            </div>

            {/* Right: View all link & carousel buttons */}
            <div className="flex items-center gap-4">
              <Link
                href={featuredPropertiesSection.viewAllLink}
                className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 hover:text-[#00F34A] transition-colors flex items-center gap-1.5"
              >
                <span>{featuredPropertiesSection.viewAllText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="hidden sm:flex items-center gap-2">
                <Link
                  href="/properties"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                  aria-label="Previous Properties"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Link>
                <Link
                  href="/properties"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                  aria-label="Next Properties"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Top Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} imageSrc={["/images/preview-villa.webp", "/images/preview-terrace.webp", "/images/preview-pool.webp"][index]} />
            ))}
          </div>

          <p className="mt-3 text-[11px] text-slate-500">Illustrative property imagery for this design preview.</p>
          <div className="text-center mt-12 sm:hidden">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full"
            >
              <span>View All Properties ({PROPERTIES_DATA.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Discover Murcia: Sun. Sea. Golf. A Brighter Tomorrow. (Mockup Match) */}
      <DiscoverMurciaSection />

      {/* 4. How We Help: Your Property In Expert Hands (Mockup Match) */}
      <HowWeHelpSection />

      {/* 5. Golf Resorts & Area Guides Showcase */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#00F34A] uppercase block mb-2">
              DISCOVER COSTA CÁLIDA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Explore Murcia’s World-Class Golf Resorts
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">
              From the crystal blue lagoon at Santa Rosalía to the manicured fairways of La Torre and El Valle,
              explore each resort community, amenities, and lifestyle before choosing your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResorts.map((resort) => (
              <ResortCard key={resort.id} resort={resort} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resorts"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800 hover:text-[#00F34A] transition-colors"
            >
              <span>View All Murcia Resort & Area Guides →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials & Client Reviews */}
      <TestimonialsSection />

      {/* 7. Seller CTA Banner */}
      <section className="py-16 bg-[#080C14] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#101725] rounded-3xl p-8 sm:p-12 border border-slate-700/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-black tracking-[0.25em] text-[#00F34A] uppercase">
                Are You Thinking of Selling?
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                List Your Property With Ultimate Murcia
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                We market directly to qualified buyers across the UK, Ireland, Netherlands, Belgium, and Scandinavia.
                Free valuation, high-definition photography, and professional legal guidance throughout the sale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact?intent=list-property"
                className="bg-[#00F34A] hover:bg-[#00D43E] text-slate-950 font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-full text-center transition-all shadow-md shadow-[#00F34A]/20"
              >
                Request Free Valuation
              </Link>
              <a
                href="https://wa.me/34617633040?text=Hello%20Ultimate%20Murcia%2C%20I%20would%20like%20to%20discuss%20listing%20my%20property%20for%20sale"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full text-center transition-all flex items-center justify-center gap-2"
              >
                <span>WhatsApp Christine</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
