'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080C14]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3 border-b border-slate-800/80'
          : 'bg-[#03090C] py-2 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo variant="light" />

          {/* Desktop Navigation Links (exact match from mockup) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-semibold text-slate-200">
            <Link
              href="/properties"
              className="hover:text-[#00F34A] transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/resorts"
              className="hover:text-[#00F34A] transition-colors"
            >
              Areas
            </Link>
            <Link
              href="/services"
              className="hover:text-[#00F34A] transition-colors"
            >
              Buying
            </Link>
            <Link
              href="/contact?intent=list-property"
              className="hover:text-[#00F34A] transition-colors"
            >
              Selling
            </Link>
            <Link
              href="/services"
              className="hover:text-[#00F34A] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-[#00F34A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#00F34A] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Elements: Language Selector & Green Pill CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector (UK Flag + EN + Chevron) */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700/60 bg-slate-900/60 transition-colors"
                aria-label="Select Language"
              >
                {/* UK Flag icon */}
                <span className="text-base leading-none">🇬🇧</span>
                <span>EN</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langDropdown && (
                <div className="absolute right-0 top-full mt-1.5 w-32 bg-[#101623] border border-slate-700/80 rounded-lg shadow-xl py-1 text-xs text-slate-200 z-50">
                  <button
                    onClick={() => setLangDropdown(false)}
                    className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-[#00F34A]/10 hover:text-[#00F34A]"
                  >
                    <span>🇬🇧</span> English
                  </button>
                  <button
                    onClick={() => setLangDropdown(false)}
                    className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-[#00F34A]/10 hover:text-[#00F34A]"
                  >
                    <span>🇪🇸</span> Español
                  </button>
                  <button
                    onClick={() => setLangDropdown(false)}
                    className="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-[#00F34A]/10 hover:text-[#00F34A]"
                  >
                    <span>🇳🇱</span> Nederlands
                  </button>
                </div>
              )}
            </div>

            {/* Neon Green Pill CTA Button */}
            <Link
              href="/contact"
              className="bg-[#00F34A] hover:bg-[#00D43E] text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-[#00F34A]/20 flex items-center gap-2 group"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-200 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d131f] border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <Link
            href="/properties"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Properties
          </Link>
          <Link
            href="/resorts"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Areas & Golf Resorts
          </Link>
          <Link
            href="/services"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Buying in Spain
          </Link>
          <Link
            href="/contact?intent=list-property"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Selling Your Property
          </Link>
          <Link
            href="/services"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services & Legal
          </Link>
          <Link
            href="/about"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-slate-200 hover:text-[#00F34A] py-2 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="bg-[#00F34A] text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-full text-center flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
