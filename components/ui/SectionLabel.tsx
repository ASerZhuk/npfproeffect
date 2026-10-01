import { cn } from '@/lib/cn';

type Props = {
  /** номер секции, например «03» */
  number: string;
  /** необязательное название секции (мета-текст рядом с номером) */
  title?: string;
  tone?: 'light' | 'dark';
  className?: string;
};

/** Моно-метка номера секции. Размещается в колонке 1 (на 1280+) либо строкой над заголовком. */
export function SectionLabel({ number, title, tone = 'light', className }: Props) {
  return (
    <p className={cn('hidden font-mono text-meta uppercase', tone === 'dark' ? 'text-canvas' : 'text-muted', className)}>
      <span aria-hidden="true" className="tabular">
        {number}
      </span>
      {title ? <span className="ml-3 xl:ml-0 xl:mt-1 xl:block">{title}</span> : null}
    </p>
  );
}
