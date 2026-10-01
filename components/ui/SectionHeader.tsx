import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  /** номер секции в метке (колонка 1) */
  number: string;
  labelTitle?: string;
  /** id заголовка — для aria-labelledby секции */
  id: string;
  title: string;
  lead?: string;
  tone?: 'light' | 'dark';
  /** действие справа (колонки 10–12), например ссылка «Все проекты» */
  action?: ReactNode;
  className?: string;
};

/** Заголовок, описание и ссылка над содержимым секции. */
export function SectionHeader({ labelTitle, id, title, lead, tone = 'light', action, className }: Props) {
  const dark = tone === 'dark';
  const description = lead ?? (labelTitle ? title : undefined);
  return (
    <div className={cn('flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8', className)}>
      <div className="min-w-0 space-y-3">
        <h2 id={id} className={cn('font-display text-h2 font-semibold', dark ? 'text-surface' : 'text-ink')}>
          {labelTitle ?? title}
        </h2>
        {description ? <p className={cn('max-w-lead text-body', dark ? 'text-canvas' : 'text-muted')}>{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
