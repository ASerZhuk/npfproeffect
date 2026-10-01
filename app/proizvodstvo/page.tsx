import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { ProductionDirections } from '@/components/sections/proizvodstvo/ProductionDirections';
import { ProductionHero } from '@/components/sections/proizvodstvo/ProductionHero';
import { ProductionProcess } from '@/components/sections/proizvodstvo/ProductionProcess';
import { ProductionProjects } from '@/components/sections/proizvodstvo/ProductionProjects';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = pageMeta({
  title: 'Производство РЭА и РТК',
  description: 'Контрактная разработка и производство электроники и роботизированных комплексов: от схемы и прошивки до серийной партии.',
  path: '/proizvodstvo',
});

export default function ProductionPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Производство РЭА и РТК' }]} />
      <ProductionHero />
      <ProductionDirections />
      <ProductionProcess />
      <ProductionProjects />
      <CtaSection source="proizvodstvo" />
    </PageShell>
  );
}
