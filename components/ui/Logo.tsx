import Image from 'next/image';
import { cn } from '@/lib/cn';
import { COMPANY } from '@/content/site';
import SAP_MARK from '@/public/images/brand/sap-avtomatika-mark-v1.png';

type LogoProps = {
  /** accent — на светлом фоне, inverse — на тёмном (design-system §7) */
  tone?: 'accent' | 'inverse';
  className?: string;
};

/** Знак на прозрачном фоне и текстовое название компании. */
export function Logo({ tone = 'accent', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex h-logo-h-mobile w-logo-w-mobile items-center gap-1.5 lg:h-logo-h xl:w-logo-w xl:gap-2',
        tone === 'inverse' ? 'text-surface' : 'text-ink',
        className,
      )}
    >
      <Image
        src={SAP_MARK}
        alt=""
        sizes="(min-width: 1280px) 40px, 28px"
        preload
        unoptimized
        className={cn(
          'block h-7 w-7 shrink-0 object-contain xl:h-10 xl:w-10',
          tone === 'inverse' && 'brightness-0 invert',
        )}
      />
      <span className="whitespace-nowrap text-[12px] leading-none font-bold tracking-tight xl:text-[17px]">
        {COMPANY.shortName}
      </span>
    </span>
  );
}
