import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-4">
            <div>
              <span className="text-xs font-black tracking-[0.25em] text-[#00F34A] uppercase block mb-2">
                {featuredPropertiesSection.badge}
              </span>
              <h2 className="home-help-title font-extrabold tracking-tight uppercase">
                {featuredPropertiesSection.title}
              </h2>
            </div>

            {/* Right: View all link & carousel buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href={featuredPropertiesSection.viewAllLink}
                className="text-xs font-medium text-slate-800 hover:text-[#00F34A] transition-colors flex items-center gap-1.5"
              >
                <span>{featuredPropertiesSection.viewAllText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>


            </div>
          </div>

          {/* 3 Top Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <p className="mt-3 text-xs leading-5 text-neutral-500">Selected listings. Please confirm current availability with the team.</p>
          <div className="text-center mt-6 sm:hidden">
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
