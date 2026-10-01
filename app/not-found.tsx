import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/content/nav';

export const metadata: Metadata = { title: 'Страница не найдена', robots: { index: false } };

export default function NotFound() {
  return (
    <PageShell>
      <Section tone="surface" labelledBy="nf-title">
        <p className="font-mono text-meta text-muted">Ошибка 404</p>
        <h1 id="nf-title" className="mt-4 max-w-lead font-display text-h1 font-bold text-ink">
          Страница не найдена
        </h1>
        <p className="mt-6 max-w-lead text-lead text-ink">Возможно, ссылка устарела. Посмотрите наши решения и проекты или опишите задачу — инженер предложит решение.</p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <Button href={ROUTES.home} size="lg" variant="secondary">
            На главную
          </Button>
          <Button href={ROUTES.projects} size="lg" variant="secondary">
            Проекты
          </Button>
          <Button href={ROUTES.quiz} size="lg" trailingIcon={ArrowRight}>
            Рассчитать проект
          </Button>
        </div>
      </Section>
    </PageShell>
  );
}
