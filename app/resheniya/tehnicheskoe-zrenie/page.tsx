import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { VisionArchitecture } from '@/components/sections/tehnicheskoe-zrenie/VisionArchitecture';
import { VisionFaq } from '@/components/sections/tehnicheskoe-zrenie/VisionFaq';
import { VisionHero } from '@/components/sections/tehnicheskoe-zrenie/VisionHero';
import { VisionProjects } from '@/components/sections/tehnicheskoe-zrenie/VisionProjects';
import { VisionResults } from '@/components/sections/tehnicheskoe-zrenie/VisionResults';
import { VisionTasks } from '@/components/sections/tehnicheskoe-zrenie/VisionTasks';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = pageMeta({
  title: 'Системы технического зрения и автоматической идентификации',
  description: 'Проверяем 100% продукции на конвейере: дефекты, коды, размеры, наличие — без участия человека.',
  path: '/resheniya/tehnicheskoe-zrenie',
});

export default function VisionPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Решения', href: ROUTES.solutions }, { label: 'Техническое зрение' }]} />
      <VisionHero />
      <VisionTasks />
      <VisionResults />
      <VisionArchitecture />
      <VisionProjects />
      <VisionFaq />
      <CtaSection source="tehnicheskoe-zrenie" />
    </PageShell>
  );
}
