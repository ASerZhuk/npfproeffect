import Image from 'next/image';

export type HeroImage = 'home' | 'solutions' | 'vision' | 'modernization' | 'production' | 'services' | 'projects' | 'case' | 'about' | 'articles' | 'novosti' | 'contacts' | 'quiz';

export function HeroBackground({ image }: { image: HeroImage }) {
  return (
    <div aria-hidden="true" className="hero-background pointer-events-none absolute inset-0">
      <Image src={`/images/heroes/${image}-v1.webp`} alt="" fill sizes="100vw" preload unoptimized className="hero-background-image object-cover" />
      <div className="hero-background-shade absolute inset-0" />
    </div>
  );
}
