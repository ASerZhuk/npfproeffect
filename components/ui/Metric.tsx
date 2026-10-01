import { cn } from '@/lib/cn';

type Props = {
  value: string;
  label: string;
  /** «из акта внедрения» — обязателен рядом с подтверждёнными результатами */
  source?: string;
  /** одна ключевая цифра экрана может быть accent */
  highlight?: boolean;
  tone?: 'light' | 'dark';
  className?: string;
};

/** Доказательная цифра: metric + подпись, верхняя линия 1 px, без анимации счётчиком. */
export function Metric({ value, label, source, highlight, tone = 'light', className }: Props) {
  const dark = tone === 'dark';
  return (
    <div className={cn('min-w-0 rounded-md border p-6', dark ? 'border-line-dark bg-dark-alt' : 'border-line bg-surface', className)}>
      <p className={cn('font-display text-metric tabular', dark ? 'text-accent-light' : highlight ? 'text-accent' : 'text-ink')}>{value}</p>
      <p className={cn('mt-2 text-body', dark ? 'text-canvas' : 'text-muted')}>{label}</p>
      {source ? <p className={cn('mt-2 font-mono text-meta', dark ? 'text-canvas' : 'text-muted')}>{source}</p> : null}
    </div>
  );
}
