import { Section } from '@/components/layout/Section';
import { SplitSection } from '@/components/ui/SplitSection';
import { ABOUT } from '@/content/company';
import { GeographyMap } from './GeographyMap';

/** География: карта России, увеличенный фрагмент с городами и список объектов. */
export function AboutGeography() {
  return (
    <Section tone="surface" labelledBy="about-geo-title">
      <SplitSection number="04" id="about-geo-title" title="География" lead={ABOUT.geographyLead}>
        <GeographyMap />
      </SplitSection>
    </Section>
  );
}
