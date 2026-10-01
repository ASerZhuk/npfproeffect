import { Activity, ArrowUpRight, Bot, CircuitBoard, Cpu, Gauge, PanelTop, ScanLine, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { DirectionCardData } from '@/content/directions';
import type { ImageAsset } from '@/content/images';
import { cn } from '@/lib/cn';

const ICONS: Record<NonNullable<DirectionCardData['icon']>, LucideIcon> = { ScanLine, Gauge, Cpu, PanelTop, CircuitBoard, Bot, Activity };

type Props = Pick<DirectionCardData, 'direction' | 'title' | 'text' | 'href'> & {
  icon?: DirectionCardData['icon'];
  image?: ImageAsset;
  /** необязательный технический список (до 486 px) */
  list?: string[];
  /** wide — горизонтальная компоновка на 1280+ (пятая карточка главной) */
  layout?: 'default' | 'wide';
  /** large — миниатюра 282×212 вместо 180×136 (крупная карточка) */
  thumb?: 'sm' | 'lg';
  linkLabel?: string;
  headingLevel?: 3 | 4;
  sizes?: string;
  className?: string;
};

/**
 * Карточка направления (§8.9). Вся карточка кликабельна через растянутую ссылку на «Подробнее»;
 * hover/focus-within: рамка accent, ArrowUpRight сдвигается на 4 px, подъём translateY(-4px) (без тени).
 */
export function DirectionCard({ title, text, href, icon, image, list, layout = 'default', thumb = 'sm', linkLabel = 'Подробнее', headingLevel = 3, sizes, className }: Props) {
  const Icon = icon ? ICONS[icon] : null;
  const H = `h${headingLevel}` as 'h3' | 'h4';
  const wide = layout === 'wide';
  return (
    <article
      className={cn(
        'group relative flex min-h-card-min flex-col rounded-lg border border-line bg-surface p-5 shadow-card transition-card focus-within:border-accent hover:border-accent hover:shadow-card-hover motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 motion-safe:active:translate-y-0',
        wide && 'xl:flex-row xl:items-center xl:gap-8',
        className,
      )}
    >
      {image ? (
        <div className={cn('mb-4 overflow-hidden rounded-sm bg-canvas', wide && 'xl:mb-0 xl:shrink-0')}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes ?? '(min-width: 1280px) 282px, (min-width: 768px) 50vw, 100vw'}
            className={cn('aspect-2/1 w-full object-cover', wide && (thumb === 'lg' ? 'xl:h-53 xl:w-70.5' : 'xl:h-34 xl:w-45'))}
          />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col self-stretch">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <H className="font-display text-h4 font-semibold text-ink">{title}</H>
          </div>
          {Icon ? <Icon aria-hidden="true" className="size-icon-lg shrink-0 text-accent" strokeWidth={1.5} /> : null}
        </div>
        <p className="mt-3 max-w-body text-body text-muted">{text}</p>
        {list && list.length > 0 ? (
          <ul className="mt-4 max-w-tech space-y-1 text-body text-ink">
            {list.map((li) => (
              <li key={li} className="flex gap-2">
                <span aria-hidden="true">—</span>
                <span>{li}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          href={href}
          className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-label font-semibold text-accent transition-card after:absolute after:inset-0 group-hover:text-accent group-focus-within:text-accent"
        >
          {linkLabel}
          <ArrowUpRight aria-hidden="true" className="size-icon transition-card motion-safe:group-hover:translate-x-1 motion-safe:group-focus-within:translate-x-1" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
