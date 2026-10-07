'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-[max(12px,env(safe-area-inset-bottom))] right-3 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-full shadow-xl border border-slate-200/80 animate-fade-in">
          <span>Need property advice? <strong>Chat with Christine</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
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
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#00F34A] hover:bg-[#00D43E] text-slate-950 rounded-full shadow-2xl hover:shadow-[#00F34A]/40 transition-all duration-300 hover:scale-105"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F34A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#00F34A]"></span>
        </span>
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
}
