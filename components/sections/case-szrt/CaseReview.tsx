import { FileText } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SplitSection } from '@/components/ui/SplitSection';
import type { CaseData } from '@/content/cases';

/** 08-08. Отзыв заказчика: выводится только при наличии реального согласованного отзыва. */
export function CaseReview({ c: C }: { c: CaseData }) {
  const r = C.review;
  if (!r) return null;
  return (
    <Section tone="surface" labelledBy="case-review-title">
      <SplitSection number="08" id="case-review-title" title="Отзыв заказчика">
        <div className="max-w-lead rounded-md border border-line p-card">
          <FileText aria-hidden="true" className="size-icon-lg text-muted" strokeWidth={2} />
          <blockquote className="mt-4 text-lead text-ink">{r.text}</blockquote>
          <p className="mt-4 font-mono text-meta text-muted">{r.source}</p>
        </div>
      </SplitSection>
    </Section>
  );
}
