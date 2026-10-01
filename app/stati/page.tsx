import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { ArticlesIntro } from '@/components/sections/stati/ArticlesIntro';
import { ArticlesList } from '@/components/sections/stati/ArticlesList';

export const metadata: Metadata = pageMeta({
  title: 'Статьи и новости',
  description: 'Ответы на запросы главных инженеров и энергетиков: модернизация станков, энергоучёт, техническое зрение, замена Siemens на ЧПУ, OEE.',
  path: '/stati', noindex: true,
});

export default async function ArticlesPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Статьи и новости' }]} />
      <ArticlesIntro />
      <ArticlesList initialType={type} />
      <CtaSection source="articles" />
    </PageShell>
  );
}
