import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Building2, ShieldCheck, PhoneCall } from 'lucide-react';
import HeroSearch from '@/components/HeroSearch';
import PropertyCard from '@/components/PropertyCard';
import ResortCard from '@/components/ResortCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';

export default function HomePage() {
  const featuredProperties = PROPERTIES_DATA.filter((p) => p.featured).slice(0, 6);
  const featuredResorts = RESORTS_DATA.slice(0, 6);

  return (
    <div>
      {/* 1. Hero & Real Estate Search Filter */}
      <HeroSearch />

      {/* 2. Featured & Newly Listed Properties */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Hand-Picked Resort Listings
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Featured Properties For Sale
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Explore newly listed villas, penthouses, and turnkey apartments across the Costa Cálida golf circuit.
              </p>
            </div>

            <Link
              href="/properties"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0b1a2f] hover:text-amber-700 transition-colors"
            >
              <span>View All Properties ({PROPERTIES_DATA.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <span>Browse All Listings in Murcia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Resort & Area Showcase */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Discover Costa Cálida
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Explore Murcia’s World-Class Golf Resorts
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From the crystal blue lagoon at Santa Rosalía to the manicured fairways of La Torre and El Valle,
              explore each resort community, amenities, and lifestyle before choosing your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResorts.map((resort) => (
              <ResortCard key={resort.id} resort={resort} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/resorts"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 hover:text-amber-900"
            >
              <span>View All Murcia Resort & Area Guides →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (AIPP & Licensed Real Estate Agent) */}
      <WhyChooseUs />

      {/* 5. Services & Referrals */}
      <ServicesSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Seller CTA: List Your Property */}
      <section className="py-16 bg-[#0b1a2f] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-[#11243d] to-[#162e4e] rounded-2xl p-8 sm:p-12 border border-amber-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Are You Thinking of Selling?
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                List Your Property For Sale With Ultimate Murcia
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                We market directly to qualified buyers across the UK, Ireland, Netherlands, Belgium, and Scandinavia.
                Free valuation, high-definition photography, and professional legal guidance throughout the sale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact?intent=list-property"
                className="bg-amber-400 hover:bg-amber-300 text-[#0b1a2f] font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg text-center transition-all shadow-md"
              >
                Request Free Valuation
              </Link>
              <a
                href="https://wa.me/34617633040?text=Hello%20Ultimate%20Murcia%2C%20I%20would%20like%20to%20discuss%20listing%20my%20property%20for%20sale"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-lg text-center transition-all flex items-center justify-center gap-2"
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
