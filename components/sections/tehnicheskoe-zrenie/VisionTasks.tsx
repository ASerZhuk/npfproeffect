import { Barcode, PackageCheck, Palette, Ruler, ScanLine, TextSearch, Thermometer, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VISION_TASKS, type VisionTask } from '@/content/vision';

const ICONS: Record<VisionTask['icon'], LucideIcon> = { ScanLine, Ruler, Barcode, TextSearch, Thermometer, Palette, PackageCheck };

/** 03-02. Какие задачи решаем: 20 пунктов, 4 / 3 / 2 / 1 колонки, тонкие разделители, иконка по смысловой группе. */
export function VisionTasks() {
  return (
    <Section labelledBy="vision-tasks-title">
      <SectionHeader number="02" id="vision-tasks-title" title="Какие задачи решаем" />
      <ul className="mt-6 flex flex-wrap gap-2">
        {VISION_TASKS.map((t) => {
          const Icon = ICONS[t.icon];
          return (
            <li key={t.label} className="flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
              <Icon aria-hidden="true" className="size-4 shrink-0 text-muted" strokeWidth={2} />
              <span className="text-nav text-ink">{t.label}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
