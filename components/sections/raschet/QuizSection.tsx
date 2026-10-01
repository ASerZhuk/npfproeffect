import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { QUIZ } from '@/content/quiz';
import { QuizForm } from './QuizForm';

/** Заголовок и карточка квиза по левому краю общего контейнера. */
export function QuizSection() {
  return (
    <>
      <section aria-labelledby="quiz-title" className="hero-full page-hero on-dark bg-dark text-surface">
        <HeroBackground image="quiz" />
        <Container>
        <div className="max-w-185">
          <h1 id="quiz-title" className="font-display text-h1 font-semibold">
            {QUIZ.title}
          </h1>
          <p className="mt-3 max-w-lead text-lead text-canvas">{QUIZ.lead}</p>
        </div>
        </Container>
      </section>
      <Section labelledBy="quiz-title">
        <div>
          <div className="max-w-quiz rounded-sm border border-line bg-surface p-5 md:p-7">
            <QuizForm />
          </div>
        </div>
    </Section>
    </>
  );
}
