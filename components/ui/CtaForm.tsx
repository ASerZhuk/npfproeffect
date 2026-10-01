'use client';

import { ArrowRight, CheckCircle2, CircleAlert } from 'lucide-react';
import { useEffect, useRef, useState, type FocusEvent, type FormEvent } from 'react';
import { COMPANY } from '@/content/site';
import { formatPhone, isValidPhone } from '@/lib/phone';
import { Button } from './Button';
import { Field } from './Field';
import { ConsentCheckbox, requireConsent } from './ConsentCheckbox';
import { FileDrop } from './FileDrop';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Props = {
  /** метка источника заявки для аналитики/CRM */
  source?: string;
  buttonLabel?: string;
  attachLabel?: string;
  /** dark — форма на тёмном фоне (G-03), light — на canvas/surface */
  tone?: 'dark' | 'light';
  successTitle?: string;
  successText?: string;
  /** скрытые значения, уходящие вместе с заявкой (например, выбранный тариф) */
  hiddenFields?: Record<string, string>;
};

const validators = {
  name: (v: string) => (v.trim().length < 2 ? 'Укажите имя' : ''),
  phone: (v: string) => (isValidPhone(v) ? '' : 'Укажите телефон полностью'),
};

/**
 * G-03: форма «Имя / Телефон / файл». Состояния: ошибка полей (blur + submit), отправка, ошибка сети, успех.
 * Отправка — POST /api/lead (заглушка). После успеха фокус переводится на заголовок подтверждения.
 */
export function CtaForm({
  source = 'cta',
  buttonLabel = 'Получить расчёт',
  attachLabel = 'Можно приложить ТЗ, фото оборудования или паспорт станка',
  tone = 'dark',
  successTitle = 'Спасибо! Заявка принята',
  successText = 'Инженер позвонит в течение дня',
  hiddenFields,
}: Props) {
  const dark = tone === 'dark';
  const [status, setStatus] = useState<Status>('idle');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const key = e.target.name as 'name' | 'phone';
    if (key in validators) setErrors((cur) => ({ ...cur, [key]: validators[key](e.target.value) }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = { name: validators.name(String(data.get('name') ?? '')), phone: validators.phone(String(data.get('phone') ?? '')) };
    setErrors(next);
    if (next.name || next.phone) {
      (form.elements.namedItem(next.name ? 'name' : 'phone') as HTMLElement | null)?.focus();
      return;
    }
    if (!requireConsent(form)) return;
    data.set('source', source);
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-accent bg-surface p-6 text-ink md:p-8">
        <CheckCircle2 aria-hidden="true" className="size-icon-lg text-accent" strokeWidth={2} />
        <h3 ref={successRef} tabIndex={-1} className="mt-4 font-display text-h4 font-semibold outline-offset-4">
          {successTitle}
        </h3>
        <p className="mt-2 text-body text-muted">{successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === 'submitting'} className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
      <Field id={`cta-${source}-name`} name="name" label="Имя" autoComplete="name" tone={dark ? 'dark' : 'light'} error={errors.name} onBlur={onBlur} required />
      <Field
        id={`cta-${source}-phone`}
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        label="Телефон"
        tone={dark ? 'dark' : 'light'}
        value={phone}
        onChange={(e) => setPhone(formatPhone(e.target.value))}
        error={errors.phone}
        onBlur={onBlur}
        required
      />
      {hiddenFields ? Object.entries(hiddenFields).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />) : null}
      {status === 'error' ? (
        <p role="alert" className="flex items-start gap-2 rounded-md border border-surface p-4 text-body text-surface md:col-span-2 xl:col-span-3">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-icon shrink-0" strokeWidth={2} />
          <span>
            Не удалось отправить заявку. Попробуйте ещё раз или позвоните: {COMPANY.phones[0].display}
          </span>
        </p>
      ) : null}
      <Button type="submit" fullWidth disabled={status === 'submitting'} trailingIcon={ArrowRight} className="md:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:mt-7 xl:px-4">
        {status === 'submitting' ? 'Отправляем…' : buttonLabel}
      </Button>
      <FileDrop name="file" variant="inline" label={attachLabel} tone={dark ? 'dark' : 'light'} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg" className="md:col-span-2 xl:col-span-3" />
      <ConsentCheckbox tone={dark ? 'dark' : 'light'} className="md:col-span-2 xl:col-span-3" />
    </form>
  );
}
