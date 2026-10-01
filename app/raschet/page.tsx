import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { QuizSection } from '@/components/sections/raschet/QuizSection';

export const metadata: Metadata = pageMeta({
  title: 'Расчёт стоимости проекта',
  description: '4 вопроса, 1 минута — ответ инженера за 1 день. Рассчитаем стоимость автоматизации, модернизации станка, испытательного стенда или разработки электроники.',
  path: '/raschet',
});

/** Страница 12: квиз. Без хлебных крошек (sections.md §14); финальная форма G-03 не добавляется. */
export default function QuizPage() {
  return (
    <PageShell>
      <QuizSection />
    </PageShell>
  );
}
