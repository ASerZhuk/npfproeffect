import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { CaseFigure } from '@/components/ui/CaseFigure';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { CaseData } from '@/content/cases';

/** 08-07. Фото и схемы: только реальные материалы из презентации; без слотов-заглушек. */
export function CaseGallery({ c: C }: { c: CaseData }) {
  if (C.gallery.length === 0) return null;
  const single = C.gallery.length === 1;
  return (
    <Section tone="surface" labelledBy="case-gallery-title">
      <SectionHeader number="07" id="case-gallery-title" title="Фото и схемы" />
      <Grid className="mt-6 gap-y-6">
        {C.gallery.map((g) => (
          <div key={g.image.src} className={single ? 'col-span-4 lg:col-span-8 xl:col-span-8' : 'col-span-4 lg:col-span-4 xl:col-span-4'}>
            <CaseFigure image={g.image} caption={g.caption} sizes={single ? '(min-width: 1280px) 792px, 100vw' : '(min-width: 1280px) 384px, (min-width: 1024px) 50vw, 100vw'} />
          </div>
        ))}
      </Grid>
    </Section>
  );
}
