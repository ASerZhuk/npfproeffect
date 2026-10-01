import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'inverse' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  /** иконка после текста (обычно ArrowRight, 20 px) */
  trailingIcon?: LucideIcon;
  leadingIcon?: LucideIcon;
  /** icon-only: 48×48, aria-label обязателен */
  iconOnly?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
};

type AsLink = CommonProps & { href: string } & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>;
type AsButton = CommonProps & { href?: undefined } & Omit<ComponentProps<'button'>, 'className' | 'children'>;

export type ButtonProps = AsLink | AsButton;

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-md font-display text-label font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-base ease-enter disabled:pointer-events-none';

const VARIANT: Record<Variant, string> = {
  primary:
    'bg-accent text-surface shadow-button hover:bg-accent-hover hover:shadow-card active:bg-accent-active disabled:bg-line disabled:text-muted disabled:shadow-none',
  secondary:
    'border border-accent text-accent hover:bg-accent-tint active:bg-accent-tint-strong disabled:border-line disabled:text-muted on-dark:border-line-dark on-dark:text-surface on-dark:hover:border-surface on-dark:hover:bg-dark-alt',
  inverse: 'bg-surface text-dark hover:bg-canvas disabled:bg-line disabled:text-muted',
  ghost: 'text-ink hover:text-accent hover:underline underline-offset-4 disabled:text-muted on-dark:text-surface',
};

const SIZE: Record<Size, string> = {
  sm: 'min-h-11 px-4',
  md: 'min-h-12 px-6',
  lg: 'min-h-13 px-7',
};

/** Кнопка / ссылка-действие. С `href` рендерит <Link>/<a>, иначе <button>. */
export function Button({
  variant = 'primary',
  size = 'md',
  trailingIcon: Trailing,
  leadingIcon: Leading,
  iconOnly,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = cn(
    BASE,
    'group/btn',
    VARIANT[variant],
    iconOnly ? 'size-12 px-0' : variant === 'ghost' ? 'min-h-11 px-0' : SIZE[size],
    fullWidth && 'w-full',
    className,
  );
  const content = (
    <>
      {Leading ? <Leading aria-hidden="true" className="size-icon shrink-0" strokeWidth={2} /> : null}
      {children}
      {Trailing ? (
        <Trailing
          aria-hidden="true"
          className="size-icon shrink-0 transition-transform duration-base ease-enter motion-safe:group-hover/btn:translate-x-1"
          strokeWidth={2}
        />
      ) : null}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as Omit<AsLink, keyof CommonProps>;
    const isInternal = href.startsWith('/') || href.startsWith('#');
    return isInternal ? (
      <Link href={href} className={cls} {...anchor}>
        {content}
      </Link>
    ) : (
      <a href={href} className={cls} {...anchor}>
        {content}
      </a>
    );
  }
  const { type, ...button } = rest as Omit<AsButton, keyof CommonProps>;
  return (
    <button type={type ?? 'button'} className={cls} {...button}>
      {content}
    </button>
  );
}
