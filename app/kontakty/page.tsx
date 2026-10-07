import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactsIntro } from '@/components/sections/kontakty/ContactsIntro';
import { ContactsMain } from '@/components/sections/kontakty/ContactsMain';

export const metadata: Metadata = pageMeta({
  title: 'Контакты',
  description: 'ООО "САП-АВТОМАТИКА", г. Пенза, ул. Каракозова, 35. Телефоны +7 (963) 109-36-36, +7 (965) 633-06-80. Ответим в течение рабочего дня.',
  path: '/kontakty',
});

/** Страница 11. Финальную G-03 не добавляем: контактная форма уже на странице. */
export default function ContactsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Контакты' }]} />
      <ContactsIntro />
      <ContactsMain />
    </PageShell>
  );
}
