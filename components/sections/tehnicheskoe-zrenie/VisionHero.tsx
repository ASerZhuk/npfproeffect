import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { ROUTES } from '@/content/nav';

/** 03-01. Hero направления: H1, лид, два CTA, фото техзрения 1:1 с засечками. */
export function VisionHero() {
  return (
    <section aria-labelledby="vision-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="vision" />
      <Container>
        <Grid className="items-center gap-y-8">
          <div className="col-span-4 lg:col-span-5 xl:col-span-7">
            <h1 id="vision-hero-title" className="font-display text-h1 font-bold text-surface">
              Системы технического зрения и автоматической идентификации
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">Проверяем 100% продукции на конвейере: дефекты, коды, размеры, наличие — без участия человека.</p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
              <Button href={ROUTES.quiz} size="lg" trailingIcon={ArrowRight}>
                Рассчитать систему
              </Button>
              <Button href="#vision-projects" variant="secondary" size="lg">
                Смотреть кейс
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
