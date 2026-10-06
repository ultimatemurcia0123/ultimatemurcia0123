import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, KeyRound, Handshake, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = { title: 'Buying, selling & local support | Ultimate Murcia', description: 'Property finding in Murcia, selling enquiries and introductions to independent local service providers.' };
const services = [
  { id: 'buying', icon: Home, title: 'Find a home', description: 'Our property finding service is free. Tell us your budget, preferred areas and what matters to you, and we’ll help you explore suitable homes.', points: ['A search shaped around your needs', 'Help comparing areas and properties', 'Viewings arranged with the team'], label: 'Browse properties', href: '/properties' },
  { id: 'selling', icon: KeyRound, title: 'Sell your property', description: 'Thinking about selling? Share a few details about your home so we can discuss how to present it and reach interested buyers.', points: ['Talk through your property and plans', 'Discuss the listing and marketing approach', 'Agree the service and fees before you proceed'], label: 'Talk about selling', href: '/contact?intent=list-property' },
  { id: 'referrals', icon: Handshake, title: 'Find local support', description: 'Need help looking after your home? We can introduce you to independent local providers for property management and aftersales services.', points: ['Keyholding and property checks', 'Cleaning, pool and garden care', 'Maintenance and vehicle care referrals'], label: 'Ask for an introduction', href: '/contact?topic=Local+support' },
];
export default function ServicesPage() {
  return <div className="inner-page">
    <PageHero eyebrow="HOW WE HELP" title="Property help," highlight="kept simple." description="Support with your search, your sale and finding the right local people." image="/images/help-terrace-v2.webp" />
    <div className="page-shell page-section space-y-12">
      <div className="grid lg:grid-cols-3 gap-6">
        {services.map(({ id, icon: Icon, title, description, points, label, href }) => <section id={id} key={id} className="surface-card flex flex-col scroll-mt-28">
          <Icon className="mb-6 text-emerald-700" size={28} strokeWidth={1.6} />
          <h2 className="section-heading">{title}</h2><p className="page-copy mt-4">{description}</p>
          <ul className="my-6 space-y-3 text-sm text-neutral-700 list-disc pl-5 marker:text-emerald-600">{points.map(point => <li key={point}>{point}</li>)}</ul>
          <Link href={href} className="mt-auto inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline">{label}<ArrowRight size={16} /></Link>
        </section>)}
      </div>
      <p className="page-copy max-w-3xl">Property management and aftersales work are carried out by independent providers. Services, availability and fees are agreed directly with them.</p>
      <ContactCta title="Not sure where to start?" description="A short conversation about your plans is enough to get started." />
    </div>
  </div>;
}
