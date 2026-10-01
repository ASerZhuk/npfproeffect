import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 10-01. Вводный экран: H1 + лид (колонки 2–9, строка ≤690 px). «SEO-трафик:» — служебная пометка прототипа, не выводится. */
export function ArticlesIntro() {
  return (
    <section aria-labelledby="articles-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="articles" />
      <Container>
        <Grid>
          <div className="col-span-4 lg:col-span-8 xl:col-span-8">
            <h1 id="articles-title" className="font-display text-h1 font-bold text-surface">
              Статьи и новости
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">Ответы на запросы главных инженеров и энергетиков.</p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
