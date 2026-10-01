import { BrickWall, CircuitBoard, Droplets, Factory, FlaskConical, Newspaper, Pill, Wheat, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { INDUSTRIES } from '@/content/directions';
import { ROUTES } from '@/content/nav';

const ICONS: Record<(typeof INDUSTRIES)[number]['icon'], LucideIcon> = { Factory, Wheat, Pill, Newspaper, FlaskConical, Droplets, BrickWall, CircuitBoard };

/** 01-07. Отрасли: 9 строк в 3 колонки, каждая — ссылка на /proekty с фильтром отрасли. */
export function HomeIndustries() {
  return (
    <Section labelledBy="home-industries-title">
      <SectionHeader number="07" id="home-industries-title" title="Отрасли" />
      <ul className="mt-6 flex flex-wrap gap-2">
        {INDUSTRIES.map((ind) => {
          const Icon = ICONS[ind.icon];
          return (
            <li key={ind.id}>
              <Link href={`${ROUTES.projects}?industry=${ind.id}`} className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-nav transition-colors duration-fast hover:border-accent hover:text-accent">
                <Icon aria-hidden="true" className="size-4 shrink-0 text-muted group-hover:text-accent" strokeWidth={2} />
                <span>{ind.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
