import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = { as?: ElementType; className?: string; children: ReactNode };

/** Сетка 4 / 4 / 8 / 12 колонок (390 / 768 / 1024 / 1280+). Колонки задаются утилитами col-span-* / col-start-*. */
export function Grid({ as: Tag = 'div', className, children }: Props) {
  return <Tag className={cn('grid-layout', className)}>{children}</Tag>;
}
