import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HOME_PROJECT_IDS, PROJECTS } from '@/content/projects';
import { ROUTES } from '@/content/nav';

/** 01-05. Проекты с измеримым эффектом: три карточки с реальными фото из презентации. */
export function HomeProjects() {
  const items = HOME_PROJECT_IDS.map((id) => PROJECTS.find((p) => p.id === id)!);
  return (
    <Section tone="surface" labelledBy="home-projects-title">
      <SectionHeader
        number="05"
        id="home-projects-title"
        title="Проекты с измеримым эффектом"
        lead="Цифры — из актов внедрения"
        action={
          <Button href={ROUTES.projects} variant="ghost" trailingIcon={ArrowRight}>
            Все проекты
          </Button>
        }
      />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <li key={p.id} className="flex">
            <ProjectCard
              className="w-full"
              href={p.href}
              image={p.image}
              decorativeImage
              meta={p.place}
              title={p.homeTitle ?? p.title}
              effect={p.effect}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
