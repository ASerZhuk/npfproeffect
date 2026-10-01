import { Section } from '@/components/layout/Section';
import { Accordion } from '@/components/ui/Accordion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VISION_FAQ } from '@/content/vision';

/** 03-06. Вопросы по направлению — раскладка как 01-09. */
export function VisionFaq() {
  return (
    <Section tone="surface" labelledBy="vision-faq-title">
      <SectionHeader number="06" id="vision-faq-title" title="Вопросы по направлению" />
        <div className="mt-6">
          <Accordion items={VISION_FAQ.map((f, i) => ({ id: `q${i + 1}`, question: f.q, answer: f.a }))} />
        </div>
    </Section>
  );
}
