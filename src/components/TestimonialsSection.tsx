import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Christine and the team from Ultimate Murcia made our dream of owning a villa on Roda Golf a reality. Their knowledge of the resort communities, fees, and solicitors took all the stress away.',
      author: 'David & Sarah Jenkins',
      origin: 'Purchased Villa in Roda Golf Resort',
      location: 'Cheshire, United Kingdom',
      stars: 5,
    },
    {
      quote:
        'We looked at dozens of websites before finding Ultimate Murcia. They are honest, down-to-earth, and don’t give you the high-pressure sales pitch. Our penthouse in Los Alcázares is perfect.',
      author: 'Mark & Patricia van den Berg',
      origin: 'Purchased Penthouse in Los Alcázares',
      location: 'Utrecht, Netherlands',
      stars: 5,
    },
    {
      quote:
        'Sold our property in Altaona Golf in just under four weeks through Ultimate Murcia. Professional photography, great communication over WhatsApp, and hassle-free notary completion.',
      author: 'Robert Davies',
      origin: 'Sold Detached Villa in Altaona Golf',
      location: 'Cardiff, Wales',
      stars: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black tracking-[0.25em] text-[#00D26A] uppercase block mb-2">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
            Trusted by Buyers & Sellers Across Europe
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Read what our clients say about their property journey with the Ultimate Murcia team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#00D26A] mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00D26A] text-[#00D26A]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#00D26A]/20 mb-3" />
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-950 text-sm">{t.author}</h4>
                <div className="text-xs font-semibold text-[#00D26A]">{t.origin}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
