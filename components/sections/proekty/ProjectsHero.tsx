import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 07-01. Вводный экран: H1 и лид (колонки 2–9), без изображения. */
export function ProjectsHero() {
  return (
    <section aria-labelledby="projects-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="projects" />
      <Container>
        <Grid>
          <div className="col-span-4 lg:col-span-8 xl:col-span-8">
            <h1 id="projects-hero-title" className="font-display text-h1 font-bold text-surface">
              Реализованные проекты
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">30+ объектов в Пензенской, Нижегородской, Саратовской областях и Мордовии.</p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
