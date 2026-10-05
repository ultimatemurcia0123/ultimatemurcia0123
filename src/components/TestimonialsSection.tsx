import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Christine from Ultimate Murcia made our dream of owning a villa on La Torre Golf Resort a reality. Her knowledge of the resort communities, fees, and solicitors took all the stress away.',
      author: 'David & Sarah Jenkins',
      origin: 'Purchased Villa in La Torre Golf Resort',
      location: 'Cheshire, United Kingdom',
      stars: 5,
    },
    {
      quote:
        'We looked at dozens of websites before finding Ultimate Murcia. They are honest, down-to-earth, and don’t give you the high-pressure sales pitch. Our penthouse in Hacienda Riquelme is perfect.',
      author: 'Mark & Patricia van den Berg',
      origin: 'Purchased Penthouse in Hacienda Riquelme',
      location: 'Utrecht, Netherlands',
      stars: 5,
    },
    {
      quote:
        'Sold our property in Sierra Golf in just under four weeks through Ultimate Murcia. Professional photography, great communication over WhatsApp, and hassle-free notary completion.',
      author: 'Robert Davies',
      origin: 'Sold Detached Villa in Sierra Golf',
      location: 'Cardiff, Wales',
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#f7f5f0] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Trusted by Buyers & Sellers Across Europe
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Read what our clients say about their buying journey with Christine and the Ultimate Murcia team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-300/40 mb-3" />
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-serif font-bold text-slate-900 text-sm">{t.author}</h4>
                <div className="text-xs font-medium text-amber-800">{t.origin}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
