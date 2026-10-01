import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 05-01. Hero: H1, лид, два CTA (ТЗ → форма, кейс ПРО-60 → проекты), фото портального РТК 4:5. */
export function ProductionHero() {
  return (
    <section aria-labelledby="production-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="production" />
      <Container>
        <Grid className="items-center gap-y-8">
          <div className="col-span-4 lg:col-span-5 xl:col-span-7">
            <h1 id="production-hero-title" className="font-display text-h1 font-bold text-surface">
              Контрактная разработка и производство электроники и роботизированных комплексов
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">От схемы и прошивки до серийной партии. Портальные РТК для упаковки и паллетирования.</p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <Button href="#cta" size="lg" trailingIcon={ArrowRight}>
                Отправить ТЗ
              </Button>
              <Button href="#production-projects" size="lg" variant="secondary">
                Кейс РТК «ПРО-60»
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
