import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Tag } from '@/components/ui/Tag';
import { getCase } from '@/content/cases';
import { formatNewsDate, type NewsItem } from '@/content/news';
import { ROUTES } from '@/content/nav';
import { SITE_URL } from '@/content/site';
import { ReadingProgress } from './ReadingProgress';
import { ShareButtons } from './ShareButtons';

const readMinutes = (n: NewsItem) => Math.max(1, Math.round([n.title, ...n.body].join(' ').split(/\s+/).length / 180));

/** Страница новости: тёмная шапка (мета, H1, лид) → обложка → текст + липкая колонка (поделиться, проект, CTA). */
export function NewsArticle({ n }: { n: NewsItem }) {
  const project = n.projectSlug ? getCase(n.projectSlug) : undefined;
  const url = `${SITE_URL}/novosti/${n.slug}`;
  const [lead, ...rest] = n.body;

  return (
    <>
      <ReadingProgress targetId="news-article" />
      <section aria-labelledby="news-title" className="page-hero on-dark bg-dark text-surface hero-full">
        <HeroBackground image="novosti" />
        <Container>
          <Grid>
            <div className="col-span-4 lg:col-span-8 xl:col-span-9">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <Tag tone="dark" className="bg-dark-alt text-nav">
                  Новость
                </Tag>
                {n.date ? (
                  <time dateTime={n.date} className="font-mono text-meta text-canvas">
                    {formatNewsDate(n.date)}
                  </time>
                ) : null}
                <span className="font-mono text-meta text-canvas">{readMinutes(n)} мин чтения</span>
              </div>
              <h1 id="news-title" className="mt-5 max-w-lead font-display text-h1 font-bold text-balance text-surface">
                {n.title}
              </h1>
              <p className="mt-6 max-w-lead text-lead text-surface">{n.excerpt}</p>
            </div>
          </Grid>
        </Container>
      </section>

      <Section>
        <Grid className="gap-y-8">
          <article id="news-article" className="col-span-4 min-w-0 lg:col-span-8 xl:col-span-8">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-canvas md:aspect-video">
              <Image src={n.image.src} alt={n.image.alt} fill priority sizes="(min-width: 1280px) 780px, 100vw" className="object-cover" />
            </figure>
            <div className="mt-8 max-w-[68ch] space-y-5">
              {lead ? <p className="text-lead text-ink">{lead}</p> : null}
              {rest.map((p) => (
                <p key={p} className="text-body text-ink">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="mb-3 font-mono text-meta text-muted">Поделиться</p>
              <ShareButtons url={url} title={n.title} />
            </div>
          </article>

          <aside className="col-span-4 space-y-4 lg:col-span-8 xl:col-span-4 xl:sticky xl:top-[calc(var(--header-h)+24px)] xl:self-start">
            {project ? (
              <Link
                href={`/proekty/${project.slug}`}
                className="group block rounded-md border border-line bg-surface p-5 transition-card hover:border-accent focus-visible:border-accent"
              >
                <p className="font-mono text-meta text-muted">Связанный проект</p>
                <p className="mt-2 font-display text-h4 text-ink">{project.title}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-display text-label font-semibold text-accent">
                  Смотреть проект
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-base ease-enter group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ) : null}
            <div className="on-dark rounded-md bg-dark p-5 text-surface">
              <p className="font-display text-h4 text-surface">Нужна похожая система?</p>
              <p className="mt-2 text-body text-canvas">Рассчитаем проект и сроки под вашу задачу.</p>
              <Button href={ROUTES.quiz} variant="inverse" trailingIcon={ArrowRight} fullWidth className="mt-5">
                Рассчитать проект
              </Button>
            </div>
          </aside>
        </Grid>
      </Section>
    </>
  );
}
