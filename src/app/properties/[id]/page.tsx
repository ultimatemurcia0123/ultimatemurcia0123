'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  BedDouble,
  Bath,
  Maximize2,
  MapPin,
  Calendar,
  CheckCircle,
  MessageSquare,
  Calculator,
  ShieldCheck,
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
      <div className="py-24 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="display-title text-3xl text-slate-900">Property Not Found</h1>
        <p className="text-sm text-slate-500 mt-2">The listing you are looking for is no longer active.</p>
        <Link href="/properties" className="mt-6 inline-flex items-center gap-2 bg-[#00D26A] text-slate-950 font-bold text-xs uppercase px-6 py-3 rounded-full">
          <ChevronLeft className="w-4 h-4" /> Return to All Properties
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
    <div className="bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-slate-900">Properties</Link>
          <span>/</span>
          <Link href={`/resorts/${property.resortId}`} className="hover:text-[#00D26A]">{property.resortName}</Link>
          <span>/</span>
          <span className="text-slate-900 truncate max-w-xs font-bold">{property.referenceNumber}</span>
        </div>

        {/* Header Title & Pricing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200 mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-black tracking-wider text-slate-950 bg-[#00D26A] px-3 py-1 rounded-full uppercase">
                Ref: {property.referenceNumber}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full">
                {property.resortName}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-200 px-3 py-1 rounded-full">
                {property.type}
              </span>
            </div>
            <h1 className="display-title text-3xl sm:text-5xl lg:text-6xl text-slate-950 leading-[0.95]">
              {property.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 mt-3 font-medium">
              <MapPin className="w-4 h-4 text-[#00D26A] shrink-0" />
              <span>{property.locationArea}</span>
            </div>
          </div>

          <div className="flex flex-col sm:items-end shrink-0">
            <span className="eyebrow block">ASKING PRICE</span>
            <div className="display-title text-4xl sm:text-5xl font-black text-slate-950">
              {formattedPrice}
            </div>
            <span className="text-xs font-bold text-[#00D26A] uppercase tracking-wider mt-1">
              0% Buyer Fees • Key Ready
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="mb-14">
          {/* Main Large Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 mb-4 border border-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={property.images[activeImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute bottom-5 right-5 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Photo {activeImageIndex + 1} of {property.images.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-28 sm:w-36 aspect-[16/10] rounded-xl overflow-hidden shrink-0 transition-all border-2 cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#00D26A] ring-2 ring-[#00D26A]/40 scale-105 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm">
              <span className="eyebrow block mb-4">SPECIFICATIONS</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                    <BedDouble className="w-6 h-6 text-[#00D26A]" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Bedrooms</span>
                    <strong className="text-sm font-bold text-slate-950">{property.bedrooms} Beds</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                    <Bath className="w-6 h-6 text-[#00D26A]" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Bathrooms</span>
                    <strong className="text-sm font-bold text-slate-950">{property.bathrooms} Baths</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                    <Maximize2 className="w-6 h-6 text-[#00D26A]" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Build Size</span>
                    <strong className="text-sm font-bold text-slate-950">{property.buildAreaSqm} m²</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-[#00D26A]" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold">Year Built</span>
                    <strong className="text-sm font-bold text-slate-950">{property.yearBuilt || 'Recent'}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <span className="eyebrow block mb-2">OVERVIEW</span>
              <h2 className="display-title text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                About This Property
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line font-normal">
                {property.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <span className="eyebrow block mb-2">HIGHLIGHTS</span>
              <h2 className="display-title text-2xl sm:text-3xl font-bold text-slate-950 mb-6">
                Key Features &amp; Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#E6FBF0] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#00D26A]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mortgage Calculator Widget */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#E6FBF0] flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[#00D26A]" />
                </div>
                <h2 className="display-title text-2xl font-bold text-slate-950">
                  Estimated Mortgage Repayment
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mb-8 font-normal">
                Based on Spanish non-resident mortgage financing. Actual rates subject to bank approval.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Deposit: {depositPercent}% (€{(property.price * (depositPercent / 100)).toLocaleString()})
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="50"
                    step="5"
                    value={depositPercent}
                    onChange={(e) => setDepositPercent(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#00D26A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#00D26A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Term: {loanYears} Years
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="30"
                    step="5"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-[#00D26A]"
                  />
                </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                    Estimated Monthly Payment
                  </span>
                  <span className="display-title text-3xl font-black text-[#00D26A]">
                    €{monthlyPayment.toLocaleString()} / month
                  </span>
                </div>
                <Link
                  href="/services#mortgage"
                  className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#00D26A] transition-colors"
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
              <div className="bg-[#080C14] text-white p-7 sm:p-8 rounded-3xl shadow-2xl border border-slate-800">
                <span className="eyebrow block mb-2">INSTANT RESPONSE</span>
                <h3 className="display-title text-2xl font-bold text-white mb-2">
                  Interested in this property?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  Connect with Christine directly on WhatsApp to receive videos, floor plans, and arrange a private viewing.
                </p>

                <a
                  href={`https://wa.me/34617633040?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold py-4 px-6 rounded-full flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider transition-all shadow-[0_6px_25px_-5px_rgba(0,210,106,0.8)] hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="mt-5 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Call directly:</span>
                  <a href="tel:+34617633040" className="text-white hover:text-[#00D26A] font-bold">
                    +34 617 633 040
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
                <h3 className="display-title text-xl font-bold text-slate-950 mb-1">
                  Book a Viewing
                </h3>
                <p className="text-xs text-slate-500 mb-5 font-normal">
                  Send your question or schedule a private viewing.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#E6FBF0] border border-[#00D26A]/40 text-slate-950 p-6 rounded-2xl text-center">
                    <CheckCircle className="w-8 h-8 text-[#00D26A] mx-auto mb-2" />
                    <h4 className="font-bold text-xs uppercase tracking-wider">Inquiry Received!</h4>
                    <p className="text-xs text-slate-700 mt-1">
                      Our team will reply to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        required
                        placeholder={`I am interested in ${property.referenceNumber}...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}

                {/* Trust Seal */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#00D26A]" />
                  <span>Licensed &amp; AIPP Regulated Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200">
            <span className="eyebrow block mb-2">EXPLORE MORE</span>
            <h2 className="display-title text-2xl sm:text-4xl font-bold text-slate-950 mb-8">
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
