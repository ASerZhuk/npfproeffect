import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { HeroBackground } from '@/components/ui/HeroBackground';

/**
 * 06-01. Вводный экран: H1 и лид без изображения.
 */
export function ServicesHero() {
  return (
    <section aria-labelledby="services-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="services" />
      <Container>
        <Grid className="items-start gap-y-10">
          <div className="col-span-4 lg:col-span-8 xl:col-span-8">
            <h1 id="services-hero-title" className="font-display text-h1 font-bold text-surface">
              Услуги на всех этапах проекта
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">Можно заказать весь цикл или отдельный этап — например, только сборку шкафов или ПНР.</p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
