import { Cpu, Gauge, PanelTop, Ruler, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MODERN_INCLUDES } from '@/content/modernizaciya';

const ICONS: Record<(typeof MODERN_INCLUDES)[number]['icon'], LucideIcon> = { Cpu, Gauge, Ruler, PanelTop };

/** 04-04. Что входит: заголовок слева (колонки 2–5), четыре строки справа (6–12, min 96 px). */
export function ModernIncludes() {
  return (
    <Section tone="dark" labelledBy="modern-includes-title">
        <SectionHeader number="04" id="modern-includes-title" title="Что входит" tone="dark" />
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {MODERN_INCLUDES.map((r) => {
            const Icon = ICONS[r.icon];
            return (
              <li key={r.title} className="flex items-start gap-4 rounded-sm border border-line-dark bg-dark-alt p-5">
                <Icon aria-hidden="true" className="mt-1 size-icon-lg shrink-0 text-accent-light" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-h3 font-semibold text-accent-light">{r.title}</h3>
                  <p className="mt-2 text-body text-canvas">{r.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
    </Section>
  );
}
