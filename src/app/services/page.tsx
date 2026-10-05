import React from 'react';
import Link from 'next/link';
import { Scale, Landmark, RefreshCw, KeyRound, Compass, CheckCircle2, MessageSquare } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/data/images';

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
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="TRUSTED PARTNERS NETWORK"
        title="COMPLETE"
        highlight="BUYER SERVICES."
        description="We don’t just find you a villa or apartment—we accompany you throughout the entire buying journey with our verified, bilingual professional partners in Murcia and Costa Cálida."
        image={IMAGES.howWeHelp}
        mascot="point"
        sticker={['Keys in', 'your hand']}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Services List */}
        <div className="space-y-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#00D26A]/40 transition-all duration-300 flex flex-col lg:flex-row gap-8 items-start justify-between"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E6FBF0] text-[#00D26A] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-[#00D26A]" />
                    </div>
                    <div>
                      <h2 className="display-title text-2xl sm:text-3xl font-bold text-slate-950">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 font-semibold">{service.tagline}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#080C14] text-white p-7 rounded-2xl w-full lg:w-80 shrink-0 text-center border border-slate-800 shadow-xl">
                  <span className="eyebrow block mb-2">FREE GUIDANCE</span>
                  <h3 className="display-title text-lg font-bold text-white mb-2">
                    Request an Introduction
                  </h3>
                  <p className="text-xs text-slate-300 mb-5 leading-relaxed font-normal">
                    Connect with our vetted English-speaking specialists for a free, no-obligation consultation.
                  </p>
                  <a
                    href={`https://wa.me/34617633040?text=Hello%20Christine%2C%20I%20would%20like%20an%20introduction%20for%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#00D26A] hover:bg-[#00B85C] text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_-4px_rgba(0,210,106,0.8)]"
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
