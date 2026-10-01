import { Section } from '@/components/layout/Section';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HOME_FAQ } from '@/content/faq';

/** 01-09. Частые вопросы: заголовок слева (колонки 2–5), аккордеон справа (6–12, 690 px). */
export function HomeFaq() {
  return (
    <Section labelledBy="home-faq-title">
        <SectionHeader number="09" id="home-faq-title" title="Частые вопросы" lead="Снимаем возражения до звонка" />
        <div className="mt-6">
          <Accordion items={HOME_FAQ.map((f, i) => ({ id: `q${i + 1}`, question: f.q, answer: f.a }))} />
        </div>
    </Section>
  );
}
