import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, UserCheck, HeartHandshake, ArrowRight, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Reliable & Fully Licensed',
      description:
        'We are an officially registered, approved and insured Real Estate Agency operating directly in the Murcia Region of Costa Cálida, Spain.',
    },
    {
      icon: Award,
      title: 'AIPP Approved Professionals',
      description:
        'Proud accredited members of the Association of International Property Professionals, bound by a strict international code of conduct.',
    },
    {
      icon: UserCheck,
      title: 'Local Feet on the Ground',
      description:
        'Our agents live and work across the golf resorts daily. We provide honest local advice on communities, resort fees, and microclimates.',
    },
    {
      icon: HeartHandshake,
      title: 'Personal Property Shopper',
      description:
        'We work exclusively on your behalf to find the right property, negotiate prices, connect you with English-speaking lawyers, and handle aftersales.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#09182b] to-[#0d213b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Why Ultimate Murcia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              A Trusted Partner for Your Spanish Property Journey.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Buying a home abroad should be exciting, secure, and completely transparent. As an AIPP-approved
              agency, we don’t push aggressive sales—we listen to your lifestyle requirements and match you
              with the right resort and property.
            </p>

            <div className="pt-2 space-y-3 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Zero buyer commission or hidden consulting fees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Independent English-speaking Spanish legal representation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Post-completion assistance with utilities, internet & key holding</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#09182b] font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-white font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors"
              >
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Grid Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0b1a2f]/80 border border-slate-800 p-6 rounded-xl hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
