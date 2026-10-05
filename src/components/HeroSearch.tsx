'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  MapPin,
  Home,
  BedDouble,
  Euro,
  ArrowRight,
  Play,
  Palmtree,
  Gem,
  Sun,
  ShieldCheck,
  ChevronDown,
  X,
} from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import { SITE_CONTENT } from '@/data/site-content';
import { IMAGES } from '@/data/images';
import Mascot from '@/components/Mascot';
import { MarkerText, BurstLines, BrushStroke } from '@/components/decor/Brush';

const PILLAR_ICONS = {
  palm: Palmtree,
  diamond: Gem,
  sun: Sun,
  shield: ShieldCheck,
} as const;

type Tab = 'Buy' | 'Rent' | 'New Builds';

function SearchField({
  icon: Icon,
  label,
  value,
  onChange,
  children,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="group relative flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-[#0B111D] px-4 py-3 hover:border-[#00D26A]/60 focus-within:border-[#00D26A] focus-within:ring-2 focus-within:ring-[#00D26A]/25 transition-all cursor-pointer">
      <Icon className="w-5 h-5 text-slate-300 group-hover:text-[#00D26A] shrink-0 transition-colors" />
      <span className="flex-1 min-w-0">
        <span className="block text-[11px] font-semibold text-slate-400">{label}</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer appearance-none pr-5"
        >
          {children}
        </select>
      </span>
      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
    </label>
  );
}

export default function HeroSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('Buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [videoOpen, setVideoOpen] = useState(false);

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
  const optionClass = 'bg-[#0B111D] text-white';

  return (
    <section className="relative bg-[#070B12] text-white overflow-hidden">
      {/* Background photo + atmospheric overlays */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.hero.villa}
          alt="Luxury villa with infinity pool at dusk in Murcia"
          className="w-full h-full object-cover object-center scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#060A12]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,10,18,0.55)_0%,rgba(6,10,18,0.1)_55%,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080C14] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#080C14] via-[#080C14]/85 to-transparent" />
      </div>

      {/* Left marker sticker: LIFE IN MURCIA */}
      <div className="hidden md:block absolute left-6 lg:left-12 top-16 z-20 -rotate-12 animate-fade-up">
        <MarkerText lines={hero.stickerLife.split(' ')} className="text-3xl lg:text-5xl" />
      </div>

      {/* Right: mascot + sun/golf/sea sticker */}
      <div className="hidden lg:block absolute right-0 top-6 bottom-[42%] w-[34%] max-w-[520px] z-20 pointer-events-none">
        <div className="absolute left-0 top-6 -rotate-[10deg] z-10 animate-wiggle origin-bottom-left">
          <BurstLines className="absolute -left-12 -top-10 w-16 h-16" />
          <div className="font-marker uppercase text-white text-2xl xl:text-[2rem] leading-[1.05] drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {hero.stickerSunSeaGolf.split('|').map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </div>
          <BrushStroke className="w-44 h-3 mt-1" />
          <BurstLines className="absolute -right-10 bottom-2 w-14 h-14 rotate-180" />
        </div>
        <Mascot
          pose="point"
          priority
          className="absolute right-0 top-0 h-full w-auto max-w-none object-contain object-right-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-10">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <div className="eyebrow mb-5">{hero.badgeTop}</div>
          <h1 className="display-title text-[4.2rem] leading-[0.85] sm:text-8xl lg:text-[9.5rem]">
            <span className="block text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]">
              {hero.headlinePart1}
            </span>
            <span className="block text-[#00D26A] text-glow -mt-1">{hero.headlinePart2}</span>
          </h1>
          <p className="mt-7 text-base sm:text-xl text-slate-100 leading-relaxed max-w-xl mx-auto drop-shadow">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={hero.primaryCtaLink}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 shadow-[0_10px_40px_-10px_rgba(0,210,106,0.8)] transition-all hover:-translate-y-0.5"
            >
              {hero.primaryCtaText}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border-2 border-white/80 hover:border-[#00D26A] bg-black/20 backdrop-blur-md text-white font-semibold text-sm sm:text-base pl-2 pr-6 py-2 transition-all"
            >
              <span className="w-9 h-9 rounded-full border-2 border-white/80 group-hover:border-[#00D26A] group-hover:bg-[#00D26A] flex items-center justify-center transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5 group-hover:text-slate-950" />
              </span>
              {hero.secondaryCtaText}
            </button>
          </div>
        </div>

        {/* Search card with tabs */}
        <div className="mt-14 lg:mt-20 animate-fade-up [animation-delay:150ms]">
          <div className="inline-flex items-center gap-1 rounded-t-2xl bg-[#0D1424]/95 backdrop-blur-xl border border-b-0 border-slate-700/60 px-3 pt-3 pb-2">
            {hero.tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab as Tab)}
                  className={`text-sm font-semibold px-6 py-2 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#00D26A] text-slate-950 shadow-[0_6px_20px_-6px_rgba(0,210,106,0.9)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <form
            onSubmit={handleSearch}
            className="rounded-3xl rounded-tl-none bg-[#0D1424]/95 backdrop-blur-xl border border-slate-700/60 p-4 sm:p-5 shadow-2xl shadow-black/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3"
          >
            <SearchField icon={MapPin} label="Location" value={location} onChange={setLocation}>
              <option value="" className={optionClass}>Any area</option>
              {RESORTS_DATA.map((r) => (
                <option key={r.id} value={r.id} className={optionClass}>
                  {r.name}
                </option>
              ))}
              <option value="los-alcazares" className={optionClass}>Los Alcázares</option>
              <option value="roda-golf" className={optionClass}>Roda Golf Resort</option>
              <option value="altaona-golf" className={optionClass}>Altaona Golf Resort</option>
            </SearchField>
            <SearchField icon={Home} label="Property type" value={propertyType} onChange={setPropertyType}>
              <option value="" className={optionClass}>Any type</option>
              <option value="villa" className={optionClass}>Detached villa</option>
              <option value="apartment" className={optionClass}>Apartment</option>
              <option value="penthouse" className={optionClass}>Penthouse</option>
              <option value="townhouse" className={optionClass}>Townhouse</option>
            </SearchField>
            <SearchField icon={BedDouble} label="Bedrooms" value={bedrooms} onChange={setBedrooms}>
              <option value="" className={optionClass}>Any</option>
              <option value="1" className={optionClass}>1+ bedrooms</option>
              <option value="2" className={optionClass}>2+ bedrooms</option>
              <option value="3" className={optionClass}>3+ bedrooms</option>
              <option value="4" className={optionClass}>4+ bedrooms</option>
            </SearchField>
            <SearchField icon={Euro} label="Price range" value={priceRange} onChange={setPriceRange}>
              <option value="" className={optionClass}>Any</option>
              <option value="150000" className={optionClass}>Up to €150,000</option>
              <option value="250000" className={optionClass}>Up to €250,000</option>
              <option value="350000" className={optionClass}>Up to €350,000</option>
              <option value="500000" className={optionClass}>Up to €500,000</option>
              <option value="750000" className={optionClass}>Up to €750,000</option>
            </SearchField>
            <button
              type="submit"
              className="group h-full min-h-[58px] rounded-2xl bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-base px-8 flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_-10px_rgba(0,210,106,0.9)]"
            >
              Search
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Value pillars */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:divide-x divide-slate-700/60">
          {hero.valuePillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.iconType];
            return (
              <div key={pillar.title} className="flex items-center gap-4 lg:justify-center px-2">
                <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-[#00D26A] shrink-0" strokeWidth={1.6} />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400">{pillar.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Life in Murcia video"
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#00D26A]/40 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={hero.videoUrl}
              title="Life in Murcia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#00D26A] hover:text-slate-950 transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
