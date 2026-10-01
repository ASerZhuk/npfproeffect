'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type TariffState = { tariff: string | null; request: (name: string) => void };

const TariffContext = createContext<TariffState>({ tariff: null, request: () => {} });

/** Связывает выбор тарифа в 06-03 со скрытым полем формы G-03: «Запросить» запоминает тариф, прокручивает и фокусирует форму. */
export function TariffProvider({ children }: { children: ReactNode }) {
  const [tariff, setTariff] = useState<string | null>(null);
  const value = useMemo<TariffState>(
    () => ({
      tariff,
      request: (name) => {
        setTariff(name);
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.getElementById('cta')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        document.getElementById('cta-uslugi-name')?.focus({ preventScroll: true });
      },
    }),
    [tariff],
  );
  return <TariffContext.Provider value={value}>{children}</TariffContext.Provider>;
}

export const useTariff = () => useContext(TariffContext);
