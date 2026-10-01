import { Download } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { SplitSection } from '@/components/ui/SplitSection';
import { ABOUT } from '@/content/company';

/** 09-06. Реквизиты: только подтверждённые строки; ИНН/КПП/ОГРН и скачивание карточки — когда появятся данные и PDF. */
export function AboutRequisites() {
  const { rows, cardPdf } = ABOUT.requisites;
  return (
    <Section tone="surface" labelledBy="about-req-title">
      <SplitSection number="06" id="about-req-title" title="Реквизиты">
        <dl className="border-t border-line">
          {rows
            .filter((r) => r.value)
            .map((r) => (
              <div key={r.term} className="grid grid-cols-1 gap-1 border-b border-line py-4 md:grid-cols-3 md:gap-6">
                <dt className="font-mono text-meta text-muted md:pt-1">{r.term}</dt>
                <dd className="text-body text-ink md:col-span-2">{r.value}</dd>
              </div>
            ))}
        </dl>
        {cardPdf ? (
          <Button href={cardPdf} download variant="secondary" leadingIcon={Download} className="mt-8">
            Скачать карточку компании
          </Button>
        ) : null}
      </SplitSection>
    </Section>
  );
}
