import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 02-01. Вводный экран: H1, лид, CTA к фильтрам; справа инфографика пяти направлений. */
export function SolutionsHero() {
  return (
    <section aria-labelledby="solutions-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="solutions" />
      <Container>
        <Grid className="items-center gap-y-8">
          <div className="col-span-4 lg:col-span-5 xl:col-span-7">
            <h1 id="solutions-hero-title" className="font-display text-h1 font-bold text-surface">
              Решения по автоматизации
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">Выберите направление или задачу. Не нашли свою — опишите её, подберём решение.</p>
            <div className="mt-8">
              <Button href="#solutions-filters" size="lg" trailingIcon={ArrowRight} className="max-md:w-full">
                Подобрать решение
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
