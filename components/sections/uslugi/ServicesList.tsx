import { CodeXml, FileCog, Gauge, GraduationCap, LifeBuoy, PanelTop, Search, Truck, Wrench, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SERVICES } from '@/content/uslugi';

const ICONS: Record<(typeof SERVICES)[number]['icon'], LucideIcon> = { Search, FileCog, CodeXml, PanelTop, Truck, Wrench, Gauge, GraduationCap, LifeBuoy };

/** 06-02. Девять услуг по этапам: 4 / 5 колонок на XL, карточки не ссылки. */
export function ServicesList() {
  return (
    <Section tone="surface" labelledBy="services-list-title">
      <h2 id="services-list-title" className="sr-only">
        Услуги на этапах
      </h2>
      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-20 xl:gap-6">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <li key={s.n} className={`flex ${i < 4 ? 'xl:col-span-5' : 'xl:col-span-4'}`}>
              <article className="flex min-h-20 w-full items-start gap-4 rounded-md border border-line bg-canvas p-4">
                <Icon aria-hidden="true" className="size-icon-lg shrink-0 text-muted" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-h4 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-body text-muted">{s.text}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
