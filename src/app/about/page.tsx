import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, HeartHandshake, MapPin, CheckCircle, MessageSquare } from 'lucide-react';
import TestimonialsSection from '@/components/TestimonialsSection';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/data/images';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Brand Page Hero with Mascot & Marker Sticker */}
      <PageHero
        eyebrow="ABOUT ULTIMATE MURCIA"
        title="LOCAL EXPERTISE."
        highlight="GLOBAL REACH."
        description="Founded with an unwavering commitment to integrity, transparent communication, and genuine passion for Costa Cálida, Spain."
        image={IMAGES.resorts.laTorre}
        mascot="point"
        sticker={['Hola!', 'Welcome']}
      />

      {/* 2. Main Story & Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow block">
              OUR PHILOSOPHY
            </span>
            <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl text-slate-950 leading-[0.95]">
              We Are Your Personal Property Shopper in Murcia.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At <strong className="text-slate-900">Ultimate Murcia Property Sales</strong>, we believe buying a Spanish home
              should be a joyful and secure adventure. Whether you are seeking a turnkey holiday apartment
              in Condado de Alhama, a frontline golf villa with private pool in La Torre, or a brand new architect-designed
              residence in Santa Rosalía Lake &amp; Life Resort, we guide you every step of the way.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We are active on the resorts daily and have our &lsquo;feet on the ground&rsquo;. We know which
              communities have low fees, which orientations give the best winter sun, and which properties
              offer strong rental yields.
            </p>

            <div className="pt-2 space-y-3.5 text-xs sm:text-sm text-slate-800 font-semibold">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#00D26A]" />
                </div>
                <span>Approved Member of the Association of International Property Professionals (AIPP)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#00D26A]" />
                </div>
                <span>Fully registered and insured estate agency in the Region of Murcia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#00D26A]" />
                </div>
                <span>0% Commission charged to property buyers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.howWeHelp}
                alt="Murcia Golf Resort Lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-[#00D26A] text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" /> AIPP Certified
                </div>
                <h3 className="display-title text-xl sm:text-2xl font-bold tracking-tight">
                  Strict Professional Standards &amp; Ethical Code
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#00D26A]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-[#00D26A]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-slate-950 mb-1">Reliable</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Fully approved and insured estate agency registered in the Murcia Region of Spain.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#00D26A]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#00D26A]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-slate-950 mb-1">Local Company</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Living and working in Costa Cálida daily with deep, first-hand community knowledge.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#00D26A]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#00D26A]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-slate-950 mb-1">Professional</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Approved AIPP members delivering highly trained and ethical service to all clients.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#00D26A]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E6FBF0] flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6 text-[#00D26A]" />
            </div>
            <h4 className="text-base font-black uppercase tracking-tight text-slate-950 mb-1">Personalized</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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
      <div className="bg-[#080C14] text-white py-18">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="eyebrow block mb-3">READY TO START?</span>
          <h2 className="display-title text-3xl sm:text-5xl font-bold mb-4">
            Speak to Christine and the Team Today
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto font-normal">
            Whether you are curious about resort community fees, viewing trips, or selling a property, we are always happy to chat.
          </p>
          <a
            href="https://wa.me/34617633040?text=Hello%20Christine%2C%20I%20read%20about%20Ultimate%20Murcia%20on%20your%20website%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_10px_35px_-10px_rgba(0,210,106,0.8)] transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+34 617 633 040)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
