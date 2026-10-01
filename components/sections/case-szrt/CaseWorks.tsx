import { SplitSection } from '@/components/ui/SplitSection';
import type { CaseData } from '@/content/cases';

/** 08-04. Комплекс работ: семь пронумерованных строк на тонкой вертикальной направляющей. */
export function CaseWorks({ c: C }: { c: CaseData }) {
  return (
    <div aria-labelledby="case-works-title">
      <SplitSection number="04" id="case-works-title" title="Комплекс работ">
        <ol className="flex flex-wrap gap-2">
          {C.works.map((w, i) => (
            <li key={w} className="flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 py-2">
              <span aria-hidden="true" className="text-meta text-muted tabular">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-nav text-ink">{w}</h3>
            </li>
          ))}
        </ol>
      </SplitSection>
    </div>
  );
}
