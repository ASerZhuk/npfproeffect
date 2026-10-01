import { SplitSection } from '@/components/ui/SplitSection';
import type { CaseData } from '@/content/cases';
import { CASE_ICONS } from './case-icons';

/** 08-05. Функции: пять строк min-height 72 px с предметными иконками. */
export function CaseFunctions({ c: C }: { c: CaseData }) {
  return (
    <div aria-labelledby="case-functions-title" className="rounded-sm border border-line-dark bg-dark-alt p-6">
      <SplitSection number="05" id="case-functions-title" title="Функции" tone="dark">
        <ul className="border-t border-line-dark">
          {C.functions.map(({ icon, label }) => {
            const Icon = icon ? CASE_ICONS[icon] : null;
            return (
              <li key={label} className="flex min-h-faq-row items-center gap-3 border-b border-line-dark py-3">
                {Icon ? <Icon aria-hidden="true" className="size-icon shrink-0 text-canvas" strokeWidth={2} /> : null}
                <h3 className="text-body text-surface">{label}</h3>
              </li>
            );
          })}
        </ul>
      </SplitSection>
    </div>
  );
}
