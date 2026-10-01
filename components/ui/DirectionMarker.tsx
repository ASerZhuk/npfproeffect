import { DIRECTIONS, type DirectionId } from '@/content/directions';
import { cn } from '@/lib/cn';

type Props = {
  direction: DirectionId;
  /** sm — 4×16 (чипы, теги), lg — 4×32 (карточки), dot — 8×8 */
  size?: 'sm' | 'lg' | 'dot';
  className?: string;
};

const SIZE = { sm: 'h-marker-h w-marker-w', lg: 'h-marker-h-lg w-marker-w', dot: 'size-dot' } as const;

/** Пастельный маркер направления. Только форма-маркер, никогда не текст и не фон карточки. */
export function DirectionMarker({ direction, size = 'sm', className }: Props) {
  return <span aria-hidden="true" className={cn('inline-block shrink-0 rounded-sm', SIZE[size], DIRECTIONS[direction].markerClass, className)} />;
}
