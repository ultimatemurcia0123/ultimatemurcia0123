'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, RotateCcw, BedDouble, Euro, Home, MapPin } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/data/images';

function PropertiesContent() {
  const searchParams = useSearchParams();

  // Initial state derived from search query params if provided from HeroSearch
  const initialResort = searchParams.get('resort') || '';
  const initialType = searchParams.get('type') || '';
  const initialBedrooms = searchParams.get('bedrooms') || '';
  const initialMaxPrice = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : 600000;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResort, setSelectedResort] = useState(initialResort);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedBedrooms, setSelectedBedrooms] = useState(initialBedrooms);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);
  const [hasPoolOnly, setHasPoolOnly] = useState(false);
  const [golfViewOnly, setGolfViewOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest' | 'beds-desc'>('newest');

  // Filter properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => {
      // Query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesRef = p.referenceNumber.toLowerCase().includes(query);
        const matchesResort = p.resortName.toLowerCase().includes(query);
        if (!matchesTitle && !matchesRef && !matchesResort) return false;
      }

      // Resort filter
      if (selectedResort && p.resortId !== selectedResort) {
        return false;
      }

      // Type filter
      if (selectedType && p.type !== selectedType) {
        return false;
      }

      // Bedrooms filter
      if (selectedBedrooms && p.bedrooms < Number(selectedBedrooms)) {
        return false;
      }

      // Max price filter
      if (p.price > maxPrice) {
        return false;
      }

      // Pool filter
      if (hasPoolOnly && !p.hasPrivatePool && !p.hasCommunalPool) {
        return false;
      }

      // Golf view filter
      if (golfViewOnly && !p.hasGolfView) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'beds-desc') return b.bedrooms - a.bedrooms;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [
    searchQuery,
    selectedResort,
    selectedType,
    selectedBedrooms,
    maxPrice,
    hasPoolOnly,
    golfViewOnly,
    sortBy,
  ]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedResort('');
    setSelectedType('');
    setSelectedBedrooms('');
    setMaxPrice(600000);
    setHasPoolOnly(false);
    setGolfViewOnly(false);
    setSortBy('newest');
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="COSTA CÁLIDA & GOLF SPECIALISTS"
        title="MURCIA PROPERTIES"
        highlight="FOR SALE."
        description="Browse our hand-picked selection of golf resort villas, lagoon residences, and coastal apartments. Contact Christine directly on WhatsApp for full floor plans, videos, and private viewings."
        image={IMAGES.properties.p3}
        mascot="point"
        sticker={['Handpicked', 'Villas & more']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar & Controls (Modern Brand Card) */}
        <div className="bg-[#080C14] text-white rounded-3xl shadow-2xl border border-slate-800 p-6 sm:p-8 mb-12">
          {/* Top Row: Search & Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Keyword / Reference
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Roda Golf, UM-RG, Pool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#121B2F] border border-slate-700/80 rounded-2xl py-3 pl-10 pr-4 text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#00D26A]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Resort Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Resort / Area
              </label>
              <select
                value={selectedResort}
                onChange={(e) => setSelectedResort(e.target.value)}
                className="w-full bg-[#121B2F] border border-slate-700/80 rounded-2xl py-3 px-4 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#00D26A] cursor-pointer"
              >
                <option value="" className="bg-[#121B2F]">All Murcia Resorts</option>
                {RESORTS_DATA.map((r) => (
                  <option key={r.id} value={r.id} className="bg-[#121B2F]">
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#121B2F] border border-slate-700/80 rounded-2xl py-3 px-4 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#00D26A] cursor-pointer"
              >
                <option value="" className="bg-[#121B2F]">All Property Types</option>
                <option value="villa" className="bg-[#121B2F]">Detached Villa</option>
                <option value="apartment" className="bg-[#121B2F]">Apartment</option>
                <option value="penthouse" className="bg-[#121B2F]">Penthouse / Solarium</option>
                <option value="townhouse" className="bg-[#121B2F]">Townhouse</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Min Bedrooms
              </label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full bg-[#121B2F] border border-slate-700/80 rounded-2xl py-3 px-4 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#00D26A] cursor-pointer"
              >
                <option value="" className="bg-[#121B2F]">Any Bedrooms</option>
                <option value="2" className="bg-[#121B2F]">2+ Bedrooms</option>
                <option value="3" className="bg-[#121B2F]">3+ Bedrooms</option>
                <option value="4" className="bg-[#121B2F]">4+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Price Slider & Checkbox Toggles */}
          <div className="pt-5 border-t border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Price Slider */}
            <div className="flex-1 max-w-md">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold text-slate-300">Max Budget:</span>
                <span className="font-black text-sm text-[#00D26A]">
                  €{maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="800000"
                step="25000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#00D26A] bg-slate-700 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Feature Toggles */}
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300 select-none">
                <input
                  type="checkbox"
                  checked={hasPoolOnly}
                  onChange={(e) => setHasPoolOnly(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-800 text-[#00D26A] focus:ring-[#00D26A] w-4 h-4 accent-[#00D26A]"
                />
                <span>Must Have Pool</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300 select-none">
                <input
                  type="checkbox"
                  checked={golfViewOnly}
                  onChange={(e) => setGolfViewOnly(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-800 text-[#00D26A] focus:ring-[#00D26A] w-4 h-4 accent-[#00D26A]"
                />
                <span>Golf Course Views</span>
              </label>

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors ml-auto sm:ml-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Header: Count & Sorting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="display-title text-2xl sm:text-3xl font-black text-slate-950 uppercase">
              {filteredProperties.length} Properties Available
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Showing matching real estate in Murcia and Costa Cálida
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] cursor-pointer shadow-sm"
            >
              <option value="newest">Recently Listed</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="beds-desc">Most Bedrooms</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto my-12">
            <SlidersHorizontal className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="display-title text-2xl font-bold text-slate-950 mb-2">
              No Matching Properties Found
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
              Try broadening your budget or resetting some filters. You can also message Christine directly on WhatsApp to see off-market and upcoming listings.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
