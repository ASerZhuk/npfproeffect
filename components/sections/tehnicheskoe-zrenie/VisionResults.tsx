import { Section } from '@/components/layout/Section';
import { Metric } from '@/components/ui/Metric';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VISION_METRICS, VISION_METRICS_SOURCE } from '@/content/vision';

/** 03-03. Результат для бизнеса: тёмная полоса, 4 метрики (4 / 2×2 / 1), без счётчиков; источник подписан. */
export function VisionResults() {
  return (
    <Section tone="dark" labelledBy="vision-results-title">
      <SectionHeader number="03" id="vision-results-title" title="Результат для бизнеса" tone="dark" />
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
        {VISION_METRICS.map((m) => (
          <Metric key={m.value} value={m.value} label={m.label} tone="dark" />
        ))}
      </div>
      <p className="mt-6 font-mono text-meta text-canvas">{VISION_METRICS_SOURCE}</p>
    </Section>
  );
}
