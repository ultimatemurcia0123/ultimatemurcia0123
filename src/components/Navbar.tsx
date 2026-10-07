'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const links = [['/properties', 'Properties'], ['/resorts', 'Areas'], ['/services', 'How we help'], ['/about', 'About'], ['/contact', 'Contact']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const active = (href: string) => pathname === href || pathname.startsWith(href + '/');
  return <header className="sticky top-0 z-50 bg-black border-b border-white/10 py-2" onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
  }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5">
      <BrandLogo variant="light" />
      <nav aria-label="Main navigation" className="hidden lg:flex gap-6 text-sm font-semibold text-neutral-200">
        {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} className={'py-3 ' + (active(href) ? 'text-[#00F34A]' : 'hover:text-[#00F34A]')}>{label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Link href="/contact?intent=list-property" className="action-primary text-xs">Sell your property <ArrowRight size={15} /></Link></div>
      <button ref={menuButton} className="lg:hidden text-white p-3" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden px-5 py-4 border-t border-white/10 text-white max-h-[calc(100dvh-90px)] overflow-y-auto overscroll-contain">
      {links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? 'page' : undefined} className={'block py-3 hover:text-[#00F34A] ' + (active(href) ? 'text-[#00F34A]' : '')}>{label}</Link>)}
      <Link href="/contact?intent=list-property" onClick={() => setOpen(false)} className="action-primary mt-3">Sell your property <ArrowRight size={15} /></Link>
    </nav>}
  </header>;
}
