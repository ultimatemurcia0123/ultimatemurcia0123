import type { ReactNode } from 'react';

export default function PageHero({ eyebrow, title, highlight, description, image, children }: {
  eyebrow: string; title: string; highlight?: string; description?: string;
  image?: string; children?: ReactNode;
}) {
  return <section className="relative isolate overflow-hidden bg-black text-white">
    {image && <div className="absolute inset-0 -z-10" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
    </div>}
    <div className="page-shell py-12 sm:py-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
        {title}{highlight && <> <span className="text-[#00F34A]">{highlight}</span></>}
      </h1>
      {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300">{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </div>
  </section>;
}
