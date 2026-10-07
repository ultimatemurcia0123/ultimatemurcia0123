import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FacebookIcon from '@/components/FacebookIcon';
import ContactDraft from '@/components/ContactDraft';
import { SITE_CONTENT } from '@/data/site-content';

export const metadata: Metadata = { title: 'Contact Christine & the team | Ultimate Murcia', description: 'Contact Ultimate Murcia about buying, selling or local property services. Call +34 711 093 154 or email info@ultimatemurcia.com.' };

export default async function ContactPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const value = (key: string) => typeof params[key] === 'string' ? params[key] as string : '';
  const topic = value('intent') === 'list-property' ? 'Selling a property' : value('topic') || 'Buying a property';
  const property = value('property');
  const area = value('area');
  const { brand } = SITE_CONTENT;
  return <div className="inner-page">
    <PageHero image="/images/contact-hero-v1.webp" eyebrow="GET IN TOUCH" title="Let’s talk" highlight="about your plans." description="Buying, selling or looking for local support? Speak to Christine and the team." />
    <div className="page-shell page-section grid lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-14 items-start">
      <section className="contact-details">
        <h2 className="section-heading">Contact us directly</h2>
        <p className="page-copy mt-4 mb-7">Choose whichever way suits you best.</p>
        <div className="space-y-3">
          <a href={'tel:+' + brand.whatsappNumber} className="contact-method group"><Phone size={21} aria-hidden="true" className="text-emerald-700 mt-1 shrink-0" /><span><span className="block text-xs text-neutral-500 mb-1">Call Christine</span><span className="font-bold group-hover:underline">{brand.phone}</span></span></a>
          <a href={'mailto:' + brand.email} className="contact-method group"><Mail size={21} aria-hidden="true" className="text-emerald-700 mt-1 shrink-0" /><span className="min-w-0"><span className="block text-xs text-neutral-500 mb-1">Email</span><span className="font-bold break-all group-hover:underline">{brand.email}</span></span></a>
          <a href={'https://wa.me/' + brand.whatsappNumber} target="_blank" rel="noopener noreferrer" className="contact-method group"><MessageCircle size={21} aria-hidden="true" className="text-emerald-700 mt-1 shrink-0" /><span><span className="block text-xs text-neutral-500 mb-1">WhatsApp</span><span className="font-bold group-hover:underline">Start a conversation ↗</span><span className="sr-only"> (opens in a new tab)</span></span></a>
          <a href={brand.facebookUrl} target="_blank" rel="noopener noreferrer" className="contact-method group"><FacebookIcon width={21} height={21} className="text-emerald-700 mt-1 shrink-0" /><span><span className="block text-xs text-neutral-500 mb-1">Follow our updates</span><span className="font-bold group-hover:underline">Find us on Facebook ↗</span><span className="sr-only"> (opens in a new tab)</span></span></a>
          <div className="contact-method"><MapPin size={21} aria-hidden="true" className="text-emerald-700 mt-1 shrink-0" /><span><span className="block text-xs text-neutral-500 mb-1">Based at</span><span className="text-sm leading-relaxed">{brand.location}</span></span></div>
        </div>
      </section>
      <ContactDraft key={topic + property + area} initialTopic={topic} property={property} area={area} />
    </div>
  </div>;
}
