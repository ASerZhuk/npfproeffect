import { Factory } from 'lucide-react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MODERN_CLASSES } from '@/content/modernizaciya';

/** 04-03. Что модернизируем: 4 карточки (4 / 2×2 / 1), миниатюра 120×92, модели моно-шрифтом. */
export function ModernClasses() {
  return (
    <Section tone="surface" labelledBy="modern-classes-title">
      <SectionHeader number="03" id="modern-classes-title" title="Что модернизируем" />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {MODERN_CLASSES.map((c) => (
          <li key={c.title} className="flex">
            <article className="flex w-full flex-col gap-6 rounded-md border border-line bg-surface p-card">
              <div className="flex h-23 w-30 items-center justify-center overflow-hidden rounded-sm border border-line bg-canvas">
                {c.thumb ? (
                  c.thumb.fit === 'contain' ? (
                    <Image src={c.thumb.image.src} alt={c.thumb.image.alt} width={c.thumb.image.width} height={c.thumb.image.height} sizes="120px" unoptimized className="h-auto max-h-full w-auto max-w-full object-contain p-1" />
                  ) : (
                    <Image src={c.thumb.image.src} alt={c.thumb.image.alt} width={c.thumb.image.width} height={c.thumb.image.height} sizes="120px" className="size-full object-cover" />
                  )
                ) : (
                  <Factory aria-hidden="true" className="size-icon-lg text-muted" strokeWidth={2} />
                )}
              </div>
              <div>
                <h3 className="font-display text-h4 font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 font-mono text-body tabular text-muted">{c.models}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
