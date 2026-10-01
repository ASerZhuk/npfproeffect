'use client';

import { CtaSection } from '@/components/ui/CtaSection';
import { useTariff } from './TariffContext';

/** 06-04. G-03 с передачей выбранного тарифа скрытым полем `tariff`. */
export function ServicesCta() {
  const { tariff } = useTariff();
  return <CtaSection source="uslugi" hiddenFields={tariff ? { tariff } : undefined} note={tariff ? `Выбран тариф: ${tariff}` : undefined} />;
}
