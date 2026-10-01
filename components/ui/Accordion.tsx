'use client';

import { Minus, Plus } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type AccordionItem = { id: string; question: string; answer: ReactNode };

type Props = {
  items: AccordionItem[];
  /** разрешить несколько открытых пунктов (по умолчанию да, §8.14) */
  multiple?: boolean;
  defaultOpen?: string[];
  /** уровень заголовка вопроса в иерархии страницы */
  headingLevel?: 3 | 4;
  className?: string;
};

/** FAQ-аккордеон (§8.14): строка ≥72 px, Plus/Minus, вопрос h4/label, ответ ≤690 px. */
export function Accordion({ items, multiple = true, defaultOpen = [], headingLevel = 3, className }: Props) {
  const base = useId();
  const [open, setOpen] = useState<string[]>(defaultOpen);
  const H = `h${headingLevel}` as 'h3' | 'h4';
  const toggle = (id: string) =>
    setOpen((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : multiple ? [...cur, id] : [id]));

  return (
    <div className={cn('grid items-start gap-3 md:grid-cols-2', className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        const btnId = `${base}-${item.id}-btn`;
        const panelId = `${base}-${item.id}-panel`;
        return (
          <div key={item.id} className={cn('rounded-md border bg-surface px-5 transition-[border-color,box-shadow] duration-base', isOpen ? 'border-accent shadow-card' : 'border-line hover:border-accent')}>
            <H className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="group flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-label text-ink transition-colors duration-base hover:text-accent"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className={cn('toggle-icon relative size-8 shrink-0 rounded-full transition-colors duration-base', isOpen ? 'bg-accent-tint text-accent' : 'bg-canvas text-muted')}>
                  <Plus data-visible={!isOpen} className="size-8 p-1.5" strokeWidth={2} />
                  <Minus data-visible={isOpen} className="size-8 p-1.5" strokeWidth={2} />
                </span>
              </button>
            </H>
            <div id={panelId} role="region" aria-labelledby={btnId} aria-hidden={!isOpen} inert={!isOpen} data-open={isOpen} className="disclosure-panel">
              <div className="disclosure-content">
                <div className="max-w-lead pb-6 text-body text-ink">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
