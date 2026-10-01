import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { ModernBeforeAfter } from '@/components/sections/modernizaciya/ModernBeforeAfter';
import { ModernCases } from '@/components/sections/modernizaciya/ModernCases';
import { ModernClasses } from '@/components/sections/modernizaciya/ModernClasses';
import { ModernCompare } from '@/components/sections/modernizaciya/ModernCompare';
import { ModernEstimate } from '@/components/sections/modernizaciya/ModernEstimate';
import { ModernHero } from '@/components/sections/modernizaciya/ModernHero';
import { ModernIncludes } from '@/components/sections/modernizaciya/ModernIncludes';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = pageMeta({
  title: 'Модернизация станков, прессов и печей',
  description: 'Меняем ЧПУ, привод и автоматику на оборудовании 1980–90-х. Станок работает быстрее и точнее, а затраты — в разы ниже нового.',
  path: '/modernizaciya',
});

// 04-08: вместо G-03 на странице форма оценки станка (04-07); футер — в PageShell.
export default function ModernizationPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Модернизация станков и прессов' }]} />
      <ModernHero />
      <ModernBeforeAfter />
      <ModernClasses />
      <ModernIncludes />
      <ModernCompare />
      <ModernCases />
      <ModernEstimate />
    </PageShell>
  );
}
