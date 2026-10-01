import { ArrowRight, FileCog, MonitorCog, PanelTop, Search, ShieldCheck, Wrench } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROCESS_STEPS } from '@/content/process';

const ICONS = { Search, FileCog, MonitorCog, PanelTop, Wrench, ShieldCheck };

/** 01-06. Полный цикл работ: последовательная схема из шести этапов. */
export function HomeProcess() {
  return (
    <Section tone="dark" labelledBy="home-process-title">
      <SectionHeader number="06" id="home-process-title" title="Полный цикл работ" lead="Один подрядчик — от обследования до сервиса" tone="dark" />
      <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {PROCESS_STEPS.map((step, index) => {
          const Icon = ICONS[step.icon];
          return (
            <li key={step.n} className="home-process-step relative">
              <div className="home-process-card transition-card relative grid h-full grid-cols-[56px_minmax(0,1fr)] items-center gap-4 rounded-lg border p-5 md:flex md:flex-col md:items-stretch md:gap-6">
                <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
                  <span className="home-process-icon transition-card grid size-12 shrink-0 place-items-center rounded-md border">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className="home-process-number font-mono text-meta font-medium tabular">{step.n}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-h4 font-semibold text-surface">{step.title}</h3>
                  <p className="mt-3 text-body text-canvas/80">{step.text}</p>
                </div>
              </div>
              {index < PROCESS_STEPS.length - 1 ? (
                <ArrowRight aria-hidden="true" className="home-process-arrow absolute size-4" strokeWidth={1.5} />
              ) : null}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
