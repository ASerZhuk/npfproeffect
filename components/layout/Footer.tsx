import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { COMPANY } from '@/content/site';
import { FOOTER_NAV, ROUTES } from '@/content/nav';
import { Container } from './Container';

const LINK = 'inline-flex items-center gap-2 py-1 text-nav text-ink underline-offset-4 decoration-1 hover:underline';

/** Светлый подвал: логотип, описание, навигация и контакты; ниже строка реквизитов. */
export function Footer() {
  return (
    <footer className="bg-surface pt-6 pb-5 text-ink">
      <Container>
        <div className="grid items-center gap-6 md:grid-cols-2 xl:grid-cols-[auto_160px_minmax(0,1fr)_auto]">
          <div>
            <Link href={ROUTES.home} aria-label="САП-АВТОМАТИКА — на главную" className="inline-block rounded-sm">
              <Logo />
            </Link>
          </div>
          <div>
            <p className="text-meta text-muted">
              {COMPANY.name}
              <br />
              {COMPANY.descriptor}
            </p>
          </div>
          <nav aria-label="Навигация в подвале">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 xl:justify-center">
              {FOOTER_NAV.map((item) => (
                <li key={item.href} className="break-inside-avoid">
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-nav underline-offset-4 hover:text-accent hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic">
            <ul>
              <li className={LINK}>
                <MapPin aria-hidden="true" className="size-icon shrink-0" strokeWidth={2} />
                <span>{COMPANY.address}</span>
              </li>
              {COMPANY.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className={LINK}>
                    <Phone aria-hidden="true" className="size-icon shrink-0" strokeWidth={2} />
                    {p.display}
                  </a>
                </li>
              ))}
              {COMPANY.emails.map((m) => (
                <li key={m.href}>
                  <a href={m.href} className={LINK}>
                    <Mail aria-hidden="true" className="size-icon shrink-0" strokeWidth={2} />
                    {m.display}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-4 md:flex-row md:justify-between">
          <p className="text-meta text-muted">{COMPANY.copyright}</p>
          <Link href={ROUTES.privacy} className="text-meta text-muted underline-offset-4 hover:text-accent hover:underline">
            Политика конфиденциальности
          </Link>
        </div>
      </Container>
    </footer>
  );
}
