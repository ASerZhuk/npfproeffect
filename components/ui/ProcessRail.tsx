import type { LucideIcon } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { ProcessStep } from '@/content/process';
import { cn } from '@/lib/cn';

/** Шаг: либо имя иконки из PROCESS_STEPS, либо собственный компонент lucide (необязательный `Icon`). */
export type RailStep = Omit<ProcessStep, 'icon'> & { icon?: ProcessStep['icon']; Icon?: LucideIcon };

type Props = { steps: RailStep[]; headingLevel?: 3 | 4; tone?: 'light' | 'dark'; className?: string };

/**
 * Горизонтальная последовательность шагов (process-rail): верхняя линия и номерные узлы.
 * 1280+ — шаги в ряд; 1024 — три колонки; 768 — две; 390 — одна.
 */
export function ProcessRail({ steps, headingLevel = 3, tone = 'light', className }: Props) {
  const H = `h${headingLevel}` as 'h3' | 'h4';
  const dark = tone === 'dark';
  return (
    <ol style={{ '--process-columns': steps.length } as CSSProperties} className={cn('grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(var(--process-columns),minmax(0,1fr))]', className)}>
      {steps.map((s) => {
        return (
          <li key={s.n} className={cn('relative px-4 md:text-center before:absolute before:inset-x-0 before:top-5 before:h-px', dark ? 'before:bg-line-dark' : 'before:bg-line')}>
              <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-label font-bold tabular text-ink">{s.n}</span>
            <H className={cn('mt-4 font-display text-h4 font-semibold', dark ? 'text-surface' : 'text-ink')}>{s.title}</H>
            <p className={cn('mt-2 text-body', dark ? 'text-canvas' : 'text-muted')}>{s.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
