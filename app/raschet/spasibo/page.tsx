import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { ThanksCard } from '@/components/sections/raschet/ThanksCard';

export const metadata: Metadata = pageMeta({
  title: 'Спасибо! Заявка принята',
  description: 'Заявка на расчёт проекта принята. Инженер НПФ «ПроЭффект» свяжется с вами в течение рабочего дня.',
  path: '/raschet/spasibo',
  noindex: true,
});

export default function ThanksPage() {
  return (
    <PageShell>
      <ThanksCard />
    </PageShell>
  );
}
