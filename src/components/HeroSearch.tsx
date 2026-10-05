'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Home, Bed, Euro, CheckCircle2, ArrowRight } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';

export default function HeroSearch() {
  const router = useRouter();
  const [resort, setResort] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (resort) params.set('resort', resort);
    if (propertyType) params.set('type', propertyType);
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (maxPrice) params.set('maxPrice', maxPrice);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative bg-[#09182b] text-white overflow-hidden">
      {/* Background Photography with Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Spanish Villa in Costa Calida"
          className="w-full h-full object-cover object-center brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09182b] via-[#09182b]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09182b]/80 via-transparent to-[#09182b]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-28 md:pb-36">
        {/* Headline Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Costa Cálida • Spain Property Specialists
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Find Your Dream Home in the Spanish Sun.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            Specializing in exclusive golf resort villas, crystal lagoon residences, and holiday
            apartments across Murcia. Full British & European aftersales, legal assistance, and 0% buyer fees.
          </p>
        </div>

        {/* Floating Property Search Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-slate-200/90 text-slate-800">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Field 1: Resort / Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                Resort / Area
              </label>
              <select
                value={resort}
                onChange={(e) => setResort(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">All Murcia Resorts</option>
                {RESORTS_DATA.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-amber-600" />
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">All Types</option>
                <option value="villa">Detached Villa</option>
                <option value="apartment">Apartment</option>
                <option value="penthouse">Penthouse / Solarium</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            {/* Field 3: Bedrooms */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-amber-600" />
                Min Bedrooms
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">Any Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            {/* Field 4: Max Price */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Euro className="w-3.5 h-3.5 text-amber-600" />
                Budget Max
              </label>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">Any Price</option>
                <option value="150000">Up to €150,000</option>
                <option value="250000">Up to €250,000</option>
                <option value="350000">Up to €350,000</option>
                <option value="500000">Up to €500,000</option>
                <option value="750000">Up to €750,000</option>
              </select>
            </div>

            {/* Submit Action */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-sm"
              >
                <Search className="w-4 h-4" />
                <span>Find Properties</span>
              </button>
            </div>
          </form>
        </div>

        {/* Key Trust Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>300+ Days of Sunshine</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>15+ Championship Golf Resorts</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>0% Buyer Commission</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>AIPP Approved & Insured</span>
          </div>
        </div>
      </div>
    </div>
  );
}
