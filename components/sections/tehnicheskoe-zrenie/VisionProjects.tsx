import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ROUTES } from '@/content/nav';
import { VISION_PROJECTS } from '@/content/vision';

/** 03-05. Проекты направления: две реальные карточки (третий слот-резерв не выводится и не растягивается). */
export function VisionProjects() {
  return (
    <Section id="vision-projects" labelledBy="vision-projects-title" className="scroll-mt-20">
      <SectionHeader
        number="05"
        id="vision-projects-title"
        title="Проекты направления"
        action={
          <Button href={`${ROUTES.projects}?direction=vision`} variant="ghost" trailingIcon={ArrowRight}>
            Все проекты
          </Button>
        }
      />
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {VISION_PROJECTS.map((p) => (
          <li key={p.id} className="flex">
            <ProjectCard className="w-full" href={p.href} image={p.image} decorativeImage meta={p.meta} title={p.title} effect={p.effect} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
