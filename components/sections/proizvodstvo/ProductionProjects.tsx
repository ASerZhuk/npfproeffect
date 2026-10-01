import { Section } from '@/components/layout/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PRODUCTION_PROJECTS } from '@/content/proizvodstvo';

/** 05-04. Проекты: 3 карточки (3 / 3 / 2+1 / 1). У «Возрождения» нет фото — нейтральный слот. */
export function ProductionProjects() {
  return (
    <Section tone="surface" id="production-projects" labelledBy="production-projects-title" className="scroll-mt-20">
      <SectionHeader number="04" id="production-projects-title" title="Проекты" />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {PRODUCTION_PROJECTS.map((p) => (
          <li key={p.id} className="flex">
            <ProjectCard className="w-full" href={p.href} image={p.image} decorativeImage meta={p.meta} title={p.title} effect={p.effect} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
