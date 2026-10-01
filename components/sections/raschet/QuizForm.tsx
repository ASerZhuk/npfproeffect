'use client';

import { ArrowLeft, ArrowRight, CircleAlert, CircuitBoard, FlaskConical, RefreshCcw, ScanLine, Workflow, Zap, type LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { ConsentCheckbox, requireConsent } from '@/components/ui/ConsentCheckbox';
import { FileDrop } from '@/components/ui/FileDrop';
import { Radio } from '@/components/ui/Radio';
import { QUIZ, type QuizIcon } from '@/content/quiz';
import { ROUTES } from '@/content/nav';
import { COMPANY } from '@/content/site';
import { cn } from '@/lib/cn';
import { formatPhone, isValidPhone } from '@/lib/phone';

const ICONS: Record<QuizIcon, LucideIcon> = { Workflow, Zap, RefreshCcw, ScanLine, FlaskConical, CircuitBoard };

type Answers = { goal: string; industry: string; timing: string; budget: string };
type Status = 'idle' | 'submitting' | 'error';

const STEPS = [1, 2, 3, 4] as const;

/** 12-01. Квиз: 4 шага, прогресс, назад/далее, валидация; значения сохраняются при навигации (панели не размонтируются). */
export function QuizForm({ idPrefix = 'quiz' }: { idPrefix?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({ goal: '', industry: '', timing: '', budget: '' });
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [status, setStatus] = useState<Status>('idle');
  const moved = useRef(false);

  // После смены шага фокус — на заголовок шага (для скринридеров и клавиатуры)
  useEffect(() => {
    if (!moved.current) return;
    document.getElementById(`${idPrefix}-step-${step}`)?.focus();
  }, [step, idPrefix]);

  const set = (key: keyof Answers) => (e: { target: { value: string } }) => setAnswers((a) => ({ ...a, [key]: e.target.value }));

  const stepValid = [answers.goal, answers.industry, answers.timing && answers.budget][step - 1] || false;

  const go = (next: number) => {
    moved.current = true;
    setStep(next);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;
    if (step < QUIZ.total) {
      if (stepValid) go(step + 1);
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = {
      name: String(data.get('name') ?? '').trim().length < 2 ? 'Укажите имя' : '',
      phone: isValidPhone(phone) ? '' : 'Укажите телефон полностью',
    };
    setErrors(next);
    if (next.name || next.phone) {
      (form.elements.namedItem(next.name ? 'name' : 'phone') as HTMLElement | null)?.focus();
      return;
    }
    if (!requireConsent(form)) return;
    data.set('source', 'quiz');
    setStatus('submitting');
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: data });
      if (!res.ok) throw new Error(String(res.status));
      router.push(ROUTES.quizThanks);
    } catch {
      setStatus('error');
    }
  };

  const panel = (n: number) => cn(step !== n && 'hidden');
  const heading = (n: number, text: string) => (
    <h2 id={`${idPrefix}-step-${n}`} tabIndex={-1} className="font-display text-h3 font-semibold text-ink outline-offset-4">
      Шаг {n}. {text}
    </h2>
  );
  const group = (n: number, name: keyof Answers, options: readonly { value: string; label: string; icon?: QuizIcon }[]) => (
    <div role="radiogroup" aria-labelledby={`${idPrefix}-step-${n}`} className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
      {options.map((o) => (
        <Radio key={o.value} card name={name} value={o.value} label={o.label} icon={o.icon ? ICONS[o.icon] : undefined} checked={answers[name] === o.value} onChange={set(name)} />
      ))}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === 'submitting'}>
      <div aria-hidden="true" className="flex gap-2">
        {STEPS.map((n) => (
          <i key={n} className={cn('h-2 flex-1 rounded-full', n <= step ? 'bg-accent' : 'bg-line')} />
        ))}
      </div>
      <p aria-live="polite" className="mt-3 font-mono text-meta text-muted">
        Шаг {step} из {QUIZ.total}
      </p>

      <div className="mt-6">
        <div className={panel(1)}>
          {heading(1, QUIZ.stepNames[0])}
          {group(1, 'goal', QUIZ.goal)}
          {/* 390: подписи шагов списком; 768+: одной строкой */}
          <ul className="mt-6 flex flex-col gap-1 font-mono text-meta text-muted md:hidden">
            {QUIZ.upcoming.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-6 hidden font-mono text-meta text-muted md:block">{QUIZ.upcoming.join(' · ')}</p>
          {QUIZ.bonusPdf ? (
            <p className="mt-3 font-mono text-meta text-muted">
              Бонус за прохождение:{' '}
              <a href={QUIZ.bonusPdf} download className="text-accent underline underline-offset-4">
                чек-лист подготовки к модернизации (PDF)
              </a>
            </p>
          ) : null}
        </div>

        <div className={panel(2)}>
          {heading(2, QUIZ.stepNames[1])}
          {group(2, 'industry', QUIZ.industry)}
        </div>

        <div className={panel(3)}>
          {heading(3, QUIZ.stepNames[2])}
          <p id={`${idPrefix}-timing-label`} className="mt-6 text-label font-semibold text-ink">
            Сроки
          </p>
          <div role="radiogroup" aria-labelledby={`${idPrefix}-timing-label`} className="mt-3 flex flex-col gap-3">
            {QUIZ.timing.map((o) => (
              <Radio key={o.value} card name="timing" value={o.value} label={o.label} checked={answers.timing === o.value} onChange={set('timing')} />
            ))}
          </div>
          <p id={`${idPrefix}-budget-label`} className="mt-8 text-label font-semibold text-ink">
            Бюджет
          </p>
          <div role="radiogroup" aria-labelledby={`${idPrefix}-budget-label`} className="mt-3 flex flex-col gap-3">
            {QUIZ.budget.map((o) => (
              <Radio key={o.value} card name="budget" value={o.value} label={o.label} checked={answers.budget === o.value} onChange={set('budget')} />
            ))}
          </div>
        </div>

        <div className={panel(4)}>
          {heading(4, QUIZ.stepNames[3])}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field
              id={`${idPrefix}-name`}
              name="name"
              label="Имя"
              autoComplete="name"
              error={errors.name}
              onBlur={(e) => setErrors((c) => ({ ...c, name: e.target.value.trim().length < 2 ? 'Укажите имя' : '' }))}
              required
            />
            <Field
              id={`${idPrefix}-phone`}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              label="Телефон"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              error={errors.phone}
              onBlur={() => setErrors((c) => ({ ...c, phone: isValidPhone(phone) ? '' : 'Укажите телефон полностью' }))}
              required
            />
            <FileDrop name="file" label={QUIZ.attachLabel} variant="dropzone" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg" className="md:col-span-2" />
            <p className="font-mono text-meta text-muted md:col-span-2">{QUIZ.attachHint}</p>
            <ConsentCheckbox className="md:col-span-2" />
          </div>
          {status === 'error' ? (
            <p role="alert" className="mt-6 flex items-start gap-2 rounded-md border border-ink p-4 text-body text-ink">
              <CircleAlert aria-hidden="true" className="mt-0.5 size-icon shrink-0" strokeWidth={2} />
              <span>Не удалось отправить заявку, ответы сохранены. Попробуйте ещё раз или позвоните: {COMPANY.phones[0].display}</span>
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 md:flex-row md:justify-between">
        {step > 1 ? (
          <Button variant="secondary" size="lg" leadingIcon={ArrowLeft} onClick={() => go(step - 1)} className="w-full md:w-auto">
            Назад
          </Button>
        ) : (
          <span aria-hidden="true" />
        )}
        <Button type="submit" size="lg" trailingIcon={ArrowRight} disabled={step < QUIZ.total ? !stepValid : status === 'submitting'} className="w-full md:w-auto">
          {step < QUIZ.total ? 'Далее' : status === 'submitting' ? 'Отправляем…' : QUIZ.submitLabel}
        </Button>
      </div>
    </form>
  );
}
