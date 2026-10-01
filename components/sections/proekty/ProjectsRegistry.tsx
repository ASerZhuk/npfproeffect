'use client';

import { ChevronDown, Download } from 'lucide-react';
import { useId, useState } from 'react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { REGISTRY, REGISTRY_PDF_URL, REGISTRY_PREVIEW, quoteCustomer } from '@/content/registry';
import { cn } from '@/lib/cn';

const placeOf = (customer: string) => REGISTRY.find((e) => e.customer === customer)?.place ?? '';

const toRow = (customer: string, works: string) => ({
  customer: (
    <>
      <span className="font-semibold">{quoteCustomer(customer)}</span>
      <span className="mt-1 block font-mono text-meta text-muted">{placeOf(customer)}</span>
    </>
  ),
  works,
});

const PREVIEW_ROWS = REGISTRY_PREVIEW.map((p) => toRow(p.customer, p.works));
const REST = REGISTRY.filter((e) => !REGISTRY_PREVIEW.some((p) => p.customer === e.customer));
const REST_ROWS = REST.map((e) => toRow(e.customer, `${e.title}. ${e.works}`));

/** 07-03. Реестр объектов: первые 4 строки как в прототипе, остальное раскрывается; на 390 — карточки с названиями полей. */
export function ProjectsRegistry() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <Section tone="surface" labelledBy="registry-title">
      <SectionHeader
        number="03"
        id="registry-title"
        title="Реестр объектов"
        lead="Полный список — для тендерной документации"
        action={
          REGISTRY_PDF_URL ? (
            <Button href={REGISTRY_PDF_URL} download variant="ghost" leadingIcon={Download}>
              Скачать PDF
            </Button>
          ) : null
        }
      />
      {/* Все строки в HTML (индексация, тендеры); свёрнутое состояние только скрывает строки после 4-й */}
      <div id={panelId} className={cn('mt-6', !open && '[&_li:nth-child(n+5)]:hidden [&_tbody_tr:nth-child(n+5)]:hidden')}>
        <DataTable
          caption="Реестр объектов: заказчики, объекты и состав работ"
          columns={[
            { key: 'customer', header: 'Заказчик', className: 'w-1/3' },
            { key: 'works', header: 'Объект / работы', className: 'w-2/3' },
          ]}
          rows={[...PREVIEW_ROWS, ...REST_ROWS]}
        />
      </div>
      {REST.length > 0 ? (
        <Button variant="secondary" size="lg" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)} className="mt-6 max-md:w-full">
          {open ? 'Свернуть реестр' : `… ещё ${REST.length}+ строк`}
          <ChevronDown aria-hidden="true" className={cn('size-icon transition-transform duration-base', open && 'rotate-180')} strokeWidth={2} />
        </Button>
      ) : null}
    </Section>
  );
}
