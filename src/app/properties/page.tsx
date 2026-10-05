'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal, RotateCcw, Bed, Euro, Home, MapPin, Check } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { PROPERTIES_DATA } from '@/data/properties';
import { RESORTS_DATA } from '@/data/resorts';
import { PropertyType } from '@/types/property';

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
    <div className="bg-[#faf8f5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Costa Cálida Real Estate
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2">
            Properties For Sale in Murcia
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl">
            Browse our hand-picked selection of golf resort villas, lake residences, and holiday apartments.
            Contact us directly on WhatsApp for full floor plans, videos, and private viewings.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-5 mb-10">
          {/* Top Row: Search & Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Keyword / Reference
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Sierra Golf, UM-101, Pool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 pl-9 pr-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            {/* Resort Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Resort / Area
              </label>
              <select
                value={selectedResort}
                onChange={(e) => setSelectedResort(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">All Murcia Resorts</option>
                {RESORTS_DATA.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Property Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">All Property Types</option>
                <option value="villa">Detached Villa</option>
                <option value="apartment">Apartment</option>
                <option value="penthouse">Penthouse / Solarium</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Min Bedrooms
              </label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
              >
                <option value="">Any Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Price Slider & Checkbox Toggles */}
          <div className="pt-4 border-t border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Price Slider */}
            <div className="flex-1 max-w-md">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-slate-700">Max Budget:</span>
                <span className="font-serif font-bold text-base text-[#0b1a2f]">
                  €{maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="600000"
                step="25000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0b1a2f]"
              />
            </div>

            {/* Feature Checkboxes */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasPoolOnly}
                  onChange={(e) => setHasPoolOnly(e.target.checked)}
                  className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span className="text-slate-700 font-medium">Must Have Pool</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={golfViewOnly}
                  onChange={(e) => setGolfViewOnly(e.target.checked)}
                  className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 w-4 h-4"
                />
                <span className="text-slate-700 font-medium">Golf Course Views</span>
              </label>
            </div>

            {/* Reset Filters & Sorting */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-300 rounded-lg py-1.5 px-2.5 text-xs text-slate-800 font-medium focus:outline-none"
              >
                <option value="newest">Sort: Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="beds-desc">Most Bedrooms</option>
              </select>

              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 py-1.5 px-2 rounded hover:bg-slate-100 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="flex justify-between items-center mb-6 text-xs text-slate-500">
          <div>
            Showing <strong className="text-slate-900">{filteredProperties.length}</strong> of{' '}
            {PROPERTIES_DATA.length} properties
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
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Home className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-serif text-lg font-bold text-slate-800 mb-2">
              No Properties Match Your Search
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Try adjusting your price range or clearing filters to see more available villas and apartments.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#0b1a2f] text-amber-300 text-xs font-semibold py-2.5 px-5 rounded-lg hover:bg-[#132742] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading Murcia properties...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
