import { SplitSection } from '@/components/ui/SplitSection';
import type { CaseData } from '@/content/cases';
import { CASE_ICONS } from './case-icons';

/** 08-03. Состав системы: заголовок 2–5, пять моно-плашек в две колонки 6–12. */
export function CaseComposition({ c: C }: { c: CaseData }) {
  return (
    <div aria-labelledby="case-composition-title">
      <SplitSection number="03" id="case-composition-title" title="Состав системы">
        <ul className="flex flex-wrap gap-2">
          {C.composition.map(({ icon, label }) => {
            const Icon = icon ? CASE_ICONS[icon] : null;
            return (
              <li key={label} className="flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
                {Icon ? <Icon aria-hidden="true" className="size-icon-lg shrink-0 text-muted" strokeWidth={2} /> : null}
                <span className="text-nav text-ink">{label}</span>
              </li>
            );
          })}
        </ul>
      </SplitSection>
    </div>
  );
}
