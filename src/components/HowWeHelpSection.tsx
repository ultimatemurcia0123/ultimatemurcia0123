import Link from 'next/link';
import { Home, Tag, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '@/data/site-content';

const icons = { buy: Home, sell: Tag, marketing: TrendingUp, support: UserCheck };

export default function HowWeHelpSection() {
  const { howWeHelp } = SITE_CONTENT;
  return (
    <section className="home-help">
      <div className="home-help-photo" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="home-help-intro">
          <div>
            <span className="eyebrow block mb-3">{howWeHelp.badge}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.05]">YOUR PROPERTY<br />IN EXPERT HANDS</h2>
          </div>
          <div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{howWeHelp.description}</p>
            <Link href={howWeHelp.ctaLink} className="home-primary-button">{howWeHelp.ctaText}<ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
        <div className="home-help-cards">
          {howWeHelp.cards.map((card) => {
            const Icon = icons[card.iconType];
            return (
              <div key={card.title} className="home-help-card">
                <span className="w-11 h-11 bg-[#CDFFD0] rounded-full flex items-center justify-center shrink-0"><Icon className="w-6 h-6" strokeWidth={1.8} /></span>
                <div><h3 className="text-xs font-bold mb-2">{card.title}</h3><p className="text-xs text-slate-600 leading-relaxed">{card.description}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
