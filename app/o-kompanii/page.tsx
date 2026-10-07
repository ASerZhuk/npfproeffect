import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { AboutHero } from '@/components/sections/o-kompanii/AboutHero';
import { AboutMetrics } from '@/components/sections/o-kompanii/AboutMetrics';
import { AboutWhy } from '@/components/sections/o-kompanii/AboutWhy';
import { AboutGeography } from '@/components/sections/o-kompanii/AboutGeography';
import { AboutDocuments } from '@/components/sections/o-kompanii/AboutDocuments';
import { AboutRequisites } from '@/components/sections/o-kompanii/AboutRequisites';

export const metadata: Metadata = pageMeta({
  title: 'О компании',
  description: 'ООО "САП-АВТОМАТИКА" — научно-производственная фирма из Пензы: проектируем, производим и внедряем системы автоматизации. Объекты в Пензенской, Нижегородской, Саратовской областях и Мордовии.',
  path: '/o-kompanii',
});

export default function AboutPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'О компании' }]} />
      <AboutHero />
      <AboutMetrics />
      <AboutWhy />
      <AboutGeography />
      <AboutDocuments />
      <AboutRequisites />
      <CtaSection source="about" />
    </PageShell>
  );
}
