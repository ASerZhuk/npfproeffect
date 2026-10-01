'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Заголовок, получающий фокус при открытии страницы (после router.push Next сам двигает фокус — поэтому с небольшой задержкой). */
export function FocusHeading({ id, className, children }: { id: string; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const t = window.setTimeout(() => ref.current?.focus({ preventScroll: false }), 60);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <h1 ref={ref} id={id} tabIndex={-1} className={className}>
      {children}
    </h1>
  );
}
