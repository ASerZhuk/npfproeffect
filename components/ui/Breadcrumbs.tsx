import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/cn';
import { JsonLd, breadcrumbLd } from '@/lib/seo';

export type Crumb = { label: string; href?: string };

type Props = { items: Crumb[]; className?: string };

/** G-02. Строка 44 px, meta; последний пункт — aria-current="page"; промежуточные сокращаются ellipsis на mobile. */
export function Breadcrumbs({ items, className }: Props) {
  return (
    <div className="bg-dark pt-4 text-canvas">
    <Container>
      <nav aria-label="Хлебные крошки" className={cn('min-h-11', className)}>
        <ol className="flex min-h-11 flex-nowrap items-center gap-2 font-mono text-meta">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.label} className="flex min-w-0 items-center gap-2">
                {last || !c.href ? (
                  <span aria-current={last ? 'page' : undefined} className="truncate text-canvas">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="block min-w-0 truncate py-3 text-canvas underline-offset-4 hover:text-surface hover:underline">
                    {c.label}
                  </Link>
                )}
                {last ? null : <ChevronRight aria-hidden="true" className="size-4 shrink-0 text-canvas" strokeWidth={2} />}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
    <JsonLd data={breadcrumbLd(items.map((c) => ({ name: c.label, path: c.href })))} />
    </div>
  );
}
