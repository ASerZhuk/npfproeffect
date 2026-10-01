import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import type { CaseData } from '@/content/cases';
import { CaseComposition } from './CaseComposition';
import { CaseCta } from './CaseCta';
import { CaseEffect } from './CaseEffect';
import { CaseFunctions } from './CaseFunctions';
import { CaseGallery } from './CaseGallery';
import { CaseHero } from './CaseHero';
import { CaseReview } from './CaseReview';
import { CaseSimilar } from './CaseSimilar';
import { CaseTaskSolution } from './CaseTaskSolution';
import { CaseWorks } from './CaseWorks';

/** Страница 08 — шаблон кейса. Финальную G-03 не добавляем: роль выполняет 08-09. */
export function CasePage({ c }: { c: CaseData }) {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Проекты', href: '/proekty' }, { label: c.crumb }]} />
      <CaseHero c={c} />
      <CaseTaskSolution c={c} />
      <Section tone="surface" innerClassName="grid gap-6 lg:grid-cols-2">
        <CaseComposition c={c} />
        <CaseWorks c={c} />
      </Section>
      <Section tone="dark" innerClassName="grid items-start gap-6 lg:grid-cols-2">
        <CaseFunctions c={c} />
        <CaseEffect c={c} />
      </Section>
      <CaseGallery c={c} />
      <CaseReview c={c} />
      <CaseCta c={c} />
      <CaseSimilar c={c} />
    </PageShell>
  );
}
