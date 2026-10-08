import Image from 'next/image';
import { cn } from '@/lib/cn';
import { COMPANY } from '@/content/site';
import SAP_LOGO from '@/public/images/brand/sap-avtomatika-logo-v2.png';

type LogoProps = {
  /** accent — на светлом фоне, inverse — на тёмном (design-system §7) */
  tone?: 'accent' | 'inverse';
  className?: string;
};

/** Фирменный логотип (знак + «САП АВТОМАТИКА») на прозрачном фоне; на тёмном — белый. */
export function Logo({ tone = 'accent', className }: LogoProps) {
  return (
    <span className={cn('inline-flex h-logo-h-mobile items-center lg:h-logo-h', className)}>
      <Image
        src={SAP_LOGO}
        alt={COMPANY.shortName}
        sizes="(min-width: 1024px) 128px, 105px"
        preload
        unoptimized
        className={cn('block h-full w-auto object-contain', tone === 'inverse' && 'brightness-0 invert')}
      />
    </span>
  );
}
