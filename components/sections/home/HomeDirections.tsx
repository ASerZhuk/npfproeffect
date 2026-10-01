import { Section } from '@/components/layout/Section';
import { DirectionCard } from '@/components/ui/DirectionCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HOME_DIRECTIONS } from '@/content/directions';

/** 01-03. Что мы делаем: пять направлений, единое окно ответственности. */
export function HomeDirections() {
  return (
    <Section labelledBy="home-directions-title">
      <SectionHeader number="03" labelTitle="Что мы делаем" id="home-directions-title" title="Пять направлений — одна ответственность за результат" />
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {HOME_DIRECTIONS.map((d) => (
          <div key={d.id} className="min-w-0">
            <DirectionCard
              direction={d.direction}
              title={d.title}
              text={d.text}
              href={d.href}
              image={d.image}
              icon={d.icon}
              sizes="(min-width: 1280px) 250px, (min-width: 768px) 50vw, 100vw"
              className="h-full"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
