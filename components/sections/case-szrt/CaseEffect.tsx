import { Metric } from '@/components/ui/Metric';
import type { CaseData } from '@/content/cases';

/** 08-06. Эффект: тёмная секция, заголовок 1–4, результаты 5–12 (2 колонки; 1 на 390). Без счётчиков. */
export function CaseEffect({ c: C }: { c: CaseData }) {
  return (
    <div aria-labelledby="case-effect-title" className="rounded-sm border border-line bg-surface p-6 text-ink">
          <h2 id="case-effect-title" className="font-display text-h2 font-semibold">
            Эффект
          </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {C.effects.map((e) => (
            <li key={e.label}>
              {e.value ? (
                <Metric value={e.value} label={e.label} source={C.effectSource} highlight />
              ) : (
                <div className="border-t border-line pt-4">
                  <h3 className="text-body text-ink">{e.label}</h3>
                </div>
              )}
            </li>
          ))}
        </ul>
    </div>
  );
}
