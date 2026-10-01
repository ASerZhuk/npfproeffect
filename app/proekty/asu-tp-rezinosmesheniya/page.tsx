import type { Metadata } from 'next';
import { CasePage } from '@/components/sections/case-szrt/CasePage';
import { getCase } from '@/content/cases';
import { pageMeta } from '@/lib/seo';

// Кейс СЗРТ — тот же шаблон, что /proekty/[slug]; папку можно удалить, [slug] подхватит slug.
const c = getCase('asu-tp-rezinosmesheniya')!;

export const metadata: Metadata = pageMeta({ title: c.metaTitle, description: c.description, path: `/proekty/${c.slug}` });

export default function CaseSzrtPage() {
  return <CasePage c={c} />;
}
