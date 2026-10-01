import Image from 'next/image';
import type { ImageAsset } from '@/content/images';
import { cn } from '@/lib/cn';

type Props = {
  image: ImageAsset;
  /** подпись meta: что изображено (обязательна по case-photos.md) */
  caption: string;
  /** пустой alt, если рядом уже есть подпись с тем же смыслом */
  decorativeAlt?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Фото/схема кейса из презентации: контейнер surface + рамка line, object-fit: contain, padding 16–24 px.
 * Изображение не растягивается выше натурального размера (w-auto + max-w-full при заданных width/height).
 */
export function CaseFigure({ image, caption, decorativeAlt, sizes = '(min-width: 1280px) 590px, 100vw', className }: Props) {
  return (
    <figure className={cn('m-0', className)}>
      <div className="flex items-center justify-center rounded-md border border-line bg-surface p-4 md:p-6">
        {/* unoptimized: исходники уже малы (230–970 px); повторное сжатие ухудшило бы читаемость схем */}
        <Image
          src={image.src}
          alt={decorativeAlt ? '' : image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          unoptimized
          className="h-auto w-auto max-w-full object-contain"
        />
      </div>
      <figcaption className="mt-3 font-mono text-meta text-muted on-dark:text-canvas">{caption}</figcaption>
    </figure>
  );
}
