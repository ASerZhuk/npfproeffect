import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EQUIPMENT } from '@/content/home';

/** 01-08. Оборудование и ПО: платформы текстом (wordmarks не имитируем), общие пиктограммы Cpu / MonitorCog. */
export function HomeEquipment() {
  return (
    <Section tone="surface" labelledBy="home-equipment-title">
        <SectionHeader number="08" id="home-equipment-title" title="Оборудование и ПО" lead="Работаем с отечественными и импортными платформами, помогаем с импортозамещением" />
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          {EQUIPMENT.map((name) => {
            return (
              <li key={name} className="flex min-h-18 items-center justify-center rounded-md border border-line bg-surface p-4 text-center text-nav text-ink">
                {name}
              </li>
            );
          })}
        </ul>
    </Section>
  );
}
