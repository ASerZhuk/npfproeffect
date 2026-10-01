import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 09-01. Hero: H1 + лид (колонки 1–7), реальное фото сборки шкафа (8–12, 4:5, contain — без растяжения). */
export function AboutHero() {
  return (
    <section aria-labelledby="about-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="about" />
      <Container>
        <Grid className="items-start gap-y-8">
          <div className="col-span-4 lg:col-span-5 xl:col-span-7">
            <h1 id="about-title" className="font-display text-h1 font-bold text-surface">
              НПФ «ПроЭффект» — инженеры, которые отвечают за результат
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">Научно-производственная фирма из Пензы: проектируем, производим и внедряем системы автоматизации.</p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
