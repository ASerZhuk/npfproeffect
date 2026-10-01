import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Tag } from '@/components/ui/Tag';
import type { DirectionId } from '@/content/directions';
import { HERO_METRICS } from '@/content/home';
import { COMPANY } from '@/content/site';
import { ROUTES } from '@/content/nav';
import { hubHref } from '@/content/direction-hubs';
import Link from 'next/link';

const CHIPS: { label: string; direction: DirectionId; href: string }[] = [
  { label: 'АСУ ТП', direction: 'asutp', href: hubHref('asu-tp') },
  { label: 'Тех. зрение', direction: 'stz', href: ROUTES.vision },
  { label: 'Станки и прессы', direction: 'chpu', href: ROUTES.modernization },
  { label: 'Стенды', direction: 'iis', href: hubHref('ispytatelnye-stendy') },
  { label: 'РЭА и РТК', direction: 'rtk', href: ROUTES.production },
];

/** Тёмный первый экран и отдельная светлая полоса показателей. */
export function HomeHero() {
  return (
    <>
    <section aria-labelledby="home-hero-title" className="hero-full home-hero on-dark bg-dark pt-hero pb-hero text-surface">
      <HeroBackground image="home" />
      <Container>
        <div className="max-w-185">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-nav text-accent-light"><span aria-hidden="true" className="h-px w-8 bg-accent-light" />{COMPANY.tagline}</p>
            <h1 id="home-hero-title" className="mt-4 font-display text-display font-bold">
              Автоматизация производств{' '}<br className="hidden xl:block" />
              и модернизация оборудования{' '}<br className="hidden xl:block" />
              <span className="text-accent-light">под ключ</span>
            </h1>
            <p className="mt-5 max-w-140 text-lead text-canvas">
              АСУ ТП, учёт энергоресурсов, техническое зрение, испытательные стенды, модернизация станков и прессов, производство РЭА и роботизированных комплексов. От обследования до сервиса.
            </p>
            <div className="mt-7 flex flex-col gap-4 md:flex-row md:flex-wrap">
              <Button href={ROUTES.quiz} size="lg" trailingIcon={ArrowRight}>
                Рассчитать стоимость
              </Button>
              <Button href={ROUTES.projects} size="lg" variant="secondary">
                Смотреть 30+ проектов
              </Button>
            </div>
            <ul className="mt-6 hidden flex-wrap gap-2 md:flex" aria-label="Направления работ">
              {CHIPS.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="block rounded-full">
                    <Tag tone="dark" className="rounded-full bg-dark-alt px-4 text-nav transition-colors duration-fast hover:border-surface hover:text-surface">{c.label}</Tag>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
    <section aria-label="Показатели и полный цикл работ" className="border-b border-line bg-surface py-8">
      <Container className="grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-5">
          {HERO_METRICS.map((m) => (
            <div key={m.value} className="min-w-0 border-line px-3 text-center md:border-r">
              <p className="font-display text-metric font-bold text-ink tabular">{m.value}</p>
              <p className="mt-1 text-body text-muted">{m.label}</p>
              {'source' in m ? <p className="mt-1 text-meta text-muted">{m.source}</p> : null}
            </div>
          ))}
        <p className="col-span-2 flex items-center justify-center gap-3 px-4 text-body text-ink md:col-span-4 lg:col-span-1">
          <ShieldCheck aria-hidden="true" className="size-10 shrink-0 text-accent" strokeWidth={1.5} />
          <span>
            <span className="block">Полный цикл:</span>
            <span className="block whitespace-nowrap">ПИР → ПНР → ТО</span>
          </span>
        </p>
      </Container>
    </section>
    </>
  );
}
