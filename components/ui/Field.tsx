import { CheckCircle2, ChevronDown, CircleAlert } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'light' | 'dark';

type ShellProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

/** Общая оболочка поля: label над полем, подсказка и ошибка (иконка + текст, не только цвет). */
export function FieldShell({ id, label, hint, error, tone = 'light', className, children }: ShellProps) {
  const dark = tone === 'dark';
  return (
    <div className={className}>
      <label htmlFor={id} className={cn('mb-2 block text-label font-semibold', dark ? 'text-surface' : 'text-ink')}>
        {label}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className={cn('mt-2 font-mono text-meta', dark ? 'text-canvas' : 'text-muted')}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className={cn('mt-2 flex items-start gap-2 font-mono text-meta', dark ? 'text-surface' : 'text-ink')}>
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}

/** Единые стили контрола (§8.5). */
export const controlClass =
  'block w-full rounded-md border border-line bg-surface px-4 text-body text-ink transition-colors duration-base placeholder:text-muted hover:border-muted focus:border-accent focus-visible:outline-offset-2 disabled:bg-canvas disabled:text-muted disabled:hover:border-line read-only:bg-canvas aria-invalid:border-ink aria-invalid:ring-1 aria-invalid:ring-inset aria-invalid:ring-ink';

type CommonField = { label: string; hint?: string; error?: string; success?: boolean; tone?: Tone; wrapperClassName?: string };

const describedBy = (id: string, hint?: string, error?: string) => (error ? `${id}-error` : hint ? `${id}-hint` : undefined);

type InputProps = CommonField & Omit<ComponentProps<'input'>, 'className'> & { id: string; className?: string };

export function Field({ label, hint, error, success, tone, wrapperClassName, id, required, className, ...input }: InputProps) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} tone={tone} className={wrapperClassName}>
      <div className="relative">
        <input
          id={id}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, hint, error)}
          className={cn(controlClass, 'h-field', success && 'pr-12', className)}
          {...input}
        />
        {success && !error ? <CheckCircle2 aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 size-icon -translate-y-1/2 text-accent" strokeWidth={2} /> : null}
      </div>
    </FieldShell>
  );
}

type TextareaProps = CommonField & Omit<ComponentProps<'textarea'>, 'className'> & { id: string; className?: string };

export function Textarea({ label, hint, error, tone, wrapperClassName, id, required, className, ...area }: TextareaProps) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} tone={tone} className={wrapperClassName}>
      <textarea
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlClass, 'min-h-textarea-min py-3', className)}
        {...area}
      />
    </FieldShell>
  );
}

type SelectProps = CommonField & Omit<ComponentProps<'select'>, 'className'> & { id: string; className?: string; options: { value: string; label: string }[] };

export function Select({ label, hint, error, tone, wrapperClassName, id, required, className, options, ...select }: SelectProps) {
  return (
    <FieldShell id={id} label={label} hint={hint} error={error} tone={tone} className={wrapperClassName}>
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, hint, error)}
          className={cn(controlClass, 'h-field appearance-none pr-12', className)}
          {...select}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 size-icon -translate-y-1/2 text-ink" strokeWidth={2} />
      </div>
    </FieldShell>
  );
}
