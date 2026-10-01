import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { PageShell } from '@/components/layout/PageShell';
import { HomeDirections } from '@/components/sections/home/HomeDirections';
import { HomeEquipment } from '@/components/sections/home/HomeEquipment';
import { HomeFaq } from '@/components/sections/home/HomeFaq';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { HomeIndustries } from '@/components/sections/home/HomeIndustries';
import { HomeModernization } from '@/components/sections/home/HomeModernization';
import { HomeProcess } from '@/components/sections/home/HomeProcess';
import { HomeProjects } from '@/components/sections/home/HomeProjects';
import { HomeTrust } from '@/components/sections/home/HomeTrust';
import { CtaSection } from '@/components/ui/CtaSection';

export const metadata: Metadata = {
  ...pageMeta({
    title: 'НПФ ПроЭффект — автоматизация производств и модернизация оборудования под ключ',
    description: 'Промышленная автоматизация под ключ: АСУ ТП, учёт энергоресурсов, техническое зрение, испытательные стенды, модернизация станков и прессов, производство РЭА и РТК. Пенза, работаем по всей России.',
    path: '/',
  }),
  title: { absolute: 'НПФ ПроЭффект — автоматизация производств и модернизация оборудования под ключ' },
};

export default function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <HomeTrust />
      <HomeDirections />
      <HomeModernization />
      <HomeProjects />
      <HomeProcess />
      <HomeIndustries />
      <HomeEquipment />
      <HomeFaq />
      <CtaSection source="home" />
    </PageShell>
  );
}
