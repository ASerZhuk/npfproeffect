import { CheckCircle2, CircleDotDashed } from 'lucide-react';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import type { CaseData } from '@/content/cases';

/** 08-02. Задача / Решение: две панели по 6 колонок. */
export function CaseTaskSolution({ c: C }: { c: CaseData }) {
  const PANELS = [
    { title: 'Задача', text: C.task, Icon: CircleDotDashed },
    { title: 'Решение', text: C.solution, Icon: CheckCircle2 },
  ];
  return (
    <Section density="dense" labelledBy="case-task-title">
      <h2 id="case-task-title" className="sr-only">
        Задача и решение
      </h2>
      <Grid className="gap-y-4">
        {PANELS.map(({ title, text, Icon }) => (
          <div key={title} className="col-span-4 rounded-md border border-line bg-surface p-card lg:col-span-4 xl:col-span-6">
            <Icon aria-hidden="true" className="size-icon-lg text-muted" strokeWidth={2} />
            <h3 className="mt-4 font-display text-h3 font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-body text-ink">{text}</p>
          </div>
        ))}
      </Grid>
    </Section>
  );
}
