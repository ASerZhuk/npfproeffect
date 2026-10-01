import { ArrowUpRight, Bot, ChartNoAxesCombined, FlaskConical, RefreshCcw, ScanSearch, Zap, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TASK_CARDS, type TaskCardData } from '@/content/solutions';

const ICONS: Record<TaskCardData['icon'], LucideIcon> = { Zap, ScanSearch, RefreshCcw, ChartNoAxesCombined, FlaskConical, Bot };

/** 02-03. Типовые задачи клиентов: 6 карточек 3×2 / 3×2 / 2×3 / 1; каждая ведёт к решению или проектам. */
export function SolutionsTasks() {
  return (
    <Section tone="surface" labelledBy="solutions-tasks-title">
      <Grid className="items-start gap-y-4">
        <SectionLabel number="03" className="col-span-4 lg:col-span-8 xl:col-span-1" />
        <h2 id="solutions-tasks-title" className="col-span-4 font-display text-h2 font-semibold text-ink lg:col-span-8 xl:col-span-6">
          Типовые задачи клиентов
        </h2>
      </Grid>
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {TASK_CARDS.map((t) => {
          const Icon = ICONS[t.icon];
          return (
            <li key={t.title} className="flex">
              <article className="group relative flex min-h-28 w-full flex-col justify-between gap-3 rounded-md border border-line bg-canvas p-card transition-card focus-within:border-accent hover:border-accent motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0">
                <Icon aria-hidden="true" className="size-icon-lg text-muted transition-card group-hover:text-accent" strokeWidth={2} />
                <h3 className="flex items-end justify-between gap-4 font-display text-h4 font-semibold text-ink">
                  <Link href={t.href} className="transition-card after:absolute after:inset-0 group-hover:text-accent">
                    {t.title}
                  </Link>
                  <ArrowUpRight aria-hidden="true" className="size-icon-lg shrink-0 transition-card motion-safe:group-hover:translate-x-1" strokeWidth={2} />
                </h3>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
