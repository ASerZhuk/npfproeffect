import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 04-01. Hero: H1, лид, CTA к форме 04-07; справа пара «Было / Стало» (две половины, без slider). */
export function ModernHero() {
  return (
    <section aria-labelledby="modern-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="modernization" />
      <Container>
        <Grid className="items-center gap-y-8">
          <div className="col-span-4 lg:col-span-5 xl:col-span-7">
            <h1 id="modern-hero-title" className="font-display text-h1 font-bold text-surface">
              Модернизация станков, прессов и печей — вместо покупки нового
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">
              Меняем ЧПУ, привод и автоматику на оборудовании 1980–90-х. Станок работает быстрее и точнее, а затраты — в разы ниже нового.
            </p>
            <div className="mt-8">
              <Button href="#estimate" size="lg" trailingIcon={ArrowRight} className="max-md:w-full">
                Оценить мой станок за 1 день
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
