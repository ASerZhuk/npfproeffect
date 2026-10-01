import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MODERN_CASES } from '@/content/modernizaciya';
import { ROUTES } from '@/content/nav';

/** 04-06. Кейсы модернизации: 3 карточки (3 / 2+1 / 1), реальные фото из презентации. */
export function ModernCases() {
  return (
    <Section tone="surface" labelledBy="modern-cases-title">
      <SectionHeader
        number="06"
        id="modern-cases-title"
        title="Кейсы модернизации"
        action={
          <Button href={`${ROUTES.projects}?direction=modernization`} variant="ghost" trailingIcon={ArrowRight}>
            Все
          </Button>
        }
      />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
        {MODERN_CASES.map((c) => (
          <li key={c.id} className="flex">
            <ProjectCard className="w-full" href={c.href} image={c.image} decorativeImage meta={c.meta} title={c.title} effect={c.effect} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
