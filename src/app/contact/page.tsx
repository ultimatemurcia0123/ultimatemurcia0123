'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, MapPin, MessageSquare, CheckCircle, ShieldCheck, Send } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/data/images';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('intent') === 'list-property' ? 'seller' : 'buyer';

  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>(initialTab);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredLanguage: 'English',
    resortInterest: '',
    budget: '',
    propertyType: '',
    propertyAddress: '',
    expectedPrice: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buyerWhatsApp = encodeURIComponent(
    `Hello Christine, I would like to inquire about buying a property in Murcia. My name is ${formData.name || 'a website visitor'}.`
  );

  const sellerWhatsApp = encodeURIComponent(
    `Hello Christine, I would like to request a valuation for listing my property in Murcia for sale. My name is ${formData.name || 'a property owner'}.`
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="LET'S FIND YOUR"
        highlight="PLACE IN THE SUN."
        description="Whether you want to buy, sell, or simply ask questions about Costa Cálida living, our friendly team is here to assist."
        image={IMAGES.hero.villa}
        mascot="point"
        sticker={['Say', 'hola!']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card (Dark Onyx matching brand) */}
            <div className="bg-[#080C14] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-800">
              <span className="eyebrow block mb-2">DIRECT COMMUNICATION</span>
              <h3 className="display-title text-2xl sm:text-3xl font-bold text-white mb-2">
                Talk to Christine Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8">
                Fastest response via WhatsApp or telephone during office hours (Mon-Sat, 9:00 - 19:00 CET).
              </p>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#00D26A]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      WhatsApp Sales Direct
                    </span>
                    <a
                      href={`https://wa.me/34617633040?text=${
                        activeTab === 'seller' ? sellerWhatsApp : buyerWhatsApp
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-[#00D26A] text-base transition-colors"
                    >
                      +34 617 633 040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#00D26A]/10 text-[#00D26A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00D26A]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <a
                      href="mailto:sales@ultimatemurcia.com"
                      className="font-bold text-white hover:text-[#00D26A] text-base transition-colors"
                    >
                      sales@ultimatemurcia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-300" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Registered Office
                    </span>
                    <span className="text-slate-200 text-sm font-medium">
                      Costa Cálida, Region of Murcia, Spain
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-[#00D26A] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Real Estate Agency &amp; AIPP Member</span>
                </div>
              </div>
            </div>

            {/* Seller Guarantee Callout */}
            <div className="bg-white border border-slate-200/90 p-7 rounded-2xl text-slate-800 text-xs sm:text-sm leading-relaxed shadow-sm">
              <span className="eyebrow block mb-1">FREE VALUATION</span>
              <h4 className="text-base font-black text-slate-950 uppercase tracking-tight mb-2">
                Thinking of Selling Your Home?
              </h4>
              <p className="text-slate-600 font-normal">
                We never charge upfront marketing fees. We provide free HD photography, targeted European portal placement in the UK, Holland, Belgium &amp; Scandinavia, and full legal coordination.
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
            {/* Tab Switcher */}
            <div className="flex bg-slate-100 p-1.5 rounded-full mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('buyer');
                  setSubmitted(false);
                }}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === 'buyer'
                    ? 'bg-[#00D26A] text-slate-950 shadow-md shadow-[#00D26A]/20'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                1. Buyer Inquiry / Viewing
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('seller');
                  setSubmitted(false);
                }}
                className={`flex-1 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all ${
                  activeTab === 'seller'
                    ? 'bg-[#00D26A] text-slate-950 shadow-md shadow-[#00D26A]/20'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                2. List Your Property
              </button>
            </div>

            {submitted ? (
              <div className="bg-[#E6FBF0] border border-[#00D26A]/40 text-slate-950 p-8 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-[#00D26A] mx-auto mb-3" />
                <h3 className="display-title text-2xl font-bold text-slate-950">Message Received!</h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 max-w-md mx-auto">
                  Thank you for contacting Ultimate Murcia. Christine or an agent from our sales desk will review your details and contact you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-bold text-[#00D26A] hover:underline uppercase tracking-wider"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7... or +34..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Language
                    </label>
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                    >
                      <option value="English">English</option>
                      <option value="Nederlands">Nederlands (Dutch)</option>
                      <option value="Español">Español (Spanish)</option>
                      <option value="Français">Français (French)</option>
                      <option value="Deutsch">Deutsch (German)</option>
                    </select>
                  </div>
                </div>

                {activeTab === 'buyer' ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Resort of Interest
                        </label>
                        <select
                          value={formData.resortInterest}
                          onChange={(e) => setFormData({ ...formData, resortInterest: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                        >
                          <option value="">Any Murcia Resort</option>
                          {RESORTS_DATA.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                        >
                          <option value="">Select Budget</option>
                          <option value="Under €150k">Under €150,000</option>
                          <option value="€150k - €250k">€150,000 - €250,000</option>
                          <option value="€250k - €400k">€250,000 - €400,000</option>
                          <option value="€400k+">€400,000+ (Luxury Villas)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        How Can We Help You?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you are looking for (e.g. 2-bed apartment in La Torre, private pool, visiting dates)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Resort / Address of Your Property
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. La Torre, Calle Aneto 12..."
                          value={formData.propertyAddress}
                          onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                        >
                          <option value="Detached Villa">Detached Villa</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Penthouse">Penthouse</option>
                          <option value="Townhouse">Townhouse</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Additional Property Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Number of bedrooms, private pool, recent upgrades, target price..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D26A] focus:border-[#00D26A]"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-black py-4 px-6 rounded-full text-xs uppercase tracking-wider transition-all shadow-[0_6px_25px_-5px_rgba(0,210,106,0.8)] flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {activeTab === 'seller' ? 'Request Free Property Valuation' : 'Submit Buyer Inquiry'}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading contact page...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
