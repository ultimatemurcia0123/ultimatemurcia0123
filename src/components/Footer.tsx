import React from 'react';
import Link from 'next/link';
import { Award, ShieldCheck, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#080C14] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Credentials Ribbon */}
      <div className="border-b border-slate-800/80 bg-[#0B101A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-[#00D26A]/10 border border-[#00D26A]/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#00D26A]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">AIPP Approved</h4>
                <p className="text-xs text-slate-400">
                  Approved member of the Association of International Property Professionals.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-[#00D26A]/10 border border-[#00D26A]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00D26A]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Licensed & Insured</h4>
                <p className="text-xs text-slate-400">
                  Officially registered and insured real estate agency in the Region of Murcia.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-[#00D26A]/10 border border-[#00D26A]/30 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-[#00D26A]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Local Ground Support</h4>
                <p className="text-xs text-slate-400">
                  Full English & European multilingual aftersales, legal, and property guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted, licensed property specialists in Costa Cálida, Spain. We specialize in golf
              resort villas, luxury lake residences, and high-yield apartments across the Murcia region.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D26A] shrink-0" />
                <span>Costa Cálida, Murcia Region, Spain</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D26A] shrink-0" />
                <a href="tel:+34617633040" className="hover:text-white transition-colors">
                  +34 617 633 040 (WhatsApp Enabled)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D26A] shrink-0" />
                <a href="mailto:sales@ultimatemurcia.com" className="hover:text-white transition-colors">
                  sales@ultimatemurcia.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Golf Resorts */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#00D26A] mb-4">
              Murcia Golf Resorts
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              {RESORTS_DATA.map((resort) => (
                <li key={resort.id}>
                  <Link
                    href={`/resorts/${resort.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {resort.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#00D26A] mb-4">
              Explore
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">
                  All Properties For Sale
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="hover:text-white transition-colors">
                  Luxury Detached Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=apartment" className="hover:text-white transition-colors">
                  Resort Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=penthouse" className="hover:text-white transition-colors">
                  Penthouses with Solarium
                </Link>
              </li>
              <li>
                <Link href="/contact?intent=list-property" className="hover:text-[#00D26A] transition-colors font-medium">
                  List Your Property With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Services & Company */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#00D26A] mb-4">
              Services & Trust
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Spanish Legal & Notary Advice
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Currency Exchange & Mortgages
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Ultimate Murcia
                </Link>
              </li>
              <li>
                <Link href="/about#testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Our Office
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimers */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ultimate Murcia Property Sales. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms & Legal Notice
            </Link>
            <Link href="/admin" className="hover:text-slate-400 transition-colors">
              Agent Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
