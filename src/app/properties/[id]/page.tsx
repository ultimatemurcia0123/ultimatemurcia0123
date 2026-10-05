'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Calendar,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  Share2,
  Calculator,
  ShieldCheck,
  Award,
  ChevronLeft,
} from 'lucide-react';
import { PROPERTIES_DATA } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';

export default function PropertyDetailPage() {
  const params = useParams();
  const propertyId = params?.id as string;
  const property = PROPERTIES_DATA.find((p) => p.id === propertyId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Mortgage Calculator State
  const [depositPercent, setDepositPercent] = useState(30);
  const [interestRate, setInterestRate] = useState(3.2);
  const [loanYears, setLoanYears] = useState(25);

  if (!property) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-serif font-bold text-slate-800">Property Not Found</h1>
        <p className="text-sm text-slate-500 mt-2">The listing you are looking for is no longer active.</p>
        <Link href="/properties" className="mt-4 inline-block text-xs font-semibold text-amber-700 underline">
          Return to All Properties
        </Link>
      </div>
    );
  }

  // Calculate monthly mortgage payment
  const loanAmount = property.price * (1 - depositPercent / 100);
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanYears * 12;
  const monthlyPayment = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(property.price);

  const whatsappMessage = encodeURIComponent(
    `Hello Christine, I am interested in viewing "${property.title}" (Ref: ${property.referenceNumber}) listed at ${formattedPrice}. When would be a good time to discuss?`
  );

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const similarProperties = PROPERTIES_DATA.filter(
    (p) => p.id !== property.id && (p.resortId === property.resortId || p.type === property.type)
  ).slice(0, 3);

  return (
    <div className="bg-[#faf8f5] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-slate-800">Properties</Link>
          <span>/</span>
          <Link href={`/resorts/${property.resortId}`} className="hover:text-slate-800">{property.resortName}</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium truncate max-w-xs">{property.title}</span>
        </div>

        {/* Header Title & Pricing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-slate-900 text-amber-300 px-2.5 py-0.5 rounded">
                Ref: {property.referenceNumber}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
                {property.resortName}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded">
                {property.type}
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
              {property.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{property.locationArea}</span>
            </div>
          </div>

          <div className="flex flex-col sm:items-end">
            <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Asking Price</span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0b1a2f]">
              {formattedPrice}
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">0% Buyer Fees • Turnkey Ready</span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="mb-12">
          {/* Main Large Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-lg bg-slate-900 mb-3">
            <img
              src={property.images[activeImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Photo {activeImageIndex + 1} of {property.images.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-24 sm:w-32 aspect-[16/10] rounded-lg overflow-hidden shrink-0 transition-all border-2 ${
                  activeImageIndex === idx
                    ? 'border-amber-500 scale-105 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Specs, Description, Features, Mortgage (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Quick Specs Ribbon */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Property Specifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Bed className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Bedrooms</span>
                    <strong className="text-sm font-semibold">{property.bedrooms} Double Beds</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Bath className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Bathrooms</span>
                    <strong className="text-sm font-semibold">{property.bathrooms} Bathrooms</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Build Size</span>
                    <strong className="text-sm font-semibold">{property.buildAreaSqm} m²</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Year Built</span>
                    <strong className="text-sm font-semibold">{property.yearBuilt || 'Recent'}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">
                About This Property
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-light">
                {property.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-6">
                Key Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mortgage Calculator Widget */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-amber-600" />
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Estimated Mortgage Repayment
                </h2>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                Based on Spanish non-resident mortgage financing. Actual rates subject to bank approval.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Deposit: {depositPercent}% (€{(property.price * (depositPercent / 100)).toLocaleString()})
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="50"
                    step="5"
                    value={depositPercent}
                    onChange={(e) => setDepositPercent(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0b1a2f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0b1a2f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Term: {loanYears} Years
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="30"
                    step="5"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0b1a2f]"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Estimated Monthly Payment</span>
                  <span className="font-serif text-2xl font-bold text-[#0b1a2f]">
                    €{monthlyPayment.toLocaleString()} / month
                  </span>
                </div>
                <Link
                  href="/services#mortgage"
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 underline"
                >
                  Speak with our Mortgage Broker →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Contact & Agent Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* WhatsApp Quick Action Card */}
              <div className="bg-[#0b1a2f] text-white p-6 rounded-2xl shadow-xl border border-amber-500/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Instant Response
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-1 mb-2">
                  Interested in this property?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Connect with Christine directly on WhatsApp to receive videos, floor plans, and arrange a viewing.
                </p>

                <a
                  href={`https://wa.me/34617633040?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Call directly:</span>
                  <a href="tel:+34617633040" className="text-white hover:text-amber-300 font-semibold">
                    +34 617 633 040
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <h3 className="font-serif text-base font-bold text-slate-900 mb-1">
                  Book a Viewing or Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Send your questions to our sales office.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-xs">Thank you for your inquiry!</h4>
                    <p className="text-[11px] text-emerald-700 mt-1">
                      Our team will reply to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        required
                        placeholder={`I am interested in ${property.referenceNumber}...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 font-semibold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}

                {/* Trust Seal */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Licensed & AIPP Regulated Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">
              Similar Properties You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
