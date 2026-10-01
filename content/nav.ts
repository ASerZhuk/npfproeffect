// Маршруты — sections.md §14.
export const ROUTES = {
  home: '/',
  solutions: '/resheniya',
  vision: '/resheniya/tehnicheskoe-zrenie',
  modernization: '/modernizaciya',
  production: '/proizvodstvo',
  services: '/uslugi',
  projects: '/proekty',
  caseSzrt: '/proekty/asu-tp-rezinosmesheniya',
  about: '/o-kompanii',
  articles: '/stati',
  contacts: '/kontakty',
  quiz: '/raschet',
  quizThanks: '/raschet/spasibo',
  privacy: '/politika-konfidencialnosti',
} as const;

export type NavItem = { label: string; href: string; key?: boolean };

// «key» — ссылки, остающиеся видимыми в шапке на 1024–1439 (G-01)
export const NAV_ITEMS: NavItem[] = [
  { label: 'Решения', href: ROUTES.solutions, key: true },
  { label: 'Модернизация', href: ROUTES.modernization, key: true },
  { label: 'Производство', href: ROUTES.production },
  { label: 'Услуги', href: ROUTES.services },
  { label: 'Проекты', href: ROUTES.projects, key: true },
  { label: 'О компании', href: ROUTES.about },
  { label: 'Контакты', href: ROUTES.contacts, key: true },
];

// «Статьи» вернуть после публикации материалов (сейчас /stati — noindex, карточки без страниц)
export const FOOTER_NAV: NavItem[] = NAV_ITEMS;

export const HEADER_CTA = { label: 'Рассчитать проект', href: ROUTES.quiz };
