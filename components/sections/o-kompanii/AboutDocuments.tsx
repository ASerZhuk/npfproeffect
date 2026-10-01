import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ABOUT } from '@/content/company';

/** 09-05. Лицензии, сертификаты, письма: карточки только по реальным файлам; пока файлов нет — нейтральное состояние. */
export function AboutDocuments() {
  const docs = ABOUT.documents;
  // Пока реальных файлов нет — секцию не выводим (без заглушек)
  if (!docs.length) return null;
  return (
    <Section labelledBy="about-docs-title">
      <SectionHeader number="05" id="about-docs-title" title="Лицензии, сертификаты, письма" />
      <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-6">
          {docs.map((d) => (
            <li key={d.href} className="rounded-md border border-line bg-surface p-card">
              <h3 className="font-display text-h4 font-semibold text-ink">
                <a href={d.href} className="underline-offset-4 hover:text-accent hover:underline">
                  {d.title}
                </a>
              </h3>
              {d.meta ? <p className="mt-2 font-mono text-meta text-muted">{d.meta}</p> : null}
            </li>
          ))}
      </ul>
    </Section>
  );
}
