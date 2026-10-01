'use client';

import { ArrowRight, SlidersHorizontal, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useId, useRef, useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Field';
import { FilterChips } from '@/components/ui/FilterChips';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS, PROJECT_FILTER_DIRECTIONS, PROJECT_FILTER_INDUSTRIES } from '@/content/projects';

const PAGE_SIZE = 9;
const ALL = 'all';

const DIRECTION_OPTIONS = [{ value: ALL, label: 'Все' }, ...PROJECT_FILTER_DIRECTIONS];
const INDUSTRY_OPTIONS = [{ value: ALL, label: 'Все отрасли' }, ...PROJECT_FILTER_INDUSTRIES];

const known = (list: readonly { value: string }[], v: string | null | undefined) => (v && list.some((o) => o.value === v) ? v : ALL);

type ViewProps = {
  direction: string;
  industry: string;
  onChange?: (next: { direction?: string; industry?: string }) => void;
};

/** Презентационная часть: фильтры + сетка + «Показать ещё». Состояние фильтров приходит из URL (см. обёртку ниже). */
function CatalogView({ direction, industry, onChange }: ViewProps) {
  const base = useId();
  const [panelOpen, setPanelOpen] = useState(false);
  const key = `${direction}|${industry}`;
  const [paging, setPaging] = useState({ key, visible: PAGE_SIZE });
  const visible = paging.key === key ? paging.visible : PAGE_SIZE;
  const listRef = useRef<HTMLUListElement>(null);
  const focusIndex = useRef<number | null>(null);

  const filtered = PROJECTS.filter((p) => (direction === ALL || p.filterDirection === direction) && (industry === ALL || p.industryId === industry));
  const shown = filtered.slice(0, visible);
  const changed = direction !== ALL || industry !== ALL;

  // «Показать ещё»: фокус переходит на первую добавленную карточку
  useEffect(() => {
    if (focusIndex.current === null) return;
    listRef.current?.querySelectorAll<HTMLElement>('li a')[focusIndex.current]?.focus();
    focusIndex.current = null;
  }, [visible]);

  const showMore = () => {
    focusIndex.current = shown.length;
    setPaging({ key, visible: visible + PAGE_SIZE });
  };
  const reset = () => onChange?.({ direction: ALL, industry: ALL });

  return (
    <section aria-labelledby={`${base}-title`} className="bg-canvas py-section">
      <Container>
        <h2 id={`${base}-title`} className="sr-only">
          Фильтры и проекты
        </h2>

        <Button
          variant="secondary"
          size="lg"
          fullWidth
          leadingIcon={SlidersHorizontal}
          aria-expanded={panelOpen}
          aria-controls={`${base}-filters`}
          onClick={() => setPanelOpen((o) => !o)}
          className="md:hidden"
        >
          Фильтры
        </Button>

        <div id={`${base}-filters`} data-open={panelOpen} className="disclosure-panel project-filters">
          <div className="disclosure-content">
            <div className="pt-4 md:pt-0">
              <FilterChips
                label="Направление"
                options={DIRECTION_OPTIONS}
                value={[direction]}
                allValue={ALL}
                showReset={false}
                onChange={(v) => onChange?.({ direction: v[0] ?? ALL })}
              />
              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end">
                <Select
                  id={`${base}-industry`}
                  label="Отрасль"
                  value={industry}
                  options={INDUSTRY_OPTIONS}
                  onChange={(e) => onChange?.({ industry: e.target.value })}
                  wrapperClassName="md:w-80"
                />
                {changed ? (
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex min-h-11 items-center gap-2 px-2 text-label font-semibold text-ink underline-offset-4 transition-colors duration-base hover:text-accent hover:underline"
                  >
                    <X aria-hidden="true" className="size-4" strokeWidth={2} />
                    Сбросить фильтры
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <p role="status" className="sr-only">
          Показано проектов: {shown.length}
        </p>

        {shown.length > 0 ? (
          <ul ref={listRef} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {shown.map((p) => (
              <li key={p.id} className="flex">
                <ProjectCard
                  className="w-full"
                  href={p.href}
                  image={p.image}
                  decorativeImage
                  meta={`${p.yearLabel ?? p.year} · ${p.directionLabel}`}
                  title={p.title}
                  effect={p.effect}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-md border border-line bg-surface p-card text-center">
            <p className="font-display text-h4 font-semibold text-ink">По выбранным параметрам проектов нет</p>
            <Button variant="secondary" size="lg" onClick={reset} className="mt-6">
              Сбросить фильтры
            </Button>
          </div>
        )}

        {filtered.length > shown.length ? (
          <div className="mt-6 flex justify-center">
            <Button variant="inverse" size="lg" trailingIcon={ArrowRight} onClick={showMore} className="border border-line max-md:w-full">
              Показать ещё
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

/** Фильтры синхронизируются с URL (?direction=…&industry=…); значения вне списков игнорируются. */
function CatalogWithUrl() {
  const params = useSearchParams();
  const direction = known(PROJECT_FILTER_DIRECTIONS, params?.get('direction'));
  const industry = known(PROJECT_FILTER_INDUSTRIES, params?.get('industry'));

  const onChange = (next: { direction?: string; industry?: string }) => {
    const q = new URLSearchParams(params?.toString() ?? '');
    const apply = (name: 'direction' | 'industry', value: string | undefined) => {
      if (value === undefined) return;
      if (value === ALL) q.delete(name);
      else q.set(name, value);
    };
    apply('direction', next.direction);
    apply('industry', next.industry);
    const qs = q.toString();
    window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
  };

  return <CatalogView direction={direction} industry={industry} onChange={onChange} />;
}

/** 07-02. Фильтры (направление — чипы, отрасль — select), сетка проектов, «Показать ещё», пустое состояние. */
export function ProjectsCatalog() {
  return (
    <Suspense fallback={<CatalogView direction={ALL} industry={ALL} />}>
      <CatalogWithUrl />
    </Suspense>
  );
}
