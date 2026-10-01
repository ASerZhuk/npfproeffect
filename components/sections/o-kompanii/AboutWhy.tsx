import { Factory, LifeBuoy, RefreshCcw, Workflow, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SplitSection } from '@/components/ui/SplitSection';
import { ABOUT } from '@/content/company';

const ICONS: Record<string, LucideIcon> = { Workflow, Factory, RefreshCcw, LifeBuoy };

/** 09-03. Почему мы: четыре фактических карточки (заголовок 2–5, карточки 6–12 в две колонки). */
export function AboutWhy() {
  return (
    <Section labelledBy="about-why-title">
      <SplitSection number="03" id="about-why-title" title="Почему мы">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {ABOUT.why.map((w) => {
            const Icon = ICONS[w.icon];
            return (
              <li key={w.title} className="flex flex-col rounded-md border border-line bg-surface p-card">
                <Icon aria-hidden="true" className="size-icon-lg text-muted" strokeWidth={2} />
                <h3 className="mt-4 font-display text-h4 font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-body text-muted">{w.text}</p>
              </li>
            );
          })}
        </ul>
      </SplitSection>
    </Section>
  );
}
