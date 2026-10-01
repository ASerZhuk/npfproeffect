'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ROUTES } from '@/content/nav';
import { cn } from '@/lib/cn';
import { Checkbox } from './Checkbox';

/** Обязательное согласие на обработку ПДн (152-ФЗ). Ошибка показывается при проверке через requireConsent(). */
export function ConsentCheckbox({ tone = 'light', className }: { tone?: 'light' | 'dark'; className?: string }) {
  const [error, setError] = useState(false);
  const dark = tone === 'dark';
  return (
    <div className={className}>
      <Checkbox
        name="consent"
        value="yes"
        required
        tone={tone}
        aria-invalid={error || undefined}
        onInvalid={(e) => {
          e.preventDefault();
          setError(true);
        }}
        onChange={(e) => e.target.checked && setError(false)}
        label={
          <span className="text-meta">
            Согласен на обработку персональных данных в соответствии с{' '}
            <Link href={ROUTES.privacy} target="_blank" className={cn('underline underline-offset-4', dark ? 'hover:text-canvas' : 'hover:text-accent')}>
              политикой конфиденциальности
            </Link>
          </span>
        }
      />
      {error ? (
        <p role="alert" className={cn('mt-1 text-meta', dark ? 'text-surface' : 'text-ink')}>
          Подтвердите согласие, чтобы отправить заявку
        </p>
      ) : null}
    </div>
  );
}

/** true, если согласие отмечено; иначе подсвечивает чекбокс и ставит на него фокус. */
export function requireConsent(form: HTMLFormElement) {
  const c = form.elements.namedItem('consent') as HTMLInputElement | null;
  if (!c || c.checkValidity()) return true;
  c.focus();
  return false;
}
