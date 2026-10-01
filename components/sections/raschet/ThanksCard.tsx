import { ArrowRight, CalendarCheck2, CheckCircle2, Download, PhoneCall } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { QUIZ } from '@/content/quiz';
import { ROUTES } from '@/content/nav';
import { FocusHeading } from './FocusHeading';

const NEXT_STEPS = [
  { Icon: PhoneCall, text: 'Инженер позвонит в течение дня' },
  { Icon: CalendarCheck2, text: 'Уточним задачу, договоримся о выезде' },
];

/** Подтверждение и три карточки следующих действий; PDF — при наличии файла. */
export function ThanksCard() {
  return (
    <>
      <section aria-labelledby="thanks-title" className="hero-full page-hero on-dark bg-dark text-surface">
        <HeroBackground image="quiz" />
        <Container>
          <div className="flex max-w-185 items-center gap-4">
            <CheckCircle2 aria-hidden="true" className="size-10 shrink-0 text-accent-light" strokeWidth={2} />
            <FocusHeading id="thanks-title" className="font-display text-h1 font-semibold outline-offset-4">
              Спасибо! Заявка принята
            </FocusHeading>
          </div>
        </Container>
      </section>
      <Section tone="surface" labelledBy="thanks-title">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-sm border border-line bg-surface p-6">
              <h2 className="font-display text-h4 font-semibold text-ink">Что дальше</h2>
              <ul className="mt-4">
                {NEXT_STEPS.map(({ Icon, text }) => (
                  <li key={text} className="flex min-h-12 items-center gap-3 border-b border-line py-3 text-body text-ink first:border-t">
                    <Icon aria-hidden="true" className="size-icon-lg shrink-0 text-muted" strokeWidth={2} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-line bg-surface p-6">
              <h2 className="font-display text-h4 font-semibold text-ink">Пока ждёте</h2>
              <div className="mt-4 flex flex-col items-start gap-2">
                <Button href={ROUTES.projects} variant="ghost" trailingIcon={ArrowRight}>
                  Посмотрите проекты
                </Button>
              </div>
            </div>
            {QUIZ.presentationPdf ? (
              <div className="rounded-sm border border-line bg-surface p-6">
                <h2 className="font-display text-h4 font-semibold text-ink">Материал</h2>
                <div className="mt-4">
                  <Button href={QUIZ.presentationPdf} download variant="ghost" leadingIcon={Download}>
                    Скачать презентацию PDF
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
    </Section>
    </>
  );
}
