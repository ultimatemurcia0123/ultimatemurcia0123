'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Heart } from 'lucide-react';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
  imageSrc?: string;
}

export default function PropertyCard({ property, imageSrc }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
      {/* Top Image with Badges */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <img
          src={imageSrc || property.images[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top-Left: Neon Green FOR SALE Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="bg-[#00F34A] text-slate-950 font-black text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
            FOR SALE
          </span>
        </div>

        {/* Top-Right: Heart/Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsFavorited(!isFavorited);
          }}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform z-10"
          aria-label="Save Property"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorited ? 'fill-rose-500 text-rose-500' : 'text-white'
            }`}
          />
        </button>
      </div>

      {/* Card Content (Clean Modern Minimalist) */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Price Row with Circular Arrow Button */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-2xl font-black tracking-tight text-slate-950">
              {formattedPrice}
            </span>

            <Link
              href={`/properties/${property.id}`}
              className="w-9 h-9 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#00F34A] hover:border-[#00F34A] text-slate-800 hover:text-slate-950 flex items-center justify-center transition-all shadow-sm group-hover:bg-[#00F34A] group-hover:border-[#00F34A]"
              aria-label={`View ${property.title}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Location Row */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{property.resortName}</span>
          </div>

          {/* Specs Ribbon: Bed | Bath | m² */}
          <div className="flex items-center gap-5 pt-1 text-slate-600 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-slate-400" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-slate-400" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4 text-slate-400" />
              <span>{property.buildAreaSqm} m²</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
