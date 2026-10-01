import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { ServiceContract } from '@/components/sections/uslugi/ServiceContract';
import { ServicesCta } from '@/components/sections/uslugi/ServicesCta';
import { ServicesHero } from '@/components/sections/uslugi/ServicesHero';
import { ServicesList } from '@/components/sections/uslugi/ServicesList';
import { TariffProvider } from '@/components/sections/uslugi/TariffContext';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = pageMeta({
  title: 'Услуги на всех этапах проекта',
  description: 'Обследование, ПИР, программирование ПЛК и SCADA, сборка шкафов, монтаж и ПНР, метрология, обучение и техническое обслуживание — весь цикл или отдельный этап.',
  path: '/uslugi',
});

export default function ServicesPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Услуги' }]} />
      <ServicesHero />
      <ServicesList />
      <TariffProvider>
        <ServiceContract />
        <ServicesCta />
      </TariffProvider>
    </PageShell>
  );
}
