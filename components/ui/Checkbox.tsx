import { Check } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = Omit<ComponentProps<'input'>, 'type' | 'className' | 'children'> & { label: ReactNode; tone?: 'light' | 'dark'; className?: string };

/** Checkbox 24×24; вся строка (min 48 px) кликабельна. */
export function Checkbox({ label, tone = 'light', className, ...input }: Props) {
  return (
    <label
      className={cn(
        'flex min-h-12 cursor-pointer items-center gap-3 rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-accent has-disabled:cursor-default',
        tone === 'dark' ? 'text-surface' : 'text-ink',
        className,
      )}
    >
      <input type="checkbox" className="peer sr-only" {...input} />
      <span className="grid size-6 shrink-0 place-items-center rounded-sm border border-muted bg-surface transition-colors duration-base peer-checked:border-accent peer-checked:bg-accent peer-disabled:border-line peer-disabled:bg-canvas peer-checked:[&>svg]:opacity-100">
        <Check aria-hidden="true" className="size-4 text-surface opacity-0" strokeWidth={2} />
      </span>
      <span className="text-body">{label}</span>
    </label>
  );
}
