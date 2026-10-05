import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import PropertyCard from '@/components/PropertyCard';
import DiscoverMurciaSection from '@/components/DiscoverMurciaSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import { PROPERTIES_DATA } from '@/data/properties';
import { SITE_CONTENT } from '@/data/site-content';

export default function HomePage() {
  const latestProperties = PROPERTIES_DATA.slice(0, 3);
  const { featuredPropertiesSection } = SITE_CONTENT;

  return (
    <div className="home-page">
      {/* 1. Hero & Real Estate Search Filter (Mockup Match) */}
      <HeroSearch />

      {/* 2. Featured Properties / Our Latest Properties (Mockup Match) */}
      <section className="home-properties bg-white border-b border-slate-100">
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

    </div>
  );
}
