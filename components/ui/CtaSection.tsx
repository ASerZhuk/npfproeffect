import type { ReactNode } from 'react';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { CtaForm } from './CtaForm';

type Props = {
  title?: string;
  lead?: string;
  source?: string;
  buttonLabel?: string;
  /** скрытые значения формы (например, тариф) */
  hiddenFields?: Record<string, string>;
  /** необязательная строка под лидом (например, «Выбран тариф: …») */
  note?: ReactNode;
};

/** G-03 целиком: dark-секция, слева заголовок + лид (≤588 px), справа форма CtaForm. */
export function CtaSection({
  title = 'Опишите задачу — инженер предложит решение',
  lead = 'Бесплатный выезд на объект в Пензенской обл. и расчёт стоимости за 3 рабочих дня.',
  source = 'cta',
  buttonLabel,
  hiddenFields,
  note,
}: Props) {
  return (
    <Section tone="dark" density="dense" labelledBy={`cta-${source}-title`} id="cta">
      <Grid className="items-center gap-y-6">
        <div className="col-span-4 lg:col-span-4 xl:col-span-6">
          <h2 id={`cta-${source}-title`} className="max-w-body font-display text-h2 font-semibold">
            {title}
          </h2>
          <p className="mt-3 max-w-body text-body text-canvas">{lead}</p>
          {note ? <p className="mt-4 font-mono text-meta text-canvas">{note}</p> : null}
        </div>
        <div className="col-span-4 lg:col-span-4 xl:col-span-6">
          <CtaForm source={source} buttonLabel={buttonLabel} hiddenFields={hiddenFields} />
        </div>
      </Grid>
    </Section>
  );
}
