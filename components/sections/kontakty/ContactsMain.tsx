import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { ContactCard } from './ContactCard';
import { ContactForm } from './ContactForm';
import { ContactMap } from './ContactMap';

/** 11-01. Контакты и форма в одной строке; карта ниже на всю ширину. */
export function ContactsMain() {
  return (
    <Section className="pt-12 pb-hero" density="none" labelledBy="contacts-main-title">
      <h2 id="contacts-main-title" className="sr-only">
        Контакты и форма обратной связи
      </h2>
      <Grid className="items-stretch gap-y-6">
        <div className="col-span-4 lg:col-span-3 xl:col-span-6">
          <ContactCard />
        </div>
        <div className="col-span-4 lg:col-span-5 xl:col-span-6">
          <ContactForm />
        </div>
        <div className="col-span-4 lg:col-span-8 xl:col-span-12">
          <ContactMap />
        </div>
      </Grid>
    </Section>
  );
}
