import { CheckCircle2, type LucideIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = Omit<ComponentProps<'input'>, 'type' | 'className' | 'children'> & {
  label: ReactNode;
  /** card — radio-card шага квиза (min 72 px, выбранная — рамка accent + CheckCircle2) */
  card?: boolean;
  /** необязательная предметная иконка слева (только card) */
  icon?: LucideIcon;
  tone?: 'light' | 'dark';
  className?: string;
};

/** Radio 24×24 с внутренней точкой 8 px; вариант card — для квиза. */
export function Radio({ label, card, icon: Icon, tone = 'light', className, ...input }: Props) {
  if (card) {
    return (
      <label
        className={cn(
          'flex min-h-quiz-option cursor-pointer items-center gap-4 rounded-md border border-line bg-surface p-4 text-ink transition-colors duration-base hover:border-muted has-checked:border-accent has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-accent',
          className,
        )}
      >
        <input type="radio" className="peer sr-only" {...input} />
        {Icon ? <Icon aria-hidden="true" className="size-icon-lg shrink-0 text-muted" strokeWidth={2} /> : null}
        <span className="text-label font-semibold">{label}</span>
        <CheckCircle2 aria-hidden="true" className="ml-auto size-icon-lg shrink-0 text-accent opacity-0 peer-checked:opacity-100" strokeWidth={2} />
      </label>
    );
  }
  return (
    <label
      className={cn(
        'flex min-h-12 cursor-pointer items-center gap-3 rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-accent has-disabled:cursor-default',
        tone === 'dark' ? 'text-surface' : 'text-ink',
        className,
      )}
    >
      <input type="radio" className="peer sr-only" {...input} />
      <span className="grid size-6 shrink-0 place-items-center rounded-full border border-muted bg-surface transition-colors duration-base peer-checked:border-accent peer-checked:bg-accent peer-disabled:border-line peer-disabled:bg-canvas peer-checked:[&>span]:opacity-100">
        <span className="size-dot rounded-full bg-surface opacity-0" />
      </span>
      <span className="text-body">{label}</span>
    </label>
  );
}
