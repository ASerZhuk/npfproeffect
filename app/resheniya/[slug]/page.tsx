import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DirectionHubPage } from '@/components/sections/direction/DirectionHubPage';
import { DIRECTION_HUBS, getHub } from '@/content/direction-hubs';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return DIRECTION_HUBS.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const h = getHub((await params).slug);
  if (!h) return {};
  return pageMeta({ title: h.metaTitle, description: h.description, path: `/resheniya/${h.slug}` });
}

export default async function HubRoute({ params }: { params: Promise<{ slug: string }> }) {
  const h = getHub((await params).slug);
  if (!h) notFound();
  return <DirectionHubPage h={h} />;
}
