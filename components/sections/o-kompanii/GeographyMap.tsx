import { cn } from '@/lib/cn';
import { ABOUT } from '@/content/company';
import MAP from '@/content/russia-map.json';

// Смещаются только подписи: сами точки всегда остаются на своих координатах.
const LABELS = {
  penza: { dx: -18, dy: 34, anchor: 'end' },
  zarechny: { dx: 26, dy: 25, anchor: 'start' },
  lomov: { dx: -5, dy: -23, anchor: 'start' },
  saransk: { dx: 14, dy: -12, anchor: 'start' },
  balakhna: { dx: 14, dy: -12, anchor: 'start' },
  khvalynsk: { dx: -8, dy: 29, anchor: 'end' },
} as const;

type Projection = Pick<typeof MAP.overview, 'n' | 'f' | 'meridian' | 'scale' | 'offsetX' | 'offsetY'>;

// Та же проекция Ламберта и параметры, которыми спроецированы контуры Natural Earth.
function position(longitude: number, latitude: number, projection: Projection) {
  const radians = Math.PI / 180;
  const longitudeUnwrapped = longitude < 0 ? longitude + 360 : longitude;
  const rho = projection.f / Math.pow(Math.tan(Math.PI / 4 + latitude * radians / 2), projection.n);
  const theta = projection.n * (longitudeUnwrapped - projection.meridian) * radians;
  return {
    x: rho * Math.sin(theta) * projection.scale + projection.offsetX,
    y: rho * Math.cos(theta) * projection.scale + projection.offsetY,
  };
}

const OVERVIEW_FOCUS = position(45.5, 54.5, MAP.overview);

export function GeographyMap() {
  return (
    <div>
      <div className="grid overflow-hidden rounded-sm border border-line bg-canvas lg:grid-cols-[1.6fr_1fr]">
        <div className="flex min-w-0 flex-col">
          <div className="flex items-center justify-between gap-4 px-5 pt-5 md:px-7 md:pt-7">
            <p className="font-display text-label font-semibold text-ink">Россия</p>
            <span className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 font-mono text-meta text-accent">6 городов · 4 региона</span>
          </div>
          <div className="flex flex-1 items-center">
            <svg role="img" aria-labelledby="geography-russia-title" viewBox={`0 0 ${MAP.overview.width} ${MAP.overview.height}`} className="block w-full">
              <title id="geography-russia-title">Карта России с расположением шести городов, где находятся объекты компании</title>
              <path d={MAP.overview.graticule} fill="none" stroke="currentColor" strokeWidth="0.7" className="text-line/60" />
              <path d={MAP.overview.path} fill="currentColor" fillRule="evenodd" stroke="var(--color-accent)" strokeOpacity="0.25" strokeWidth="1" strokeLinejoin="round" className="text-accent/10" />
              <path d={MAP.overview.detailExtent} fill="var(--color-accent)" fillOpacity="0.08" stroke="var(--color-accent)" strokeWidth="1.3" strokeDasharray="4 4" />
              {ABOUT.geoPoints.map((point) => {
                const { x, y } = position(point.longitude, point.latitude, MAP.overview);
                return (
                  <circle key={point.id} cx={x} cy={y} r={point.id === 'penza' ? 3 : 2.3} fill="currentColor" className={point.id === 'penza' ? 'text-accent' : 'text-ink'}>
                    <title>{point.name} · {point.region}</title>
                  </circle>
                );
              })}
              <g aria-hidden="true">
                <path d={`M${OVERVIEW_FOCUS.x + 18},${OVERVIEW_FOCUS.y + 15}l25,32h125`} fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/60" />
                <text x={OVERVIEW_FOCUS.x + 45} y={OVERVIEW_FOCUS.y + 38} fill="currentColor" fontSize="16" className="font-sans text-ink">Регион проектов</text>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex min-w-0 flex-col border-t border-line bg-surface lg:border-t-0 lg:border-l">
          <div className="px-5 pt-5 md:px-7 md:pt-7">
            <p className="font-display text-label font-semibold text-ink">Крупный план</p>
            <p className="mt-1 text-meta text-muted">Европейская часть России</p>
          </div>
          <div className="flex flex-1 items-center overflow-hidden">
            <svg role="img" aria-labelledby="geography-detail-title" viewBox={`0 0 ${MAP.detail.width} ${MAP.detail.height}`} className="block w-full">
              <title id="geography-detail-title">Пенза, Заречный, Нижний Ломов, Саранск, Балахна и Хвалынск на карте регионов России</title>
              <defs>
                <clipPath id="geography-detail-clip"><rect width={MAP.detail.width} height={MAP.detail.height} /></clipPath>
              </defs>
              <g clipPath="url(#geography-detail-clip)">
                {MAP.detail.regions.map((region) => (
                  <path key={region.name} d={region.path} fill="currentColor" fillRule="evenodd" stroke="var(--color-accent)" strokeOpacity="0.23" strokeWidth="0.8" strokeLinejoin="round" className={region.highlighted ? 'text-accent/10' : 'text-canvas'}>
                    <title>{region.name}</title>
                  </path>
                ))}
                <path d={MAP.detail.graticule} fill="none" stroke="currentColor" strokeWidth="0.6" className="text-line/50" />
                {ABOUT.geoPoints.map((point) => {
                  const { x, y } = position(point.longitude, point.latitude, MAP.detail);
                  const label = LABELS[point.id];
                  const hub = point.id === 'penza';
                  return (
                    <g key={point.id} className="group">
                      <title>{point.name}, {point.region}: {point.object}</title>
                      {hub ? <circle cx={x} cy={y} r="12" fill="currentColor" className="text-accent/15" /> : null}
                      <path d={`M${x},${y}L${x + label.dx},${y + label.dy - 5}`} fill="none" stroke="currentColor" strokeWidth="1" className="text-muted/60" />
                      <circle cx={x} cy={y} r="4" fill="currentColor" stroke="var(--color-surface)" strokeWidth="1.5" className={cn('transition-colors duration-300 group-hover:text-accent', hub ? 'text-accent' : 'text-ink')} />
                      <text x={x + label.dx} y={y + label.dy} textAnchor={label.anchor} fill="currentColor" stroke="var(--color-surface)" strokeWidth="5" paintOrder="stroke" strokeLinejoin="round" className={cn('font-sans text-[24px] font-medium sm:text-[17px]', hub ? 'text-accent' : 'text-ink')}>{point.name}</text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 px-5 pb-5 text-meta text-muted md:px-7 md:pb-7">
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-accent" />Офис и производство</span>
            <span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-ink" />Объекты внедрений</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-2 text-meta text-muted">
        <p>{ABOUT.geoNote}</p>
        <p>Карта: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-accent">Natural Earth</a> (public domain). Координаты: GeoNames, Wikidata, Wikipedia.</p>
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2">
        {ABOUT.geoPoints.map((p) => (
          <li key={p.id} className="border-t border-line py-4">
            <p className="font-display text-label font-semibold text-ink">
              {p.name} <span className="font-mono text-meta font-medium text-muted">· {p.region}</span>
            </p>
            <p className="mt-1 text-body text-muted">{p.object}</p>
            <a href={p.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-mono text-meta text-muted underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-accent" aria-label={`Источник координат города ${p.name}`}>
              {p.latitude}° с. ш. · {p.longitude}° в. д.
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
