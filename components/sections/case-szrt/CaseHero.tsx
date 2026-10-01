import { Grid } from '@/components/layout/Grid';
import { Container } from '@/components/layout/Container';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Tag } from '@/components/ui/Tag';
import type { CaseData } from '@/content/cases';

/** 08-01. Паспорт кейса: H1, мета, три метрики (слева 1–8), схема системы (9–12). */
export function CaseHero({ c: C }: { c: CaseData }) {
  return (
    <section aria-labelledby="case-title" className="page-hero on-dark bg-dark text-surface hero-full">
      <HeroBackground image="case" />
      <Container>
        <Grid className="items-start gap-y-8">
          <div className="col-span-4 lg:col-span-5 xl:col-span-8">
            <h1 id="case-title" className="max-w-lead font-display text-h1 font-bold text-surface">
              {C.title}
            </h1>
            <p className="mt-6 font-mono text-meta text-canvas">{C.meta}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {C.heroMetrics.map((m) => (
                <Tag key={m.label} tone="dark" className="bg-dark-alt text-nav">
                  {m.value} {m.label}
                </Tag>
              ))}
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
