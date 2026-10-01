'use client';

import { CircleAlert, FileText, Paperclip, Trash2, Upload } from 'lucide-react';
import { useId, useRef, useState, type DragEvent } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  name: string;
  /** точный текст формы, например «Прикрепить ТЗ» */
  label: string;
  /** dropzone — блок 120 px (§8.7); inline — компактная строка со скрепкой (G-03) */
  variant?: 'dropzone' | 'inline';
  accept?: string;
  maxSizeMb?: number;
  tone?: 'light' | 'dark';
  className?: string;
  onFileChange?: (file: File | null) => void;
};

const formatSize = (bytes: number) => (bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} МБ` : `${Math.max(1, Math.round(bytes / 1024))} КБ`);

/** Загрузка файла: dropzone/inline, drag-over, строка загруженного файла, ошибки формата и размера. */
export function FileDrop({ name, label, variant = 'dropzone', accept, maxSizeMb = 10, tone = 'light', className, onFileChange }: Props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [over, setOver] = useState(false);
  const dark = tone === 'dark';

  const accepts = (f: File) => {
    if (!accept) return true;
    return accept.split(',').some((rule) => {
      const r = rule.trim().toLowerCase();
      return r.startsWith('.') ? f.name.toLowerCase().endsWith(r) : r.endsWith('/*') ? f.type.startsWith(r.slice(0, -1)) : f.type === r;
    });
  };

  const pick = (f: File | null) => {
    if (f && !accepts(f)) {
      setError('Неподходящий формат файла');
      return reset();
    }
    if (f && f.size > maxSizeMb * 1048576) {
      setError(`Файл больше ${maxSizeMb} МБ`);
      return reset();
    }
    setError('');
    setFile(f);
    onFileChange?.(f);
  };

  const reset = () => {
    if (inputRef.current) inputRef.current.value = '';
    setFile(null);
    onFileChange?.(null);
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && inputRef.current) {
      const dt = new DataTransfer();
      dt.items.add(dropped);
      inputRef.current.files = dt.files;
      pick(dropped);
    }
  };

  return (
    <div className={className}>
      {file ? (
        <div className={cn('flex min-h-13 items-center gap-3 rounded-md border px-4', dark ? 'border-line-dark text-surface' : 'border-line bg-surface text-ink')}>
          <FileText aria-hidden="true" className="size-icon shrink-0" strokeWidth={2} />
          <span className="min-w-0 flex-1 truncate text-body">{file.name}</span>
          <span className="shrink-0 font-mono text-meta">{formatSize(file.size)}</span>
          <button type="button" onClick={reset} aria-label={`Удалить файл ${file.name}`} className="grid size-11 shrink-0 place-items-center rounded-md transition-colors duration-base hover:text-accent">
            <Trash2 aria-hidden="true" className="size-icon" strokeWidth={2} />
          </button>
        </div>
      ) : (
        <label
          htmlFor={id}
          onDragOver={(e) => {
            e.preventDefault();
            setOver(true);
          }}
          onDragLeave={() => setOver(false)}
          onDrop={onDrop}
          className={cn(
            'cursor-pointer transition-colors duration-base has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-accent',
            variant === 'dropzone'
              ? cn(
                  'flex min-h-drop-min flex-col items-center justify-center gap-2 rounded-md border border-dashed p-6 text-center',
                  over ? 'border-accent bg-accent-tint-soft' : 'border-muted hover:border-accent',
                  dark ? 'text-surface' : 'text-ink',
                )
              : cn('inline-flex min-h-11 items-center gap-2 text-meta font-mono hover:underline underline-offset-4', over && 'underline', dark ? 'text-canvas' : 'text-muted'),
          )}
        >
          {variant === 'dropzone' ? <Upload aria-hidden="true" className="size-icon-lg" strokeWidth={2} /> : <Paperclip aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />}
          <span className={variant === 'dropzone' ? 'text-label font-semibold' : undefined}>{label}</span>
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={(e) => pick(e.target.files?.[0] ?? null)}
      />
      {error ? (
        <p role="alert" className={cn('mt-2 flex items-start gap-2 font-mono text-meta', dark ? 'text-surface' : 'text-ink')}>
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
          {error}
        </p>
      ) : null}
    </div>
  );
}
