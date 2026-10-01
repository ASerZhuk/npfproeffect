'use client';

import { ArrowRight, Boxes, Clock3, Gauge, Headset, RefreshCw, ShieldCheck, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TARIFFS, TARIFF_NOTE, TARIFF_PRICE_LABEL } from '@/content/uslugi';
import { cn } from '@/lib/cn';
import { useTariff } from './TariffContext';

const ICONS: Record<(typeof TARIFFS)[number]['items'][number]['icon'], LucideIcon> = { ShieldCheck, Headset, Clock3, Boxes, RefreshCw, Gauge };

/** 06-03. Сервисный контракт (тёмная секция): три тарифа. «Запросить» передаёт тариф в G-03 скрытым значением. Цены — «по запросу» (блокер). */
export function ServiceContract() {
  const { request } = useTariff();
  return (
    <Section labelledBy="service-contract-title">
      <SectionHeader number="03" id="service-contract-title" title="Сервисный контракт" lead="Постгарантийное ТО систем — меньше отказов и простоев" />
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {TARIFFS.map((t) => (
          <li key={t.id} className="flex">
            <article className={cn('flex min-h-75 w-full flex-col rounded-md border bg-surface p-card', t.highlight ? 'border-accent ring-1 ring-accent' : 'border-line')}>
              <h3 className="font-display text-h3 font-semibold text-ink">{t.name}</h3>
              <p className="mt-3 text-body text-muted">{TARIFF_PRICE_LABEL}</p>
              <ul className="mt-6 space-y-3">
                {t.items.map((it) => {
                  const Icon = ICONS[it.icon];
                  return (
                    <li key={it.text} className="flex items-center gap-3 text-body text-ink">
                      <Icon aria-hidden="true" className="size-icon shrink-0" strokeWidth={2} />
                      {it.text}
                    </li>
                  );
                })}
              </ul>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                trailingIcon={ArrowRight}
                onClick={() => request(t.name)}
                aria-label={`Запросить тариф «${t.name}»`}
                className={cn('mt-auto', !t.highlight && 'bg-dark hover:bg-dark-alt')}
              >
                Запросить
              </Button>
            </article>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-meta text-muted">{TARIFF_NOTE}</p>
    </Section>
  );
}
