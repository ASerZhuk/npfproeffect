import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  /** номер секции в метке (колонка 1; на 1024 — строка над заголовком) */
  number: string;
  id: string;
  title: string;
  lead?: string;
  tone?: 'light' | 'dark';
  className?: string;
  children: ReactNode;
};

/** Заголовок над содержимым на всю ширину контейнера. */
export function SplitSection({ id, title, lead, tone = 'light', className, children }: Props) {
  const dark = tone === 'dark';
  return (
    <div className={cn('space-y-6', className)}>
      <div>
        <h2 id={id} className={cn('font-display text-h2 font-semibold', dark ? 'text-surface' : 'text-ink')}>
          {title}
        </h2>
        {lead ? <p className={cn('mt-3 max-w-lead text-body', dark ? 'text-canvas' : 'text-muted')}>{lead}</p> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
