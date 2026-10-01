import { CtaSection } from '@/components/ui/CtaSection';
import type { CaseData } from '@/content/cases';

/** 08-09. Нужен похожий результат?: панель с акцентной линией, колонки 2–12 (текст 2–8, CTA 9–12). */
export function CaseCta({ c: C }: { c: CaseData }) {
  return (
    <CtaSection source={`case-${C.slug}`} title="Нужен похожий результат?" lead="Покажем систему в работе и рассчитаем проект под ваш объект" buttonLabel="Хочу так же" />
  );
}
