import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TRUSTED_CLIENTS } from '@/content/home';

/** 01-02. Нам доверяют: только текстовые названия (логотипы без файлов правообладателей не реконструируем). */
export function HomeTrust() {
  return (
    <Section tone="surface" density="dense" labelledBy="home-trust-title">
        <SectionHeader number="02" id="home-trust-title" title="Нам доверяют" lead="Промышленные предприятия, АПК, фарма, ЖКХ" />
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {TRUSTED_CLIENTS.map((name) => (
            <li key={name} className="flex min-h-18 items-center justify-center rounded-md border border-line bg-canvas p-4 text-center text-nav text-ink">
              {name}
            </li>
          ))}
        </ul>
    </Section>
  );
}
