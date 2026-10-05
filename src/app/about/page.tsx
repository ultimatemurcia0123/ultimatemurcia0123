import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, HeartHandshake, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="bg-[#faf8f5] min-h-screen">
      {/* Hero */}
      <div className="bg-[#0b1a2f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            About Ultimate Murcia
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Reliable, Professional, Local & Trusted
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Founded with a commitment to integrity, transparent communication, and genuine passion for
            the wonderful Costa Cálida region of Spain.
          </p>
        </div>
      </div>

      {/* Main Story & Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Our Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              We Are Your Personal Property Shopper on the Costa Cálida.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Here at <strong>Ultimate Murcia Property Sales</strong>, we believe buying a Spanish home
              should be a joyful and secure adventure. Whether you are looking for a turnkey holiday apartment
              in Condado de Alhama, a golf villa with private pool in La Torre, or a brand new architect-designed
              residence in Santa Rosalía Lake & Life Resort, we guide you every step of the way.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              We are active on the resorts daily and have our &lsquo;feet on the ground&rsquo;. We know which
              communities have low fees, which orientations give the best winter sun, and which properties
              offer strong rental yields.
            </p>

            <div className="pt-2 space-y-3 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Approved Member of the Association of International Property Professionals (AIPP)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fully registered and insured estate agency in the Region of Murcia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0% Commission charged to property buyers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1000&q=80"
                alt="Murcia Golf Resort Lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" /> AIPP Certified
                </div>
                <h3 className="font-serif text-lg font-bold">
                  Strict Professional Standards & Ethical Code
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-serif font-bold text-slate-900 text-base mb-1">Reliable</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Fully approved and insured estate agency registered in the Murcia Region of Spain.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <MapPin className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-serif font-bold text-slate-900 text-base mb-1">Local Company</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Living and working in Costa Cálida daily with deep, first-hand community knowledge.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <Award className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-serif font-bold text-slate-900 text-base mb-1">Professional</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Approved AIPP members delivering highly trained and ethical service to all clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <HeartHandshake className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-serif font-bold text-slate-900 text-base mb-1">Personalized</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your bespoke property shopper from initial search through notary completion.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Direct WhatsApp Call to Action */}
      <div className="bg-[#0b1a2f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Speak to Christine and the Team Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you are curious about resort community fees, viewing trips, or selling a property, we are always happy to chat.
          </p>
          <a
            href="https://wa.me/34617633040?text=Hello%20Christine%2C%20I%20read%20about%20Ultimate%20Murcia%20on%20your%20website%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+34 617 633 040)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
