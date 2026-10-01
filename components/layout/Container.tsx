import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = { as?: ElementType; className?: string; children: ReactNode };

/** Контейнер 1200 / 912 / 704 / 358 (поля задаёт --page-pad). */
export function Container({ as: Tag = 'div', className, children }: Props) {
  return <Tag className={cn('container-page', className)}>{children}</Tag>;
}
