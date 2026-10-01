import { cn } from '@/lib/cn';
import { LOGO_PATHS } from './logo-paths';

type LogoProps = {
  /** accent — на светлом фоне, inverse — на тёмном (design-system §7) */
  tone?: 'accent' | 'inverse';
  className?: string;
};

/** Inline-SVG «НПФ √ПРО ЭФФЕКТ». viewBox 620×180; текст переведён в контуры. Размер: 172×50 desktop, 144×42 mobile. */
export function Logo({ tone = 'accent', className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 620 180"
      role="img"
      aria-label="НПФ ПроЭффект"
      className={cn(
        'block h-logo-h-mobile w-logo-w-mobile lg:h-logo-h lg:w-logo-w',
        tone === 'accent' ? 'text-accent' : 'text-surface',
        className,
      )}
    >
      <g fill="currentColor">
        <g transform="translate(12 100) skewX(-9)">
          <path d={LOGO_PATHS.npf} />
        </g>
        <g transform="translate(286 122) skewX(-9)">
          <path d={LOGO_PATHS.pro} />
        </g>
        <g transform="translate(288 166) skewX(-9)">
          <path d={LOGO_PATHS.eff} />
        </g>
      </g>
      <path
        d="M12 106H188L222 152L262 26H608"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
