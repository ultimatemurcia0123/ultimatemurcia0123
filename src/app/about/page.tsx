import type { Metadata } from 'next';
import { MapPin, Search, MessagesSquare } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactCta from '@/components/ContactCta';
import { SITE_CONTENT } from '@/data/site-content';

export const metadata: Metadata = { title: 'About us | Ultimate Murcia', description: 'Meet Ultimate Murcia, a local property company helping buyers and sellers in Murcia and Alicante.' };
export default function AboutPage() {
  return <div className="inner-page">
    <PageHero eyebrow="ABOUT ULTIMATE MURCIA" title="Local people." highlight="Personal service." description="A property company based in Murcia, helping you find a home that suits your life." image="/images/contact-hero-v1.webp" />
    <div className="page-shell page-section space-y-12">
      <section className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
        <div className="space-y-5">
          <h2 className="section-heading">A search built around you</h2>
          <p className="page-copy">Ultimate Murcia helps buyers and sellers across Murcia and Alicante. From coastal apartments and golf resort homes to rural properties and new builds, we start with what you need.</p>
          <p className="page-copy">Our free property finding service helps you explore the options and arrange viewings. You can also speak to us about selling a home or finding independent local support after your purchase.</p>
        </div>
        <aside className="surface-card border-t-4 border-t-[#00D43E]">
          <h2 className="text-lg font-bold">Speak to Christine</h2>
          <p className="page-copy mt-3">{SITE_CONTENT.brand.location}</p>
          <a className="block mt-5 text-lg font-bold hover:underline" href={'tel:+' + SITE_CONTENT.brand.whatsappNumber}>{SITE_CONTENT.brand.phone}</a>
          <a className="block mt-2 text-sm break-all hover:underline" href={'mailto:' + SITE_CONTENT.brand.email}>{SITE_CONTENT.brand.email}</a>
        </aside>
      </section>
      <section className="grid md:grid-cols-3 gap-6" aria-label="Our approach">
        {[{ icon: MapPin, title: 'Local knowledge', text: 'Talk through the areas, homes and everyday details that matter to you.' }, { icon: Search, title: 'A personal search', text: 'Your budget, plans and preferences guide the properties we look at together.' }, { icon: MessagesSquare, title: 'Clear communication', text: 'Straightforward conversations about the service, fees and next steps.' }].map(({icon: Icon, title, text}) => <div key={title} className="surface-card"><Icon size={26} className="text-emerald-700 mb-5" /><h3 className="text-lg font-bold">{title}</h3><p className="page-copy mt-3">{text}</p></div>)}
      </section>
      <section id="testimonials" className="border-y border-neutral-200 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div><h2 className="text-lg font-bold">Hear from our clients</h2><p className="page-copy mt-2">Read the feedback published on our existing website.</p></div>
        <a href="https://ultimatemurcia.com/testimonials/" className="action-secondary">Read client feedback ↗</a>
      </section>
      <ContactCta />
    </div>
  </div>;
}
