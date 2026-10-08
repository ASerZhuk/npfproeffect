import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NewsGrid } from '@/components/sections/news/NewsGrid';
import { HOME_NEWS_COUNT, NEWS } from '@/content/news';
import { ROUTES } from '@/content/nav';

/** Новости компании: последние материалы. */
export function HomeNews() {
  if (!NEWS.length) return null;
  return (
    <Section tone="surface" labelledBy="home-news-title">
      <SectionHeader
        number="10"
        id="home-news-title"
        title="Новости"
        lead="Запуски, внедрения и события компании"
        action={
          <Button href={ROUTES.news} variant="ghost" trailingIcon={ArrowRight}>
            Все новости
          </Button>
        }
      />
      <NewsGrid items={NEWS.slice(0, HOME_NEWS_COUNT)} />
    </Section>
  );
}
