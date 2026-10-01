'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { DirectionMarker } from '@/components/ui/DirectionMarker';
import { SOLUTION_CARDS, SOLUTION_TABS, type SolutionCardData, type SolutionTabId } from '@/content/solutions';
import { PROJECT_FILTER_INDUSTRIES } from '@/content/projects';
import { cn } from '@/lib/cn';

const INDUSTRY_LABEL = Object.fromEntries(PROJECT_FILTER_INDUSTRIES.map((i) => [i.value, i.label]));

function CardBody({ card, tab }: { card: SolutionCardData; tab: SolutionTabId }) {
  if (tab === 'tasks') {
    return (
      <div className="mt-4">
        <p className="font-mono text-meta text-muted">Типовая задача</p>
        <p className="mt-2 max-w-tech text-body text-ink">{card.task}</p>
      </div>
    );
  }
  const rows = tab === 'industries' ? card.industries.map((id) => INDUSTRY_LABEL[id]) : card.items;
  return (
    <>
      {tab === 'industries' ? <p className="mt-4 font-mono text-meta text-muted">Отрасли реализованных проектов</p> : null}
      <ul className={cn('max-w-tech space-y-1 text-body text-ink', tab === 'industries' ? 'mt-2' : 'mt-4')}>
        {rows.map((r) => (
          <li key={r} className="flex gap-2">
            <span aria-hidden="true">—</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

/** 02-02. Табы «По направлениям / По задачам / По отраслям» меняют вид карточек; число и порядок карточек не меняются. */
export function SolutionsFilters() {
  const base = useId();
  const [tab, setTab] = useState<SolutionTabId>('directions');
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next = index;
    if (e.key in keys) next = (index + keys[e.key] + SOLUTION_TABS.length) % SOLUTION_TABS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = SOLUTION_TABS.length - 1;
    else return;
    e.preventDefault();
    const target = SOLUTION_TABS[next];
    setTab(target.id);
    refs.current[target.id]?.focus();
  };

  return (
    <section id="solutions-filters" aria-labelledby="solutions-filters-title" className="scroll-mt-20 bg-canvas py-section">
      <Container>
        <h2 id="solutions-filters-title" className="sr-only">
          Шесть направлений
        </h2>
        <Grid>
          <div className="col-span-4 lg:col-span-8 xl:col-span-12">
            <div role="tablist" aria-label="Вид представления решений" className="grid grid-cols-1 gap-2 md:flex md:gap-3">
              {SOLUTION_TABS.map((t, i) => {
                const active = t.id === tab;
                return (
                  <button
                    key={t.id}
                    ref={(el) => {
                      refs.current[t.id] = el;
                    }}
                    id={`${base}-tab-${t.id}`}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    aria-controls={`${base}-panel`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setTab(t.id)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={cn(
                      'min-h-11 rounded-sm border px-4 py-2 text-label font-semibold transition-colors duration-base',
                      active ? 'border-dark bg-dark text-surface' : 'border-line bg-card text-muted hover:border-muted',
                    )}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Grid>
        <div id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-tab-${tab}`} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SOLUTION_CARDS.map((card) => (
            <article
              key={card.id}
              id={`solution-${card.id}`}
              className="group relative flex scroll-mt-20 flex-col rounded-md border border-line bg-surface p-card transition-card focus-within:border-accent hover:border-accent motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 motion-safe:active:translate-y-0"
            >
              <div className="flex flex-col gap-6">
                <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-sm border border-line bg-canvas">
                  {card.thumbFit === 'contain' ? (
                    <Image src={card.thumb.src} alt={card.thumb.alt} width={card.thumb.width} height={card.thumb.height} sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw" unoptimized className="h-auto max-h-full w-auto max-w-full object-contain p-2" />
                  ) : (
                    <Image src={card.thumb.src} alt={card.thumb.alt} width={card.thumb.width} height={card.thumb.height} sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw" className="size-full object-cover" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start gap-3">
                    <DirectionMarker direction={card.direction} size="lg" />
                    <h3 className="font-display text-h4 font-semibold text-ink">{card.title}</h3>
                  </div>
                  <CardBody card={card} tab={tab} />
                </div>
              </div>
              <Link
                href={card.href}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-label font-semibold text-ink transition-card after:absolute after:inset-0 group-hover:text-accent group-focus-within:text-accent"
              >
                Подробнее
                <ArrowUpRight aria-hidden="true" className="size-icon transition-card motion-safe:group-hover:translate-x-1" strokeWidth={2} />
                <span className="sr-only">: {card.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
