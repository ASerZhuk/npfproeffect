import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CasePage } from '@/components/sections/case-szrt/CasePage';
import { CASES, getCase } from '@/content/cases';
import { pageMeta } from '@/lib/seo';

// asu-tp-rezinosmesheniya обслуживается статическим маршрутом рядом
export const dynamicParams = false;
export function generateStaticParams() {
  return CASES.filter((c) => c.slug !== 'asu-tp-rezinosmesheniya').map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  return pageMeta({ title: c.metaTitle, description: c.description, path: `/proekty/${c.slug}` });
}

export default async function CaseRoute({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  return <CasePage c={c} />;
}
