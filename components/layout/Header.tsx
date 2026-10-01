'use client';

import { ArrowRight as ArrowRightIcon, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { COMPANY } from '@/content/site';
import { HEADER_CTA, NAV_ITEMS, ROUTES } from '@/content/nav';
import { cn } from '@/lib/cn';
import { Container } from './Container';

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
let pendingMenuPathname: string | null = null;

/**
 * G-01. Шапка: на 1440+ — все 7 ссылок; 1024–1439 — 4 ключевые + кнопка «Меню»; ниже 1024 — логотип + «Меню».
 * Шапка всегда закреплена сверху. Мобильное меню: фокус-трап, Esc, блокировка скролла.
 */
export function Header() {
  const pathname = usePathname() ?? '';
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pendingMenuPathname !== pathname) return;
    const frame = window.requestAnimationFrame(() => {
      if (pendingMenuPathname !== pathname || window.location.pathname !== pathname) return;
      pendingMenuPathname = null;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  // Меню нужно только до 1440: при расширении окна закрываем
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1440px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  const onMenuNavigate = (href: string) => {
    pendingMenuPathname = href;
    if (href === pathname) {
      pendingMenuPathname = null;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close(true);
      return;
    }
    if (e.key !== 'Tab' || !rootRef.current) return;
    const items = Array.from(rootRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const isActive = (href: string) => (href === ROUTES.home ? pathname === href : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <div className="h-site-header">
      <header
        ref={rootRef}
        onKeyDown={onKeyDown}
        className="fixed inset-x-0 top-0 z-40 h-site-header w-full border-b border-line bg-surface shadow-card"
      >
        <Container className="flex h-full items-center justify-between gap-6">
          <Link href={ROUTES.home} scroll={false} onNavigate={() => onMenuNavigate(ROUTES.home)} aria-label="НПФ ПроЭффект — на главную" className="shrink-0 rounded-sm">
            <Logo />
          </Link>

          <nav aria-label="Основная навигация" className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch gap-5 2xl:gap-4">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className={cn('h-full', item.key ? '' : 'hidden 2xl:block')}>
                    <Link
                      href={item.href}
                      scroll={false}
                      onNavigate={() => onMenuNavigate(item.href)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex h-full items-center border-b-4 text-nav whitespace-nowrap transition-colors duration-fast hover:text-accent',
                        active ? 'border-accent text-accent' : 'border-transparent text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4 2xl:gap-5">
            <a href={COMPANY.phones[0].href} className="hidden min-h-11 items-center gap-2 text-nav whitespace-nowrap transition-colors duration-fast hover:text-accent xl:inline-flex">
              <Phone aria-hidden="true" className="size-icon 2xl:hidden" strokeWidth={2} />
              {COMPANY.phones[0].display}
            </a>
            <a
              href={COMPANY.phones[0].href}
              aria-label={`Позвонить: ${COMPANY.phones[0].display}`}
              className="grid size-12 place-items-center rounded-md border border-line bg-surface text-ink transition-colors duration-base hover:border-accent hover:text-accent xl:hidden"
            >
              <Phone aria-hidden="true" className="size-icon-lg" strokeWidth={2} />
            </a>
            <div className="hidden lg:block">
              <Button href={HEADER_CTA.href} trailingIcon={ArrowRightIcon} className="min-w-cta-w bg-dark px-4 hover:bg-dark-alt">
                {HEADER_CTA.label}
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setOpen((v) => !v)}
              className="grid size-12 place-items-center rounded-md border border-line bg-surface text-ink transition-colors duration-base hover:border-accent hover:text-accent 2xl:hidden"
            >
              <span aria-hidden="true" className="toggle-icon relative size-icon-lg">
                <Menu data-visible={!open} className="size-icon-lg" strokeWidth={2} />
                <X data-visible={open} className="size-icon-lg" strokeWidth={2} />
              </span>
            </button>
          </div>
        </Container>

        <div id="site-menu" role="dialog" aria-modal="true" aria-label="Меню сайта" aria-hidden={!open} inert={!open} data-open={open} className="site-menu fixed inset-x-0 top-(--header-h) bottom-0 z-30 overflow-y-auto bg-surface">
          <Container className="flex min-h-full flex-col py-6">
            <nav aria-label="Все разделы сайта">
              <ul>
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href} className="border-b border-line">
                      <Link
                        href={item.href}
                        scroll={false}
                        onNavigate={() => onMenuNavigate(item.href)}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => close(false)}
                        className={cn('flex min-h-menu-link items-center font-display text-h4 font-semibold transition-colors duration-fast hover:text-accent', active ? 'text-accent' : 'text-ink')}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-auto space-y-2 pt-8">
              {COMPANY.phones.map((p) => (
                <a key={p.href} href={p.href} className="flex min-h-11 items-center gap-2 text-label font-semibold text-ink hover:text-accent">
                  <Phone aria-hidden="true" className="size-icon" strokeWidth={2} />
                  {p.display}
                </a>
              ))}
              <Button href={HEADER_CTA.href} trailingIcon={ArrowRightIcon} fullWidth onClick={() => close(false)} className="mt-4">
                {HEADER_CTA.label}
              </Button>
            </div>
          </Container>
        </div>
      </header>
    </div>
  );
}
