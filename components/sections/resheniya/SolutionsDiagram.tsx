import Link from 'next/link';
import { DirectionMarker } from '@/components/ui/DirectionMarker';
import { SOLUTION_MAP_NODES } from '@/content/solutions';

// Узлы схемы позиционируются в процентах области, линии — SVG viewBox 100×100 без сохранения пропорций
const CENTER = { x: 50, y: 50 };

/**
 * Инфографика 02-01 (solutions-five-directions): пять направлений вокруг узла «САП-АВТОМАТИКА».
 * Линии 1 px, без точечной сетки. Узлы — ссылки-якоря к карточкам 02-02 (дублируют, а не заменяют навигацию).
 * 390: подписи сокращаются визуально, полный текст остаётся в DOM.
 */
export function SolutionsDiagram() {
  const polygon = SOLUTION_MAP_NODES.map((n) => `${n.x},${n.y}`).join(' ');
  return (
    <nav
      aria-label="Пять направлений автоматизации"
      className="relative aspect-2/1 w-full overflow-hidden rounded-lg border border-line bg-surface xl:ml-auto xl:max-w-hero-media-w"
    >
      <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full fill-none stroke-line">
        <polygon points={polygon} strokeWidth={1} vectorEffect="non-scaling-stroke" strokeDasharray="4 4" />
        {SOLUTION_MAP_NODES.map((n) => (
          <line key={n.id} x1={CENTER.x} y1={CENTER.y} x2={n.x} y2={n.y} strokeWidth={1} vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <p className="absolute top-1/2 left-1/2 flex h-10 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-accent px-2 text-center font-display text-meta font-semibold text-surface md:w-32">
        САП-АВТОМАТИКА
      </p>
      {SOLUTION_MAP_NODES.map((n) => (
        <Link
          key={n.id}
          href={`#solution-${n.id}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          className="absolute flex min-h-11 w-28 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1 text-meta font-medium text-ink transition-colors duration-base hover:border-accent hover:text-accent md:w-36 lg:w-28 xl:w-32"
        >
          <DirectionMarker direction={n.direction} />
          <span aria-hidden="true" className="md:hidden">
            {n.short}
          </span>
          <span className="sr-only md:not-sr-only">{n.label}</span>
        </Link>
      ))}
    </nav>
  );
}
