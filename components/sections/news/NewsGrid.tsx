import type { NewsItem } from '@/content/news';
import { NewsCard } from './NewsCard';

/** Сетка карточек новостей: 1 / 2 / 3 колонки (главная и /novosti). */
export function NewsGrid({ items, className = 'mt-6' }: { items: NewsItem[]; className?: string }) {
  return (
    <ul className={`${className} grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6`}>
      {items.map((n) => (
        <li key={n.slug} className="flex">
          <NewsCard n={n} />
        </li>
      ))}
    </ul>
  );
}
