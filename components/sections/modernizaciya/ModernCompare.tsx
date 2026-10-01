import { CircleDollarSign, Clock3, Scale, type LucideIcon } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MODERN_COMPARE, MODERN_FOOTNOTE } from '@/content/modernizaciya';
import { cn } from '@/lib/cn';

const ICONS: Record<string, LucideIcon> = { CircleDollarSign, Clock3, Scale };

/** 04-05. Сравните: тёмная секция, две панели «Новый станок» / «Модернизация с ПроЭффект» (рамка accent, без свечения). */
export function ModernCompare() {
  return (
    <Section labelledBy="modern-compare-title">
        <SectionHeader number="05" id="modern-compare-title" title="Сравните" />
          <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-sm border border-line lg:grid-cols-2">
            {MODERN_COMPARE.map((p) => (
              <div key={p.title} className={cn('p-card', p.highlight ? 'bg-accent-tint-strong' : 'bg-surface')}>
                <h3 className="font-display text-h3 font-semibold text-ink">{p.title}</h3>
                <ul className="mt-4 space-y-3">
                  {p.items.map((it) => {
                    const Icon = ICONS[it.icon];
                    return (
                      <li key={it.text} className="flex items-start gap-3 text-body text-ink">
                        <Icon aria-hidden="true" className="mt-0.5 size-icon shrink-0" strokeWidth={2} />
                        <span>{it.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-meta text-muted">{MODERN_FOOTNOTE}</p>
    </Section>
  );
}
