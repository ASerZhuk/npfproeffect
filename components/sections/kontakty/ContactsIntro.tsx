import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { HeroBackground } from '@/components/ui/HeroBackground';

/** 11-01 (верх). H1 + лид, колонки 1–7. */
export function ContactsIntro() {
  return (
    <section aria-labelledby="contacts-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="contacts" />
      <Container>
        <Grid>
          <div className="col-span-4 lg:col-span-8 xl:col-span-7">
            <h1 id="contacts-title" className="font-display text-h1 font-bold text-surface">
              Контакты
            </h1>
            <p className="mt-6 max-w-lead text-lead text-surface">Ответим в течение рабочего дня.</p>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
