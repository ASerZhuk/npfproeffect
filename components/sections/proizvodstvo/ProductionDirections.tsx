import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { PRODUCTION_CARDS } from '@/content/proizvodstvo';

/** 05-02. Два направления производства: РЭА и РТК. Фото 4:3 (≤768) / 220 px (1024+), min-height 440. */
export function ProductionDirections() {
  return (
    <Section labelledBy="production-dirs-title">
      <h2 id="production-dirs-title" className="sr-only">
        Два направления производства
      </h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-6">
        {PRODUCTION_CARDS.map((c) => (
          <li key={c.id} className="flex">
            <article className="flex w-full flex-col overflow-hidden rounded-md border border-line bg-surface">
              <div className="p-card">
                <h3 className="font-display text-h3 font-semibold text-ink">{c.title}</h3>
                <ul className="mt-4 space-y-3 text-body text-ink">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span aria-hidden="true" className="text-muted">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mx-5 mb-5 h-30 overflow-hidden rounded-sm border border-line">
                <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 1280px) 650px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
