import React from 'react';
import Link from 'next/link';
import { Scale, Landmark, RefreshCw, KeyRound, Building, Compass, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Scale,
      title: 'Independent Legal Services',
      description: 'We connect you with bilingual, independent Spanish solicitors to carry out title deed searches, debt checks, and notary signing.',
    },
    {
      icon: Landmark,
      title: 'Spanish Mortgage Advice',
      description: 'Expert mortgage brokers providing up to 70% LTV financing for non-resident British, Irish, and European purchasers.',
    },
    {
      icon: RefreshCw,
      title: 'Currency Transfer Support',
      description: 'Bank-beating exchange rates with authorized currency partners, saving buyers thousands compared to standard retail bank transfers.',
    },
    {
      icon: KeyRound,
      title: 'Key Holding & Management',
      description: 'Peace of mind while you are away: regular security checks, cleaning, key handover for guests, and pool maintenance.',
    },
    {
      icon: Building,
      title: 'Listing & Valuation for Sellers',
      description: 'Targeted international marketing in the UK, Netherlands, Germany, and Scandinavia to achieve optimal sale values.',
    },
    {
      icon: Compass,
      title: 'NIE & Residency Guidance',
      description: 'Step-by-step assistance obtaining your Spanish tax number (NIE), opening local bank accounts, and residency applications.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Comprehensive Aftersales & Referrals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Everything You Need Under One Roof
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            From initial viewing to key handover and long-term ownership, our vetted network of
            English-speaking Spanish professionals ensures a smooth, stress-free purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-7 hover:shadow-lg hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 transition-colors pt-2 border-t border-slate-200/60"
                >
                  <span>Learn more about this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
