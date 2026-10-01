import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '@/content/site';

const ROW = 'flex min-h-11 items-start gap-3 py-2 text-body text-ink';
const LINK = 'underline-offset-4 hover:text-accent hover:underline';

/** Карточка контактов: адрес, телефоны, e-mail (tel:/mailto:), часы, мессенджеры (текстом — реальных URL пока нет). */
export function ContactCard() {
  return (
    <div className="rounded-md border border-line bg-surface p-card xl:min-h-140">
      <h2 className="font-display text-h3 font-semibold text-ink">{COMPANY.name}</h2>
      <address className="mt-6 not-italic">
        <p className={ROW}>
          <MapPin aria-hidden="true" className="mt-0.5 size-icon shrink-0 text-muted" strokeWidth={2} />
          <span>{COMPANY.address}</span>
        </p>
        {COMPANY.phones.map((p) => (
          <p key={p.href} className={ROW}>
            <Phone aria-hidden="true" className="mt-0.5 size-icon shrink-0 text-muted" strokeWidth={2} />
            <a href={p.href} className={LINK}>
              {p.display}
            </a>
          </p>
        ))}
        {COMPANY.emails.map((m) => (
          <p key={m.href} className={ROW}>
            <Mail aria-hidden="true" className="mt-0.5 size-icon shrink-0 text-muted" strokeWidth={2} />
            <a href={m.href} className={`${LINK} break-all`}>
              {m.display}
            </a>
          </p>
        ))}
        <p className={ROW}>
          <Clock3 aria-hidden="true" className="mt-0.5 size-icon shrink-0 text-muted" strokeWidth={2} />
          <span>Пн–Пт 8:00–17:00</span>
        </p>
      </address>
    </div>
  );
}
