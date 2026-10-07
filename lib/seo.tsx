import type { Metadata } from 'next';
import { COMPANY, SITE_URL } from '@/content/site';

const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: 'САП-АВТОМАТИКА — автоматизация производств и модернизация оборудования под ключ' };

/** Метаданные страницы: title/description + canonical + OG с теми же текстами. */
export function pageMeta({ title, description, path, noindex }: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // openGraph страницы перекрывает корневой opengraph-image — картинку указываем явно
    openGraph: { type: 'website', locale: 'ru_RU', siteName: COMPANY.shortName, title, description, url: path, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Schema.org Organization для всего сайта (выводится в layout). */
export const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  alternateName: COMPANY.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/sap-avtomatika-logo-v1.png`,
  description: 'Промышленная автоматизация под ключ: АСУ ТП, учёт энергоресурсов, техническое зрение, испытательные стенды, модернизация станков и прессов, производство РЭА и РТК.',
  address: { '@type': 'PostalAddress', streetAddress: 'ул. Каракозова, 35', addressLocality: 'Пенза', addressRegion: 'Пензенская область', addressCountry: 'RU' },
  telephone: COMPANY.phones.map((p) => p.href.replace('tel:', '')),
  email: COMPANY.emails.map((e) => e.display),
  areaServed: 'RU',
};

/** BreadcrumbList; у последнего пункта (текущей страницы) path может отсутствовать. */
export function breadcrumbLd(items: { name: string; path?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, ...(it.path ? { item: `${SITE_URL}${it.path}` } : {}) })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
