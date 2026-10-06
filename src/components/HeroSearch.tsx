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
  Gem,
  Sun,
  ShieldCheck,
  ChevronDown,
  X,
} from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import { SITE_CONTENT } from '@/data/site-content';
import { IMAGES } from '@/data/images';
import LocalPalmIcon from '@/components/LocalPalmIcon';

const PILLAR_ICONS = {
  palm: LocalPalmIcon,
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
    <label className="group relative flex items-center gap-3 rounded-xl border border-white/25 bg-black/15 px-4 py-2 hover:border-[#00F34A]/60 focus-within:border-[#00F34A] focus-within:ring-2 focus-within:ring-[#00F34A]/25 transition-all cursor-pointer">
      <Icon className="w-5 h-5 text-slate-300 group-hover:text-[#00F34A] shrink-0 transition-colors" />
      <span className="flex-1 min-w-0">
        <span className="block text-[10px] leading-4 font-medium text-white/75">{label}</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-xs leading-4 font-medium text-white focus:outline-none cursor-pointer appearance-none pr-5"
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
    if (activeTab === 'Rent') params.set('kind', 'rental');
    if (activeTab === 'New Builds') params.set('newBuild', 'true');
    router.push(`/properties?${params.toString()}`);
  };

  const { hero } = SITE_CONTENT;
  const optionClass = 'bg-[#080808] text-white';

  return (
    <section className="home-hero relative text-white overflow-hidden">
      <div className="home-hero-stage">
        <picture>
          <source media="(min-width: 1100px)" srcSet="/images/hero-reference-v2.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.hero.garden} alt="Mediterranean villa, pool and tropical garden overlooking the coast" className="home-hero-scene" width={1774} height={887} fetchPriority="high" />
        </picture>
        {/* Wide layouts position the character independently of the scenery. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mascot/mascot-point-v2.webp" alt="Sunny pointing toward a brighter tomorrow" className="home-hero-mascot" width={1108} height={1421} />
        <div className="home-hero-shade" />
        {/* Generated reference lettering includes its own brush accents and slant. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-lettering hero-lettering-life" src="/images/life-murcia-brush-v3.webp" alt="Life in Murcia" width={600} height={636} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-lettering hero-lettering-sun" src="/images/sun-golf-brush-v3.webp" alt="Sun. Golf. Sea. A brighter tomorrow." width={600} height={900} />
        <div className="home-hero-copy">
          <div className="eyebrow">{hero.badgeTop}</div>
          <h1 className="display-title">
            <span className="block">{hero.headlinePart1}</span>
            <span className="block text-[#00F34A]">{hero.headlinePart2}</span>
          </h1>
          <p>Exceptional properties. A brighter lifestyle.<br />We help you buy or sell in Murcia and Costa Cálida.</p>
          <div className="flex justify-center mt-3.5">
            <Link href={hero.primaryCtaLink} className="home-primary-button">
              {hero.primaryCtaText}<ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="home-hero-tools relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search card with tabs */}
        <div className="home-search">
          <div className="inline-flex items-center gap-1 rounded-t-2xl bg-[#050505]/95 backdrop-blur-xl border border-b-0 border-slate-700/60 px-3 pt-2 pb-1">
            {hero.tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab as Tab)}
                  className={`text-xs font-semibold px-6 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#00F34A] text-slate-950 shadow-[0_6px_20px_-6px_rgba(0,243,74,0.9)]'
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
            className="rounded-2xl rounded-tl-none bg-[#050505]/95 backdrop-blur-xl border border-slate-700/60 p-3 shadow-2xl shadow-black/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3"
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
              <option value="villa" className={optionClass}>Villa</option>
              <option value="semi-detached" className={optionClass}>Semi-detached</option>
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
              className="group h-full min-h-[46px] rounded-2xl bg-[#00F34A] hover:bg-[#00D43E] text-slate-950 font-bold text-sm px-6 flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_-10px_rgba(0,243,74,0.9)]"
            >
              Search
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Value pillars */}
        <div className="home-benefits">
          {hero.valuePillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.iconType];
            return (
              <div key={pillar.title} className="home-benefit">
                <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-[#00F34A] shrink-0" strokeWidth={1.6} />
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white">{pillar.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-300">{pillar.subtitle}</p>
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
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[#00F34A]/40 shadow-2xl" onClick={(e) => e.stopPropagation()}>
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
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#00F34A] hover:text-slate-950 transition-colors"
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
