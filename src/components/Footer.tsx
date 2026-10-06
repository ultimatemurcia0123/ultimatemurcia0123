import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { SITE_CONTENT } from '@/data/site-content';

export default function Footer() {
  const { brand } = SITE_CONTENT;
  return <footer className="bg-[#050505] text-neutral-300 border-t border-white/10">
    <div className="page-shell py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] gap-9">
        <div><BrandLogo variant="light" /><p className="mt-5 text-sm leading-relaxed max-w-sm text-neutral-400">Property sales and a personal property finding service in Murcia and Alicante.</p></div>
        <nav aria-label="Footer" className="text-sm"><h2 className="text-white font-bold mb-4">Explore</h2><ul className="space-y-3">
          {[['/properties','Properties'],['/resorts','Areas & resorts'],['/services','How we help'],['/about','About us'],['/contact?intent=list-property','Sell your property']].map(([href,label]) => <li key={href}><Link href={href} className="hover:text-[#00F34A]">{label}</Link></li>)}
        </ul></nav>
        <div className="text-sm space-y-3"><h2 className="text-white font-bold mb-4">Talk to the team</h2><a className="block hover:text-white" href={'tel:+' + brand.whatsappNumber}>{brand.phone}</a><a className="block break-all hover:text-white" href={'mailto:' + brand.email}>{brand.email}</a><p className="text-neutral-400 leading-relaxed">{brand.location}</p><Link href="/contact" className="inline-block text-[#00F34A] hover:underline">Get in touch →</Link></div>
      </div>
      <div className="border-t border-white/10 mt-9 pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Ultimate Murcia Property Sales.</div>
    </div>
  </footer>;
}
