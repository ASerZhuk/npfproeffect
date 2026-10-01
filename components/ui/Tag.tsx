import type { ReactNode } from 'react';
import type { DirectionId } from '@/content/directions';
import { cn } from '@/lib/cn';
import { DirectionMarker } from './DirectionMarker';

type Props = { direction?: DirectionId; tone?: 'light' | 'dark'; className?: string; children: ReactNode };

/** Статический тег/метка направления: 32 px, рамка line, моно meta, слева маркер 4×16. */
export function Tag({ direction, tone = 'light', className, children }: Props) {
  return (
    <span
      className={cn(
        'inline-flex min-h-8 items-center gap-2 rounded-sm border px-3 py-1 font-mono text-meta',
        tone === 'dark' ? 'border-line-dark text-canvas' : 'border-line bg-surface text-ink',
        className,
      )}
    >
      {direction ? <DirectionMarker direction={direction} /> : null}
      {children}
    </span>
  );
}
