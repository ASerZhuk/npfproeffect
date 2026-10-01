import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

type Props = {
  /** фон секции: canvas (по умолчанию), surface, dark */
  tone?: 'canvas' | 'surface' | 'dark';
  /** вертикальный ритм из общих токенов; none — padding задаёт вызывающий */
  density?: 'regular' | 'dense' | 'dark' | 'none';
  id?: string;
  /** id заголовка секции (aria-labelledby) */
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

const TONE = { canvas: 'bg-canvas text-ink', surface: 'bg-surface text-ink', dark: 'on-dark blue-section bg-dark text-surface' } as const;
const DENSITY = { regular: 'py-section', dense: 'py-section-dense', dark: 'py-section-dark', none: '' } as const;

/** Full-bleed фон → Container. Каждая секция страницы = <Section>. */
export function Section({ tone = 'canvas', density = 'regular', id, labelledBy, className, innerClassName, children }: Props) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(TONE[tone], DENSITY[density], className)}>
      <Container className={cn(tone === 'dark' && 'relative z-10', innerClassName)}>{children}</Container>
    </section>
  );
}
