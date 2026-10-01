import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Metric } from '@/components/ui/Metric';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MODERNIZATION_METRICS, MODERNIZED_MODELS } from '@/content/home';
import { ROUTES } from '@/content/nav';

/** 01-04. Модернизация вместо покупки нового (ключевая тёмная секция). Без счётчиков и parallax. */
export function HomeModernization() {
  return (
    <Section tone="dark" density="dark" labelledBy="home-modernization-title">
      <SectionHeader number="04" id="home-modernization-title" title="Модернизация вместо покупки нового" lead="Станки и прессы 1980-х получают современную СЧПУ, привод и автоматику" tone="dark" />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {MODERNIZATION_METRICS.map((m) => (
              <Metric key={m.value} value={m.value} label={m.label} tone="dark" />
            ))}
          </div>
        <div>
          <p className="text-body text-canvas">
            Модернизировали:{' '}
            {MODERNIZED_MODELS.map((m, i) => (
              <span key={m}>
                <span className="font-mono font-medium text-surface">{m}</span>
                {i < MODERNIZED_MODELS.length - 1 ? ', ' : '…'}
              </span>
            ))}
          </p>
          <Button href={ROUTES.modernization} trailingIcon={ArrowRight} className="mt-5 max-md:w-full">
            Оценить мой станок
          </Button>
          <p className="mt-4 text-meta text-canvas">* Ориентировочные значения, точная оценка — после обследования станка</p>
        </div>
      </div>
    </Section>
  );
}
