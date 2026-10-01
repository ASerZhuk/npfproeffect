import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type DataColumn = {
  key: string;
  header: string;
  /** моно-шрифт для чисел и моделей */
  mono?: boolean;
  /** ширина колонки на desktop (tailwind-класс, например «w-1/3») */
  className?: string;
};

type Props = {
  columns: DataColumn[];
  rows: Record<string, ReactNode>[];
  /** подпись таблицы (видима скринридеру) */
  caption: string;
  className?: string;
};

/**
 * Таблица (§8.13): header 52 px на canvas, строки ≥64 px, только горизонтальные линии 1 px.
 * На 390 каждая строка — карточка с названием поля перед значением; горизонтального скролла нет.
 */
export function DataTable({ columns, rows, caption, className }: Props) {
  return (
    <div className={className}>
      <table className="hidden w-full border-collapse bg-surface text-left md:table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="h-th bg-dark">
            {columns.map((c) => (
              <th key={c.key} scope="col" className={cn('border-y border-dark px-4 text-nav font-semibold text-surface', c.className)}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="min-h-row border-b border-line align-top">
              {columns.map((c) => (
                <td key={c.key} className={cn('p-4 text-body text-ink', c.mono && 'font-mono tabular')}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="space-y-3 md:hidden" aria-label={caption}>
        {rows.map((row, i) => (
          <li key={i} className="rounded-md border border-line bg-surface p-5">
            <dl className="space-y-3">
              {columns.map((c) => (
                <div key={c.key}>
                  <dt className="font-mono text-meta text-muted">{c.header}</dt>
                  <dd className={cn('mt-1 text-body text-ink', c.mono && 'font-mono tabular')}>{row[c.key]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
