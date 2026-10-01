import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CtaSection } from '@/components/ui/CtaSection';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Metric } from '@/components/ui/Metric';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { DirectionHub } from '@/content/direction-hubs';
import { ROUTES } from '@/content/nav';
import { PROJECTS } from '@/content/projects';

/** Посадочная направления — раскладка страницы 03 (hero → задачи → результат → архитектура → проекты → CTA). */
export function DirectionHubPage({ h }: { h: DirectionHub }) {
  const projects = h.projectIds.map((id) => PROJECTS.find((p) => p.id === id)!).filter(Boolean);
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: 'Главная', href: ROUTES.home }, { label: 'Решения', href: ROUTES.solutions }, { label: h.crumb }]} />
      <section aria-labelledby="hub-hero-title" className="page-hero on-dark bg-dark text-surface hero-full">
        <HeroBackground image={h.heroImage} />
        <Container>
          <Grid className="items-center gap-y-8">
            <div className="col-span-4 lg:col-span-5 xl:col-span-7">
              <h1 id="hub-hero-title" className="font-display text-h1 font-bold text-surface">
                {h.title}
              </h1>
              <p className="mt-6 max-w-lead text-lead text-surface">{h.lead}</p>
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                <Button href={ROUTES.quiz} size="lg" trailingIcon={ArrowRight}>
                  Рассчитать проект
                </Button>
                <Button href="#hub-projects" variant="secondary" size="lg">
                  Смотреть проекты
                </Button>
              </div>
            </div>
          </Grid>
        </Container>
      </section>

      <Section labelledBy="hub-tasks-title">
        <SectionHeader number="02" id="hub-tasks-title" title="Какие задачи решаем" />
        <ul className="mt-6 flex flex-wrap gap-2">
          {h.tasks.map((t) => (
            <li key={t} className="flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
              <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-muted" strokeWidth={2} />
              <span className="text-nav text-ink">{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="dark" labelledBy="hub-results-title">
        <SectionHeader number="03" id="hub-results-title" title="Результат для бизнеса" tone="dark" />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
          {h.results.map((m) => (
            <Metric key={m.label} value={m.value} label={m.label} tone="dark" />
          ))}
        </div>
        <p className="mt-6 font-mono text-meta text-canvas">{h.resultsSource}</p>
      </Section>

      <Section tone="surface" labelledBy="hub-levels-title">
        <SectionHeader number="04" id="hub-levels-title" title="Как устроена система" lead="Трёхуровневая архитектура" />
        <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {h.levels.map((l, i) => (
            <li key={l} className="rounded-md border border-line bg-surface p-card">
              <p className="font-mono text-meta text-muted">Уровень {i + 1}</p>
              <h3 className="mt-3 font-display text-h4 font-semibold text-ink">{l}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="hub-projects" labelledBy="hub-projects-title" className="scroll-mt-20">
        <SectionHeader
          number="05"
          id="hub-projects-title"
          title="Проекты направления"
          action={
            <Button href={`${ROUTES.projects}?direction=${h.filter}`} variant="ghost" trailingIcon={ArrowRight}>
              Все проекты
            </Button>
          }
        />
        <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {projects.map((p) => (
            <li key={p.id} className="flex">
              <ProjectCard className="w-full" href={p.href} image={p.image} meta={p.place} title={p.title} effect={p.effect} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection source={`hub-${h.slug}`} />
    </PageShell>
  );
}
