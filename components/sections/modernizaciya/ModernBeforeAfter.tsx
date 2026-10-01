import { ArrowRight } from 'lucide-react';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { DataTable } from '@/components/ui/DataTable';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MODERN_ROLES } from '@/content/modernizaciya';

/** 04-02. Было → стало: таблица ролей (≥768), на 390 — карточки с подписями «Было» / «Стало». */
export function ModernBeforeAfter() {
  return (
    <Section labelledBy="modern-ba-title">
      <SectionHeader number="02" id="modern-ba-title" title="Было → стало" lead="Что меняется для персонала" />
      <Grid className="mt-6">
        <div className="col-span-4 lg:col-span-8 xl:col-span-12">
        <DataTable
          caption="Что меняется для персонала после модернизации"
          columns={[
            { key: 'role', header: 'Роль', className: 'w-2/11' },
            { key: 'was', header: 'Было', className: 'w-4/11' },
            { key: 'now', header: 'Стало', className: 'w-5/11' },
          ]}
          rows={MODERN_ROLES.map((r) => ({
            role: <span className="font-semibold">{r.role}</span>,
            was: r.was,
            now: (
              <span className="flex items-start gap-3">
                <ArrowRight aria-hidden="true" className="mt-0.5 hidden size-icon shrink-0 text-accent md:block" strokeWidth={2} />
                <span>{r.now}</span>
              </span>
            ),
          }))}
        />
        </div>
      </Grid>
    </Section>
  );
}
