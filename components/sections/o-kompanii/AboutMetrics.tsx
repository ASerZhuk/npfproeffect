import { Section } from '@/components/layout/Section';
import { Metric } from '@/components/ui/Metric';
import { ABOUT } from '@/content/company';

const XL_COLS: Record<number, string> = { 3: 'xl:grid-cols-3', 4: 'xl:grid-cols-4', 5: 'xl:grid-cols-5' };

/** 09-02. Метрики: показываются только подтверждённые слоты (год основания и число инженеров — null до подтверждения). */
export function AboutMetrics() {
  const f = ABOUT.facts;
  const items: { value: string; label: string }[] = [];
  if (f.foundedYear) items.push({ value: `С ${f.foundedYear} г.`, label: 'на рынке' });
  items.push({ value: f.objects, label: 'объектов' }, { value: f.regions, label: 'региона' });
  if (f.engineers) items.push({ value: f.engineers, label: 'инженеров в штате' });
  return (
    <Section tone="surface" density="dense" labelledBy="about-metrics-title">
      <h2 id="about-metrics-title" className="sr-only">
        Компания в цифрах
      </h2>
      <ul className={`grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ${XL_COLS[items.length + 1] ?? 'xl:grid-cols-3'}`}>
        {items.map((m) => (
          <li key={m.label}>
            <Metric value={m.value} label={m.label} />
          </li>
        ))}
        <li>
          <div className="border-t border-line pt-4">
            <p className="font-display text-h4 font-semibold text-ink">{f.ownProduction}</p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
