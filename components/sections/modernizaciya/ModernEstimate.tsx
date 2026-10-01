'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { ConsentCheckbox, requireConsent } from '@/components/ui/ConsentCheckbox';
import { FileDrop } from '@/components/ui/FileDrop';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { formatPhone, isValidPhone } from '@/lib/phone';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * 04-07. Оценка станка за 1 день: форма «Модель / Год / Что не устраивает / Фото-паспорт / Телефон».
 * Обязательны: модель или файл и телефон. Отправка — POST /api/lead; после успеха фокус на заголовке подтверждения.
 */
export function ModernEstimate() {
  const [status, setStatus] = useState<Status>('idle');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [hasFile, setHasFile] = useState(false);
  const [errors, setErrors] = useState<{ model?: string; phone?: string }>({});
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const checkModel = (value: string, file: boolean) => (value.trim() || file ? '' : 'Укажите модель станка или приложите фото / паспорт');
  const checkPhone = (value: string) => (isValidPhone(value) ? '' : 'Укажите телефон полностью');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next = { model: checkModel(model, hasFile), phone: checkPhone(phone) };
    setErrors(next);
    if (next.model || next.phone) {
      (form.elements.namedItem(next.model ? 'model' : 'phone') as HTMLElement | null)?.focus();
      return;
    }
    if (!requireConsent(form)) return;
    const data = new FormData(form);
    data.set('source', 'modernizaciya-estimate');
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="estimate" labelledBy="modern-estimate-title" className="scroll-mt-20">
      <Grid className="items-start gap-y-8">
        <div className="col-span-4 lg:col-span-3 xl:col-span-5">
          <SectionLabel number="07" />
          <h2 id="modern-estimate-title" className="mt-4 font-display text-h2 font-semibold text-ink">
            Оценка станка за 1 день
          </h2>
          <p className="mt-6 max-w-lead text-lead text-ink">Пришлите модель, год выпуска и фото шильдика</p>
        </div>
        <div className="col-span-4 lg:col-span-5 xl:col-span-7">
          {status === 'success' ? (
            <div className="rounded-lg border border-accent bg-surface p-card text-ink">
              <CheckCircle2 aria-hidden="true" className="size-icon-lg text-accent" strokeWidth={2} />
              <h3 ref={successRef} tabIndex={-1} className="mt-4 font-display text-h4 font-semibold outline-offset-4">
                Спасибо! Заявка принята
              </h3>
              <p className="mt-2 text-body text-muted">Инженер позвонит в течение дня</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-busy={status === 'submitting'} className="grid grid-cols-1 gap-4 rounded-lg border border-line bg-surface p-card lg:grid-cols-7">
              <Field
                id="estimate-model"
                name="model"
                label="Модель станка / пресса"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                onBlur={() => setErrors((c) => ({ ...c, model: checkModel(model, hasFile) }))}
                error={errors.model}
                wrapperClassName="lg:col-span-4"
              />
              <Field id="estimate-year" name="year" label="Год выпуска" inputMode="numeric" wrapperClassName="lg:col-span-3" />
              <Field id="estimate-issue" name="issue" label="Что не устраивает" wrapperClassName="lg:col-span-7" />
              <div className="lg:col-span-4">
                <FileDrop
                  name="file"
                  label="Фото / паспорт"
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  onFileChange={(f) => {
                    setHasFile(!!f);
                    if (f) setErrors((c) => ({ ...c, model: '' }));
                  }}
                />
              </div>
              <Field
                id="estimate-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                label="Телефон"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                onBlur={() => setErrors((c) => ({ ...c, phone: checkPhone(phone) }))}
                error={errors.phone}
                required
                wrapperClassName="lg:col-span-3"
              />
              {status === 'error' ? (
                <p role="alert" className="rounded-md border border-ink p-4 text-body text-ink lg:col-span-7">
                  Не удалось отправить заявку. Попробуйте ещё раз или позвоните по номеру из шапки сайта.
                </p>
              ) : null}
              <ConsentCheckbox className="lg:col-span-7" />
              <Button type="submit" size="lg" fullWidth disabled={status === 'submitting'} trailingIcon={ArrowRight} className="lg:col-span-7">
                {status === 'submitting' ? 'Отправляем…' : 'Получить оценку'}
              </Button>
            </form>
          )}
        </div>
      </Grid>
    </Section>
  );
}
