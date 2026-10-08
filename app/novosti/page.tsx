import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaSection } from '@/components/ui/CtaSection';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { NewsGrid } from '@/components/sections/news/NewsGrid';
import { NEWS } from '@/content/news';

export const metadata: Metadata = pageMeta({
  title: 'Новости',
  description: 'Новости САП-АВТОМАТИКА: внедрения систем автоматизации, учёта энергоресурсов, технического зрения и модернизации оборудования.',
  path: '/novosti',
});

export default function NewsPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Новости' }]} />
      <section aria-labelledby="news-title" className="page-hero on-dark bg-dark text-surface hero-full">
        <HeroBackground image="novosti" />
        <Container>
          <Grid>
            <div className="col-span-4 lg:col-span-8 xl:col-span-8">
              <h1 id="news-title" className="font-display text-h1 font-bold text-surface">
                Новости
              </h1>
              <p className="mt-6 max-w-lead text-lead text-surface">Внедрения, запуски и события компании.</p>
            </div>
          </Grid>
        </Container>
      </section>
      <Section labelledBy="news-list-title">
        <h2 id="news-list-title" className="sr-only">
          Все новости
        </h2>
        <NewsGrid items={NEWS} className="" />
      </Section>
      <CtaSection source="news" />
    </PageShell>
  );
}
