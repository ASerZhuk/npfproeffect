import type { MetadataRoute } from 'next';
import { CASES } from '@/content/cases';
import { DIRECTION_HUBS } from '@/content/direction-hubs';
import { ROUTES } from '@/content/nav';
import { SITE_URL } from '@/content/site';

// /stati (noindex до публикации материалов) и /raschet/spasibo в карту не входят
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path === '/' ? '' : path}`, changeFrequency: 'monthly', priority });
  return [
    page(ROUTES.home, 1),
    page(ROUTES.solutions, 0.9),
    page(ROUTES.vision, 0.9),
    ...DIRECTION_HUBS.map((h) => page(`/resheniya/${h.slug}`, 0.9)),
    page(ROUTES.modernization, 0.9),
    page(ROUTES.production, 0.9),
    page(ROUTES.services, 0.8),
    page(ROUTES.projects, 0.8),
    ...CASES.map((c) => page(`/proekty/${c.slug}`, 0.7)),
    page(ROUTES.about, 0.6),
    page(ROUTES.contacts, 0.7),
    page(ROUTES.quiz, 0.6),
    page(ROUTES.privacy, 0.2),
  ];
}
