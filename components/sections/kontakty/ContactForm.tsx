'use client';

import { CheckCircle2, CircleAlert, Send } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Field, Textarea } from '@/components/ui/Field';
import { ConsentCheckbox, requireConsent } from '@/components/ui/ConsentCheckbox';
import { FileDrop } from '@/components/ui/FileDrop';
import { COMPANY } from '@/content/site';
import { formatPhone, isValidPhone } from '@/lib/phone';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = { name?: string; contact?: string };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const validate = {
  name: (v: string) => (v.trim().length < 2 ? 'Укажите имя' : ''),
  contact: (v: string) => (isEmail(v) || isValidPhone(v) ? '' : 'Укажите телефон полностью или e-mail'),
};

/** Форма «Написать инженеру» (11-01): Имя, Компания, Телефон / e-mail, Задача, Прикрепить ТЗ → POST /api/lead. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const doneRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') doneRef.current?.focus();
  }, [status]);

  const onContactChange = (v: string) => {
    // телефон форматируем мягко; если пользователь вводит e-mail — не трогаем
    setContact(/[a-zа-я@]/i.test(v) ? v : formatPhone(v));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Errors = { name: validate.name(String(data.get('name') ?? '')), contact: validate.contact(contact) };
    setErrors(next);
    if (next.name || next.contact) {
      (form.elements.namedItem(next.name ? 'name' : 'contact') as HTMLElement | null)?.focus();
      return;
    }
    if (!requireConsent(form)) return;
    // API принимает name + phone; значение «Телефон / e-mail» уходит в оба поля (phone — для совместимости)
    data.set('phone', contact);
    data.set('source', 'contacts');
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
      <div className="rounded-md border border-accent bg-surface p-card xl:min-h-140">
        <CheckCircle2 aria-hidden="true" className="size-icon-lg text-accent" strokeWidth={2} />
        <h2 ref={doneRef} tabIndex={-1} className="mt-4 font-display text-h3 font-semibold text-ink outline-offset-4">
          Спасибо! Заявка принята
        </h2>
        <p className="mt-4 text-body text-muted">Инженер позвонит в течение дня</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === 'submitting'} className="rounded-md border border-line bg-surface p-card xl:min-h-140">
      <h2 className="font-display text-h3 font-semibold text-ink">Написать инженеру</h2>
      <div className="mt-6 grid grid-cols-1 gap-4">
        <Field id="contact-name" name="name" label="Имя" autoComplete="name" error={errors.name} onBlur={(e) => setErrors((c) => ({ ...c, name: validate.name(e.target.value) }))} required />
        <Field id="contact-company" name="company" label="Компания" autoComplete="organization" />
        <Field
          id="contact-contact"
          name="contact"
          label="Телефон / e-mail"
          autoComplete="email"
          value={contact}
          onChange={(e) => onContactChange(e.target.value)}
          error={errors.contact}
          onBlur={() => setErrors((c) => ({ ...c, contact: validate.contact(contact) }))}
          required
        />
        <Textarea id="contact-task" name="task" label="Задача" />
        <FileDrop name="file" label="Прикрепить ТЗ" variant="inline" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg" />
        <ConsentCheckbox />
        {status === 'error' ? (
          <p role="alert" className="flex items-start gap-2 rounded-md border border-ink p-4 text-body text-ink">
            <CircleAlert aria-hidden="true" className="mt-0.5 size-icon shrink-0" strokeWidth={2} />
            <span>Не удалось отправить заявку. Попробуйте ещё раз или позвоните: {COMPANY.phones[0].display}</span>
          </p>
        ) : null}
        <Button type="submit" size="lg" fullWidth disabled={status === 'submitting'} trailingIcon={Send}>
          {status === 'submitting' ? 'Отправляем…' : 'Отправить'}
        </Button>
      </div>
    </form>
  );
}
