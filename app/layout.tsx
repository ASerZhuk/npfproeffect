import type { Metadata, Viewport } from 'next';
import { SITE_URL } from '@/content/site';
import { JsonLd, ORGANIZATION_LD } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'САП-АВТОМАТИКА — автоматизация производств и модернизация оборудования', template: '%s — САП-АВТОМАТИКА' },
  description: 'Промышленная автоматизация под ключ: АСУ ТП, учёт энергоресурсов, техническое зрение, испытательные стенды, модернизация станков и прессов, производство РЭА и РТК. Пенза, работаем по всей России.',
  openGraph: { type: 'website', locale: 'ru_RU', siteName: 'САП-АВТОМАТИКА' },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#f4f6f9', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:text-label focus:font-semibold focus:text-surface"
        >
          Перейти к содержимому
        </a>
        {children}
        <JsonLd data={ORGANIZATION_LD} />
      </body>
    </html>
  );
}
