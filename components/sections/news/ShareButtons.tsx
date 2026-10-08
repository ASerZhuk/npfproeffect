'use client';

import { Check, Link2 } from 'lucide-react';
import { useState } from 'react';

const PILL =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-surface px-4 font-display text-label font-semibold text-ink transition-[color,border-color,background-color] duration-base ease-enter hover:border-accent hover:text-accent focus-visible:border-accent';

/** Поделиться новостью: копирование ссылки (с подтверждением) и мессенджеры. */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Скопируйте ссылку', url);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" onClick={copy} className={PILL}>
        {copied ? <Check aria-hidden="true" className="size-4 text-accent" /> : <Link2 aria-hidden="true" className="size-4" />}
        <span aria-live="polite">{copied ? 'Скопировано' : 'Копировать ссылку'}</span>
      </button>
      <a href={`https://t.me/share/url?url=${u}&text=${t}`} target="_blank" rel="noopener noreferrer" className={PILL}>
        Telegram
      </a>
      <a href={`https://vk.com/share.php?url=${u}&title=${t}`} target="_blank" rel="noopener noreferrer" className={PILL}>
        VK
      </a>
      <a href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener noreferrer" className={PILL}>
        WhatsApp
      </a>
    </div>
  );
}
