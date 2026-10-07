import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ContactCta({ title = 'Let’s talk about your plans.', description = 'Tell us what you have in mind. We’ll help you work out the next step.', href = '/contact', label = 'Get in touch' }: {
  title?: string; description?: string; href?: string; label?: string;
}) {
  return <section className="contact-cta relative isolate overflow-hidden rounded-2xl bg-black p-7 sm:p-10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
    <div aria-hidden="true" className="absolute -z-10 -right-12 -top-20 h-64 w-64 rounded-full border border-white/10" />
    <div><h2 className="text-2xl font-bold tracking-tight">{title}</h2><p className="mt-3 text-sm text-neutral-300 leading-relaxed max-w-xl">{description}</p></div>
    <Link href={href} className="action-primary shrink-0 self-start sm:self-center">{label}<ArrowRight size={16} aria-hidden="true" /></Link>
  </section>;
}
