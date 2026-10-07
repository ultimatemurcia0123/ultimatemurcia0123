import type { ReactNode } from 'react';
import Image from 'next/image';

export default function PageHero({ eyebrow, title, highlight, description, image, children }: {
  eyebrow: string; title: string; highlight?: string; description?: string;
  image?: string; children?: ReactNode;
}) {
  return <section className={'page-hero relative isolate overflow-hidden bg-black text-white' + (image ? ' page-hero-with-image' : '')}>
    {image && <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Image src={image} alt="" fill sizes="100vw" loading="eager" fetchPriority="high" className="object-cover object-[65%_center]" />
      <div className="page-hero-shade absolute inset-0" />
    </div>}
    <div className="page-shell page-hero-content">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-balance">
        {title}{highlight && <> <span className="text-[#00F34A]">{highlight}</span></>}
      </h1>
      {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-200">{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </div>
  </section>;
}
