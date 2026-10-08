import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatNewsDate, type NewsItem } from '@/content/news';

/** Карточка новости: превью 4:3 сверху, мета, заголовок до 3 строк, анонс до 3 строк, «Читать». Вся карточка — ссылка. */
export function NewsCard({ n, headingLevel = 3 }: { n: NewsItem; headingLevel?: 3 | 4 }) {
  const H = `h${headingLevel}` as 'h3' | 'h4';
  return (
    <article className="group relative flex w-full flex-col overflow-hidden rounded-md border border-line bg-surface transition-card focus-within:border-accent hover:border-accent">
      <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
        <Image
          src={n.image.src}
          alt={n.image.alt}
          fill
          sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-slow ease-enter group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-meta text-muted">
          Новость
          {n.date ? (
            <>
              {' · '}
              <time dateTime={n.date}>{formatNewsDate(n.date)}</time>
            </>
          ) : null}
        </p>
        <H className="mt-3 line-clamp-3 font-display text-h4 text-ink">
          <Link href={`/novosti/${n.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {n.title}
          </Link>
        </H>
        <p className="mt-3 line-clamp-3 text-body text-muted">{n.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-5 font-display text-label font-semibold text-accent">
          Читать
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-base ease-enter group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
