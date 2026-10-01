import Image from 'next/image';
import Link from 'next/link';
import type { ImageAsset } from '@/content/images';
import { cn } from '@/lib/cn';

type Props = {
  /** без href карточка — не ссылка (страницы материалов ещё не опубликованы) */
  href?: string;
  image: ImageAsset;
  category: string;
  /** дата в тексте, например «12 марта 2026»; без реальной даты не передавать */
  date?: string;
  dateTime?: string;
  title: string;
  headingLevel?: 3 | 4;
  sizes?: string;
  className?: string;
};

/** Карточка статьи (§8.11): медиа 4:3, категория/дата meta, заголовок h4 до 3 строк, ссылка на весь заголовок. */
export function ArticleCard({ href, image, category, date, dateTime, title, headingLevel = 3, sizes = '(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw', className }: Props) {
  const H = `h${headingLevel}` as 'h3' | 'h4';
  return (
    <article className={cn('group relative flex items-center gap-4 overflow-hidden rounded-md border border-line bg-surface p-3 transition-card focus-within:border-accent', href && 'hover:border-accent', className)}>
      <div className="relative h-18 w-22 shrink-0 overflow-hidden rounded-sm bg-canvas">
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-meta text-muted">
          {category}
          {date ? (
            <>
              {' · '}
              <time dateTime={dateTime}>{date}</time>
            </>
          ) : null}
        </p>
        <H className="mt-2 font-display text-body font-medium text-ink">
          {href ? (
            <Link href={href} className="underline decoration-transparent underline-offset-4 transition-card after:absolute after:inset-0 group-hover:decoration-current group-focus-within:decoration-current">
              {title}
            </Link>
          ) : (
            title
          )}
        </H>
      </div>
    </article>
  );
}
