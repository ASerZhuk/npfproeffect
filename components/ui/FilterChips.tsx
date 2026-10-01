'use client';

import { Check, X } from 'lucide-react';
import { cn } from '@/lib/cn';

export type ChipOption = { value: string; label: string; disabled?: boolean };

type Props = {
  /** название группы для скринридера */
  label: string;
  options: ChipOption[];
  /** выбранные значения */
  value: string[];
  onChange: (next: string[]) => void;
  /** одиночный выбор (по умолчанию) или мульти */
  multiple?: boolean;
  /** значение «Все» — сбрасывает выбор в одиночном режиме */
  allValue?: string;
  resetLabel?: string;
  /** встроенная кнопка сброса (по умолчанию да); false — если сброс выведен снаружи */
  showReset?: boolean;
  className?: string;
};

/** Фильтр-чипы (§8.8, §8.15): 44 px, active = рамка/текст accent + Check, кнопка сброса только при изменении. */
export function FilterChips({ label, options, value, onChange, multiple, allValue, resetLabel = 'Сбросить фильтры', showReset = true, className }: Props) {
  const changed = allValue ? !(value.length === 1 && value[0] === allValue) && value.length > 0 : value.length > 0;
  const toggle = (v: string) => {
    if (multiple) onChange(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
    else onChange([v]);
  };
  return (
    <div role="group" aria-label={label} className={cn('flex flex-wrap items-center gap-3', className)}>
      {options.map((o) => {
        const active = value.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            disabled={o.disabled}
            onClick={() => toggle(o.value)}
            className={cn(
              'inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-nav transition-colors duration-base disabled:border-line disabled:text-muted',
              active ? 'border-dark bg-dark text-surface' : 'border-line bg-surface text-ink hover:border-muted',
            )}
          >
            {active ? <Check aria-hidden="true" className="size-4" strokeWidth={2} /> : null}
            {o.label}
          </button>
        );
      })}
      {changed && showReset ? (
        <button
          type="button"
          onClick={() => onChange(allValue ? [allValue] : [])}
          className="inline-flex min-h-11 items-center gap-2 px-2 text-label font-semibold text-ink underline-offset-4 transition-colors duration-base hover:text-accent hover:underline"
        >
          <X aria-hidden="true" className="size-4" strokeWidth={2} />
          {resetLabel}
        </button>
      ) : null}
    </div>
  );
}
