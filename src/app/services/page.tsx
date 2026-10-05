import React from 'react';
import Link from 'next/link';
import { Scale, Landmark, RefreshCw, KeyRound, Building, Compass, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'legal',
      icon: Scale,
      title: 'Independent Spanish Legal & Conveyancing',
      tagline: 'Protecting your interests at every step of the Spanish purchase process.',
      details: [
        'Full land registry search (Nota Simple) ensuring clear title and absence of historic debts',
        'Verification of building licenses, habitation certificate (Cédula de Habitabilidad), and energy certificates',
        'Drafting and review of private purchase contracts (Contrato de Arras)',
        'Accompanying you to the Spanish Notary Public for deed signing (Escritura de Compraventa)',
        'Transfer of utility accounts (water, electricity, community fees, IBI council tax)',
      ],
    },
    {
      id: 'mortgage',
      icon: Landmark,
      title: 'Spanish Mortgages for Expats & Non-Residents',
      tagline: 'Competitive rates and up to 70% LTV financing for European buyers.',
      details: [
        'Access to major Spanish lenders (CaixaBank, Sabadell, Santander, Bankinter)',
        'Mortgage pre-approvals within 48 to 72 hours',
        'Fixed, variable, and mixed interest rate options',
        'Complete guidance on documentation required for UK, Irish, and European tax residents',
        'Zero upfront broker consultation fee',
      ],
    },
    {
      id: 'currency',
      icon: RefreshCw,
      title: 'Bank-Beating Currency Exchange (FX)',
      tagline: 'Save thousands on international money transfers compared to high-street banks.',
      details: [
        'Forward contracts to fix exchange rates up to 12 months in advance',
        'FCA-regulated international currency partners',
        'Zero international transfer fees on property purchase sums',
        'Automated regular payments for mortgage or community fee transfers',
      ],
    },
    {
      id: 'management',
      icon: KeyRound,
      title: 'Property Management & Key Holding',
      tagline: 'Reliable caretakers for your lock-up-and-leave holiday home.',
      details: [
        'Fortnightly security, plumbing, and storm inspection visits',
        'Key holding for tradespeople, internet installations, and guests',
        'Pre-arrival preparation, cleaning, and welcome food packs',
        'Emergency call-out response and liaison with resort community administrators',
      ],
    },
    {
      id: 'residency',
      icon: Compass,
      title: 'NIE Numbers & Spanish Banking Setup',
      tagline: 'Seamless bureaucratic assistance before your completion date.',
      details: [
        'Appointment booking and fast-track assistance obtaining your Spanish tax number (NIE)',
        'Assistance opening local non-resident bank accounts with online English banking',
        'Support with Non-Lucrative Visa (NLV) applications for British retirees',
      ],
    },
  ];

  return (
    <div className="bg-[#faf8f5] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Trusted Partners Network
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Service Referrals & Buyer Guidance
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            We don’t just find you a villa or apartment—we accompany you throughout the entire buying journey.
            Here are our verified, bilingual professional partners in the Murcia and Costa Cálida region.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row gap-8 items-start justify-between"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                        {service.title}
                      </h2>
                      <p className="text-xs text-amber-800 font-medium">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-xl w-full lg:w-80 shrink-0 text-center">
                  <h3 className="font-serif text-sm font-bold text-slate-900 mb-2">
                    Request an Introduction
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Connect with our vetted English-speaking specialists for a free initial consultation.
                  </p>
                  <a
                    href={`https://wa.me/34617633040?text=Hello%20Christine%2C%20I%20would%20like%20an%20introduction%20for%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#0b1a2f] hover:bg-[#132742] text-amber-300 text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
