'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, X } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const pathname = usePathname();

  // The contact page already provides WhatsApp beside the message form.
  if (pathname === '/contact') return null;

  return (
    <div className={`fixed bottom-[max(12px,env(safe-area-inset-bottom))] right-3 sm:bottom-6 sm:right-6 z-50 items-end gap-3 ${pathname === '/' ? 'hidden sm:flex' : 'flex'}`}>
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-full shadow-xl border border-slate-200/80 animate-fade-in">
          <span>Need property advice? <strong>Chat with Christine</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-900 ml-1 min-w-9 min-h-9 inline-flex items-center justify-center"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={`https://wa.me/${SITE_CONTENT.brand.whatsappNumber}?text=Hello%20Ultimate%20Murcia%2C%20I%20am%20interested%20in%20properties%20in%20Murcia`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (opens in a new tab)"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#00F34A] hover:bg-[#00D43E] text-slate-950 rounded-full shadow-2xl hover:shadow-[#00F34A]/40 transition-[background-color,box-shadow,transform] duration-300 hover:scale-105"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#00F34A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#00F34A]"></span>
        </span>
        <MessageSquare aria-hidden="true" className="w-7 h-7" />
      </a>
    </div>
  );
}
