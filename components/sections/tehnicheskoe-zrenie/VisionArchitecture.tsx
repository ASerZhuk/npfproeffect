import { Camera, MonitorDot, PanelTop, ScanBarcode, ServerCog, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VISION_LEVELS } from '@/content/vision';
import { IMAGES } from '@/content/images';

const ICONS: Record<string, LucideIcon> = { Camera, ScanBarcode, PanelTop, ServerCog, MonitorDot };

/** Три уровня системы слева, изображение шкафа управления справа. */
export function VisionArchitecture() {
  return (
    <Section tone="surface" labelledBy="vision-arch-title">
      <SectionHeader number="04" id="vision-arch-title" title="Как устроена система" lead="Трёхуровневая архитектура" />
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-2">
        <ol className="grid gap-3">
          {VISION_LEVELS.map((lvl) => {
            const Icon = ICONS[lvl.icon];
            const Icon2 = lvl.icon2 ? ICONS[lvl.icon2] : null;
            return (
              <li
                key={lvl.n}
                className="flex items-center gap-4 rounded-sm border border-line bg-surface p-4"
              >
                  <span className="shrink-0 rounded-sm bg-dark px-3 py-2 text-meta text-surface">{lvl.n}</span>
                  <span className="flex shrink-0 items-center gap-2 text-muted" aria-hidden="true">
                    <Icon className="size-icon-lg" strokeWidth={2} />
                    {Icon2 ? <Icon2 className="size-icon-lg" strokeWidth={2} /> : null}
                  </span>
                <h3 className="text-body text-ink">{lvl.text}</h3>
              </li>
            );
          })}
        </ol>
        <div className="relative aspect-2/1 overflow-hidden rounded-sm border border-line bg-card">
          <Image src={IMAGES.controlCabinet.src} alt={IMAGES.controlCabinet.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </Section>
  );
}
