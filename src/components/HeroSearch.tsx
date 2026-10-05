'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Home,
  Bed,
  Euro,
  Search,
  ArrowRight,
  Play,
  Palmtree,
  Gem,
  Sun,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import { SITE_CONTENT } from '@/data/site-content';

export default function HeroSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'New Builds'>('Buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set('resort', location);
    if (propertyType) params.set('type', propertyType);
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (priceRange) params.set('maxPrice', priceRange);
    if (activeTab === 'New Builds') params.set('newBuild', 'true');

    router.push(`/properties?${params.toString()}`);
  };

  const { hero } = SITE_CONTENT;

  return (
    <div className="relative bg-[#070B12] text-white overflow-hidden">
      {/* Background Photography with Twilight Glow & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2200&q=85"
          alt="Luxury Spanish Villa in Murcia"
          className="w-full h-full object-cover object-center brightness-[0.38] contrast-105"
        />
        {/* Soft radial glow and gradient falloffs */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080C14]/80 via-transparent to-[#080C14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/90 via-[#080C14]/40 to-[#080C14]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24">
        {/* Top Badges & Stickers */}
        <div className="relative flex items-center justify-between mb-4">
          {/* Angled Sticker Tape Badge: LIFE IN MURCIA */}
          <div className="inline-block transform -rotate-6 shadow-xl">
            <span className="bg-white text-slate-950 font-black text-[11px] sm:text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-sm border-b-4 border-[#00D26A] shadow-md inline-flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
              {hero.stickerLife}
            </span>
          </div>

          {/* Right Floating Badge / Sticker: SUN GOLF SEA */}
          <div className="hidden md:flex items-center gap-2 transform rotate-3">
            <div className="bg-[#0D1424]/90 border border-[#00D26A]/40 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00D26A] animate-ping" />
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#00D26A]">
                  SUN • GOLF • SEA
                </div>
                <div className="text-[11px] font-bold text-white tracking-tight">
                  A BRIGHTER TOMORROW
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Headline Section */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#00D26A] uppercase mb-3">
            {hero.badgeTop}
          </div>

          {/* Huge Slanted Punchy Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.98] mb-5 italic">
            <span className="text-white block">{hero.headlinePart1}</span>
            <span className="text-[#00D26A] block">{hero.headlinePart2}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hero.primaryCtaLink}
              className="bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all shadow-lg shadow-[#00D26A]/25 flex items-center gap-2 group"
            >
              <span>{hero.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#discover"
              className="bg-slate-900/60 hover:bg-slate-800/80 text-white font-bold text-xs sm:text-sm tracking-wider px-6 py-3.5 rounded-full border border-white/20 transition-all flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white text-white ml-0.5" />
              </div>
              <span>{hero.secondaryCtaText}</span>
            </Link>
          </div>
        </div>

        {/* Floating Property Search Box (Dark Card with Top Tabs) */}
        <div className="bg-[#0D1424]/95 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/80">
          {/* Tabs: Buy / Rent / New Builds */}
          <div className="flex items-center gap-2 mb-5">
            {hero.tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-xs font-bold px-5 py-2 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#00D26A] text-slate-950 shadow-md shadow-[#00D26A]/20'
                      : 'text-slate-400 hover:text-white bg-slate-800/50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Form Fields: Location | Property Type | Bedrooms | Price Range | Search Button */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
            {/* Field 1: Location */}
            <div className="bg-[#121B2F] border border-slate-700/60 rounded-2xl p-3 relative flex items-center gap-3">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Location
                </span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer appearance-none pr-4"
                >
                  <option value="" className="bg-[#121B2F] text-white">Any area</option>
                  {RESORTS_DATA.map((r) => (
                    <option key={r.id} value={r.id} className="bg-[#121B2F] text-white">
                      {r.name}
                    </option>
                  ))}
                  <option value="Los Alcázares" className="bg-[#121B2F] text-white">Los Alcázares</option>
                  <option value="Roda Golf" className="bg-[#121B2F] text-white">Roda Golf Resort</option>
                  <option value="Altaona Golf" className="bg-[#121B2F] text-white">Altaona Golf Resort</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            {/* Field 2: Property Type */}
            <div className="bg-[#121B2F] border border-slate-700/60 rounded-2xl p-3 relative flex items-center gap-3">
              <Home className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Property type
                </span>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer appearance-none pr-4"
                >
                  <option value="" className="bg-[#121B2F] text-white">Any type</option>
                  <option value="villa" className="bg-[#121B2F] text-white">Detached Villa</option>
                  <option value="apartment" className="bg-[#121B2F] text-white">Apartment</option>
                  <option value="penthouse" className="bg-[#121B2F] text-white">Penthouse</option>
                  <option value="townhouse" className="bg-[#121B2F] text-white">Townhouse</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            {/* Field 3: Bedrooms */}
            <div className="bg-[#121B2F] border border-slate-700/60 rounded-2xl p-3 relative flex items-center gap-3">
              <Bed className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Bedrooms
                </span>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer appearance-none pr-4"
                >
                  <option value="" className="bg-[#121B2F] text-white">Any</option>
                  <option value="1" className="bg-[#121B2F] text-white">1+ Bedrooms</option>
                  <option value="2" className="bg-[#121B2F] text-white">2+ Bedrooms</option>
                  <option value="3" className="bg-[#121B2F] text-white">3+ Bedrooms</option>
                  <option value="4" className="bg-[#121B2F] text-white">4+ Bedrooms</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            {/* Field 4: Price range */}
            <div className="bg-[#121B2F] border border-slate-700/60 rounded-2xl p-3 relative flex items-center gap-3">
              <Euro className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Price range
                </span>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer appearance-none pr-4"
                >
                  <option value="" className="bg-[#121B2F] text-white">Any</option>
                  <option value="150000" className="bg-[#121B2F] text-white">Up to €150,000</option>
                  <option value="250000" className="bg-[#121B2F] text-white">Up to €250,000</option>
                  <option value="350000" className="bg-[#121B2F] text-white">Up to €350,000</option>
                  <option value="500000" className="bg-[#121B2F] text-white">Up to €500,000</option>
                  <option value="750000" className="bg-[#121B2F] text-white">Up to €750,000</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full h-[54px] bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00D26A]/25"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* 4 Value Propositions Strip (exact match from mockup) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-4 border-t border-slate-800/60">
          {/* 1. Local experts */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00D26A]/10 flex items-center justify-center shrink-0">
              <Palmtree className="w-5 h-5 text-[#00D26A]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Local experts</h4>
              <p className="text-[11px] text-slate-400">Based in Murcia</p>
            </div>
          </div>

          {/* 2. Handpicked properties */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00D26A]/10 flex items-center justify-center shrink-0">
              <Gem className="w-5 h-5 text-[#00D26A]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Handpicked properties</h4>
              <p className="text-[11px] text-slate-400">Quality homes, prime locations</p>
            </div>
          </div>

          {/* 3. Incredible lifestyle */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00D26A]/10 flex items-center justify-center shrink-0">
              <Sun className="w-5 h-5 text-[#00D26A]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Incredible lifestyle</h4>
              <p className="text-[11px] text-slate-400">Sun, sea, golf and more</p>
            </div>
          </div>

          {/* 4. Full support */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00D26A]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#00D26A]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Full support</h4>
              <p className="text-[11px] text-slate-400">From start to finish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
