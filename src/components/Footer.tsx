import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { SITE_CONTENT } from '@/data/site-content';

export default function Footer() {
  const { brand } = SITE_CONTENT;
  return <footer className="bg-black text-neutral-300 border-t border-white/10">
    <div className="page-shell py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] gap-9">
        <div><BrandLogo variant="light" /><p className="mt-5 text-sm leading-relaxed max-w-sm text-neutral-400">Property sales and a personal property finding service in Murcia and Alicante.</p>
          <a href="https://www.facebook.com/ultimatemurcia/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 mt-4 text-sm font-semibold text-[#00F34A] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00F34A]">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg> Follow us on Facebook <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <nav aria-label="Footer" className="text-sm"><h2 className="text-white font-bold mb-4">Explore</h2><ul className="space-y-3">
          {[['/properties','Properties'],['/resorts','Areas & resorts'],['/services','How we help'],['/about','About us'],['/contact?intent=list-property','Sell your property']].map(([href,label]) => <li key={href}><Link href={href} className="hover:text-[#00F34A]">{label}</Link></li>)}
        </ul></nav>
        <div className="text-sm space-y-3"><h2 className="text-white font-bold mb-4">Talk to the team</h2><a className="block hover:text-white" href={'tel:+' + brand.whatsappNumber}>{brand.phone}</a><a className="block break-all hover:text-white" href={'mailto:' + brand.email}>{brand.email}</a><p className="text-neutral-400 leading-relaxed">{brand.location}</p><Link href="/contact" className="inline-block text-[#00F34A] hover:underline">Get in touch →</Link></div>
      </div>
      <div className="border-t border-white/10 mt-9 pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Ultimate Murcia Property Sales.</div>
    </div>
  </footer>;
}
