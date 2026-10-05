'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle, ShieldCheck, Send } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';

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
    <div className="bg-[#faf8f5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Contact Ultimate Murcia
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed font-light">
            Whether you want to buy, sell, or simply ask questions about Costa Cálida living, our friendly team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-[#0b1a2f] text-white p-8 rounded-2xl shadow-xl border border-amber-500/20">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                Fastest response via WhatsApp or telephone during office hours (Mon-Sat, 9:00 - 19:00 CET).
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-slate-400">WhatsApp Sales Direct</span>
                    <a
                      href={`https://wa.me/34617633040?text=${
                        activeTab === 'seller' ? sellerWhatsApp : buyerWhatsApp
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white hover:text-emerald-400 text-sm transition-colors"
                    >
                      +34 617 633 040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Email Address</span>
                    <a
                      href="mailto:sales@ultimatemurcia.com"
                      className="font-semibold text-white hover:text-amber-300 text-sm transition-colors"
                    >
                      sales@ultimatemurcia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-700 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-slate-400">Registered Office</span>
                    <span className="text-slate-200 text-xs">
                      Costa Cálida, Region of Murcia, Spain
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Real Estate Agency & AIPP Member</span>
                </div>
              </div>
            </div>

            {/* Seller Guarantee Callout */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-amber-900 text-xs leading-relaxed">
              <h4 className="font-bold text-sm mb-1 text-amber-950">Selling Your Property?</h4>
              <p>
                We do not charge upfront marketing fees. We provide free professional photography, targeted international portal placement in the UK, Holland, and Scandinavia, and full legal coordination.
              </p>
            </div>
          </div>

          {/* Right Column: Tabbed Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {/* Tab Switcher */}
            <div className="flex border-b border-slate-200 mb-8">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('buyer');
                  setSubmitted(false);
                }}
                className={`flex-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'buyer'
                    ? 'border-[#0b1a2f] text-[#0b1a2f]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
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
                className={`flex-1 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border-b-2 ${
                  activeTab === 'seller'
                    ? 'border-[#0b1a2f] text-[#0b1a2f]'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                2. List Your Property For Sale
              </button>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold">Message Received!</h3>
                <p className="text-xs text-emerald-800 mt-2 max-w-md mx-auto">
                  Thank you for contacting Ultimate Murcia. Christine or an agent from our sales desk will review your details and contact you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-semibold text-emerald-700 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7... or +34..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Preferred Language
                    </label>
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Resort of Interest
                        </label>
                        <select
                          value={formData.resortInterest}
                          onChange={(e) => setFormData({ ...formData, resortInterest: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        How Can We Help You?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you are looking for (e.g. 2-bed apartment in La Torre, private pool, visiting dates)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Resort / Address of Your Property
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. La Torre, Calle Aneto 12..."
                          value={formData.propertyAddress}
                          onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="Detached Villa">Detached Villa</option>
                          <option value="Apartment">Apartment</option>
                          <option value="Penthouse">Penthouse</option>
                          <option value="Townhouse">Townhouse</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Additional Property Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Number of bedrooms, private pool, recent upgrades, target price..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 font-semibold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
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
