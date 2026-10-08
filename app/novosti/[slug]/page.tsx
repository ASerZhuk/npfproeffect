import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { NewsArticle } from '@/components/sections/news/NewsArticle';
import { NewsGrid } from '@/components/sections/news/NewsGrid';
import { NEWS, getNews } from '@/content/news';
import { JsonLd, pageMeta } from '@/lib/seo';
import { COMPANY, SITE_URL } from '@/content/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const n = getNews((await params).slug);
  if (!n) return {};
  return pageMeta({ title: n.title, description: n.excerpt, path: `/novosti/${n.slug}` });
}

export default async function NewsRoute({ params }: { params: Promise<{ slug: string }> }) {
  const n = getNews((await params).slug);
  if (!n) notFound();
  const others = NEWS.filter((x) => x.slug !== n.slug).slice(0, 3);
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Новости', href: '/novosti' }, { label: n.title }]} />
      <NewsArticle n={n} />
      {others.length ? (
        <Section tone="surface" labelledBy="news-more-title">
          <h2 id="news-more-title" className="font-display text-h2 font-semibold text-ink">
            Другие новости
          </h2>
          <NewsGrid items={others} />
        </Section>
      ) : null}
      <CtaSection source="news" />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: n.title,
          description: n.excerpt,
          image: `${SITE_URL}${n.image.src}`,
          mainEntityOfPage: `${SITE_URL}/novosti/${n.slug}`,
          publisher: { '@type': 'Organization', name: COMPANY.shortName },
          ...(n.date ? { datePublished: n.date } : {}),
        }}
      />
    </PageShell>
  );
}
