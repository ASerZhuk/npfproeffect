import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { ProjectsCatalog } from '@/components/sections/proekty/ProjectsCatalog';
import { ProjectsHero } from '@/components/sections/proekty/ProjectsHero';
import { ProjectsRegistry } from '@/components/sections/proekty/ProjectsRegistry';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = pageMeta({
  title: 'Реализованные проекты',
  description: '30+ объектов в Пензенской, Нижегородской, Саратовской областях и Мордовии: каталог проектов с фильтром по направлению и отрасли и реестр для тендерной документации.',
  path: '/proekty',
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Проекты' }]} />
      <ProjectsHero />
      <ProjectsCatalog />
      <ProjectsRegistry />
      <CtaSection source="proekty" />
    </PageShell>
  );
}
