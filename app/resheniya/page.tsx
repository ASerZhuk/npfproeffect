import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { SolutionsFilters } from '@/components/sections/resheniya/SolutionsFilters';
import { SolutionsHero } from '@/components/sections/resheniya/SolutionsHero';
import { SolutionsTasks } from '@/components/sections/resheniya/SolutionsTasks';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = pageMeta({
  title: 'Решения по автоматизации',
  description: 'Шесть направлений промышленной автоматизации: АСУ ТП, учёт энергоресурсов, техническое зрение, модернизация станков и прессов, испытания, РЭА и робототехника.',
  path: '/resheniya',
});

export default function SolutionsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Решения' }]} />
      <SolutionsHero />
      <SolutionsFilters />
      <SolutionsTasks />
      <CtaSection source="resheniya" />
    </PageShell>
  );
}
