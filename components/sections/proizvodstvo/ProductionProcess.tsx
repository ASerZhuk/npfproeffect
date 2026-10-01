import { Box, CircuitBoard, Factory, FileCheck2, FlaskConical, LifeBuoy, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { ProcessRail, type RailStep } from '@/components/ui/ProcessRail';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PRODUCTION_STEPS } from '@/content/proizvodstvo';

const ICONS: Record<(typeof PRODUCTION_STEPS)[number]['icon'], LucideIcon> = { FileCheck2, CircuitBoard, Box, FlaskConical, Factory, LifeBuoy };

const STEPS: RailStep[] = PRODUCTION_STEPS.map((s) => ({ n: s.n, title: s.title, text: s.text, Icon: ICONS[s.icon] }));

/** 05-03. Как запускаем изделие: шесть шагов на process-rail (6 / 3×2 / 2×3 / вертикально). */
export function ProductionProcess() {
  return (
    <Section tone="dark" labelledBy="production-process-title">
      <SectionHeader number="03" id="production-process-title" title="Как запускаем изделие" tone="dark" />
      <ProcessRail steps={STEPS} tone="dark" className="mt-6" />
    </Section>
  );
}
