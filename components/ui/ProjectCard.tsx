import { ArrowUpRight, ImageOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ImageAsset } from '@/content/images';
import { cn } from '@/lib/cn';

type Props = {
  /** без href карточка не кликабельна (у проекта нет своей страницы) */
  href?: string;
  /** без image выводится нейтральный слот с иконкой (без стоковых картинок) */
  image?: ImageAsset;
  /** contain — реальные фото/схемы из PDF (surface-фон, не растягивать); cover — сгенерированные общие фото */
  imageFit?: 'cover' | 'contain';
  /** «год · направление» либо «отрасль · город» */
  meta: string;
  title: string;
  /** подтверждённый результат; для неподтверждённого не передавать */
  effect?: string;
  /** устарело: alt берётся из image.alt всегда (нужен для SEO картинок) */
  decorativeImage?: boolean;
  /** подпись слота без фото (по умолчанию нет) */
  placeholderLabel?: string;
  headingLevel?: 3 | 4;
  sizes?: string;
  className?: string;
};

/** Карточка проекта (§8.10): медиа 4:3, ниже padding 24; hover — рамка accent, zoom ≤104 %, ArrowUpRight. */
export function ProjectCard({ href, image, imageFit = 'contain', meta, title, effect, placeholderLabel, headingLevel = 3, sizes = '(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw', className }: Props) {
  const H = `h${headingLevel}` as 'h3' | 'h4';
  return (
    <article className={cn('group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card', href && 'transition-card focus-within:border-accent hover:border-accent hover:shadow-card-hover motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0', className)}>
      <div className="relative flex aspect-3/1 items-center justify-center overflow-hidden border-b border-line bg-card">
        {!image ? (
          <div className="flex flex-col items-center gap-3 px-6 text-center text-muted">
            <ImageOff aria-hidden="true" className="size-icon-lg" strokeWidth={2} />
            {placeholderLabel ? <p className="font-mono text-meta">{placeholderLabel}</p> : null}
          </div>
        ) : imageFit === 'contain' ? (
          // Реальные фото/схемы из PDF: не растягиваем выше натурального размера (case-photos.md)
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes}
            unoptimized
            className={cn('h-auto max-h-full w-auto max-w-full object-contain p-4 transition-card', href && 'motion-safe:group-hover:scale-104')}
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className={cn('object-cover transition-card', href && 'motion-safe:group-hover:scale-104')}
          />
        )}
      </div>
      <div className="relative flex flex-1 flex-col px-6 pt-5 pb-5">
        <p className="absolute -top-3 left-6 max-w-[calc(100%-3rem)] rounded-full border border-line bg-surface px-3 py-1 text-meta text-accent">{meta}</p>
        <H className="mt-3 font-display text-h4 font-semibold text-ink">
          {href ? (
            <Link href={href} className="transition-card after:absolute after:inset-0 group-hover:text-accent">
              {title}
            </Link>
          ) : (
            title
          )}
        </H>
        {effect ? <p className="mt-4 text-body text-muted">{effect}</p> : null}
        {href ? (
          <div className="mt-auto flex justify-end pt-4">
            <ArrowUpRight aria-hidden="true" className="size-icon text-accent transition-card motion-safe:group-hover:translate-x-1" strokeWidth={2} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
