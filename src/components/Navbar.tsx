'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Compass, Phone, Menu, X, MessageSquare, ChevronDown, Award } from 'lucide-react';
import { RESORTS_DATA } from '@/data/resorts';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resortsDropdown, setResortsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-bar for trust & credentials */}
      <div className="bg-[#0b1a2f] text-slate-300 text-xs py-2 px-4 border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-300/90 font-medium">
              <Award className="w-3.5 h-3.5" /> Approved AIPP Member • Registered Estate Agent Murcia
            </span>
            <span className="hidden md:inline text-slate-400">| Costa Cálida & Golf Resorts Specialist</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="https://wa.me/34617633040?text=Hello%20Ultimate%20Murcia%2C%20I%20am%20interested%20in%20properties%20in%20Murcia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +34 617 633 040</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <Link href="/admin" className="hidden sm:inline text-slate-400 hover:text-white transition-colors">
              Client Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b1a2f]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5'
            : 'bg-[#0b1a2f] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center shadow-md">
                <span className="font-serif font-bold text-[#0b1a2f] text-lg tracking-wider">UM</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-widest text-white uppercase group-hover:text-amber-300 transition-colors">
                  Ultimate Murcia
                </span>
                <span className="block text-[10px] tracking-[0.22em] text-amber-200/80 uppercase font-medium">
                  Property Sales • Costa Cálida
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
              <Link href="/" className="hover:text-amber-300 transition-colors">
                Home
              </Link>
              <Link href="/properties" className="hover:text-amber-300 transition-colors">
                Properties
              </Link>

              {/* Resorts Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResortsDropdown(true)}
                onMouseLeave={() => setResortsDropdown(false)}
              >
                <button className="flex items-center gap-1 hover:text-amber-300 transition-colors py-2">
                  <span>Golf Resorts</span>
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                </button>

                {resortsDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-[#0d213b] border border-amber-500/20 shadow-xl rounded-md py-2 px-1 z-50">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/70 px-3 py-1.5 border-b border-slate-700/60">
                      Popular Murcia Resorts
                    </div>
                    {RESORTS_DATA.map((resort) => (
                      <Link
                        key={resort.id}
                        href={`/resorts/${resort.slug}`}
                        className="block px-3 py-2 text-xs text-slate-200 hover:bg-amber-500/10 hover:text-amber-300 rounded transition-colors"
                        onClick={() => setResortsDropdown(false)}
                      >
                        <div className="font-medium">{resort.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{resort.tagline}</div>
                      </Link>
                    ))}
                    <div className="border-t border-slate-700/60 mt-1 pt-1">
                      <Link
                        href="/resorts"
                        className="block px-3 py-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                        onClick={() => setResortsDropdown(false)}
                      >
                        View All Resort Guides →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/services" className="hover:text-amber-300 transition-colors">
                Services & Legal
              </Link>
              <Link href="/about" className="hover:text-amber-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-amber-300 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact?intent=list-property"
                className="text-xs font-semibold uppercase tracking-wider text-amber-300 hover:text-white px-3.5 py-2 border border-amber-400/40 hover:border-amber-300 rounded transition-all"
              >
                List Your Property
              </Link>

              <a
                href="https://wa.me/34617633040?text=Hello%20Ultimate%20Murcia%2C%20I%20would%20like%20to%20speak%20to%20an%20agent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded shadow-md hover:shadow-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-200 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-out menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d213b] border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
            <Link
              href="/"
              className="block text-slate-200 hover:text-amber-300 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="block text-slate-200 hover:text-amber-300 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Properties
            </Link>
            <Link
              href="/resorts"
              className="block text-slate-200 hover:text-amber-300 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Golf Resorts & Area Guides
            </Link>
            <Link
              href="/services"
              className="block text-slate-200 hover:text-amber-300 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services & Referrals
            </Link>
            <Link
              href="/about"
              className="block text-slate-200 hover:text-amber-300 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us (AIPP Member)
            </Link>
            <Link
              href="/contact"
              className="block text-slate-200 hover:text-amber-300 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 border-t border-slate-700/60 flex flex-col gap-2">
              <Link
                href="/contact?intent=list-property"
                className="text-center text-xs font-semibold uppercase tracking-wider text-amber-300 py-2.5 border border-amber-400/40 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                List Your Property
              </Link>
              <a
                href="https://wa.me/34617633040?text=Hello%20Ultimate%20Murcia%2C%20I%20am%20reaching%20out%20via%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider bg-emerald-600 text-white py-2.5 rounded"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
