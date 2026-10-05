'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Maximize2, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(property.price);

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to inquire about "${property.title}" (Ref: ${property.referenceNumber}) listed at ${formattedPrice}. Could you share more details or arrange a viewing?`
  );

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={property.images[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {property.status === 'newly_listed' && (
            <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
              Newly Listed
            </span>
          )}
          {property.status === 'under_offer' && (
            <span className="bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
              Under Offer
            </span>
          )}
          {property.hasPrivatePool && (
            <span className="bg-[#0b1a2f]/90 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded backdrop-blur-sm shadow-sm">
              Private Pool
            </span>
          )}
        </div>

        {/* Reference Number */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
          {property.referenceNumber}
        </div>

        {/* Property Type Badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm">
          {property.type}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Price */}
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-serif text-2xl font-bold text-[#0b1a2f]">
              {formattedPrice}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Costa Cálida
            </span>
          </div>

          {/* Location & Title */}
          <div className="flex items-center gap-1.5 text-xs text-amber-700 font-medium mb-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{property.resortName}</span>
          </div>

          <h3 className="font-serif text-base font-semibold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1 mb-3">
            <Link href={`/properties/${property.id}`}>
              {property.title}
            </Link>
          </h3>

          {/* Specs Ribbon */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-slate-600 text-xs mb-4">
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-slate-400" />
              <span><strong>{property.bedrooms}</strong> Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-slate-400" />
              <span><strong>{property.bathrooms}</strong> Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4 text-slate-400" />
              <span><strong>{property.buildAreaSqm}</strong> m²</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center justify-center gap-1.5 bg-[#0b1a2f] hover:bg-[#132742] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
          </Link>

          <a
            href={`https://wa.me/34617633040?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
