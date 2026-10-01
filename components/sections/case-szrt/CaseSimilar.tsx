import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { CaseData } from '@/content/cases';
import { PROJECTS } from '@/content/projects';

/** 08-10. Похожие проекты: сначала то же направление, затем остальные; только проекты со своей страницей. */
export function CaseSimilar({ c: C }: { c: CaseData }) {
  const self = PROJECTS.find((p) => p.id === C.projectId);
  const others = PROJECTS.filter((p) => p.id !== C.projectId && p.href);
  const items = [...others.filter((p) => p.filterDirection === self?.filterDirection), ...others.filter((p) => p.filterDirection !== self?.filterDirection)].slice(0, 3);
  return (
    <Section tone="surface" labelledBy="case-similar-title">
      <SectionHeader number="10" id="case-similar-title" title="Похожие проекты" />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {items.map((p) => (
          <li key={p.id} className="flex">
            <ProjectCard className="w-full" href={p.href} image={p.image} meta={p.directionLabel} title={p.title} effect={p.effect} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
