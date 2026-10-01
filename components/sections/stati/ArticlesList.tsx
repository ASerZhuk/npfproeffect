'use client';

import { useState } from 'react';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { FilterChips } from '@/components/ui/FilterChips';
import { ARTICLES, ARTICLE_FILTERS } from '@/content/articles';

const VALUES = ARTICLE_FILTERS.map((f) => f.value as string);

/** 10-02. Фильтр (chips, колонки 2–8) и сетка 3×4; категория хранится в URL (?type=). Дат нет — не выдумываем. */
export function ArticlesList({ initialType }: { initialType?: string }) {
  const [current, setCurrent] = useState(initialType && VALUES.includes(initialType) ? initialType : 'all');

  const onChange = (next: string[]) => {
    const value = next[0] ?? 'all';
    setCurrent(value);
    window.history.replaceState(null, '', value === 'all' ? window.location.pathname : `?type=${value}`);
  };

  const items = current === 'all' ? ARTICLES : ARTICLES.filter((a) => a.type === current);

  return (
    <Section labelledBy="articles-list-title">
      <h2 id="articles-list-title" className="sr-only">
        Материалы
      </h2>
      <Grid>
        <div className="col-span-4 lg:col-span-8 xl:col-span-7">
          <FilterChips label="Тип материала" options={ARTICLE_FILTERS.map((f) => ({ value: f.value, label: f.label }))} value={[current]} onChange={onChange} allValue="all" />
        </div>
      </Grid>
      <div aria-live="polite" className="mt-6">
        {items.length ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {items.map((a) => (
              <li key={a.id} className="flex">
                <ArticleCard className="w-full" href={a.href} image={a.image} category={a.category} title={a.title} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lead text-ink">По выбранным параметрам материалов нет</p>
        )}
      </div>
    </Section>
  );
}
