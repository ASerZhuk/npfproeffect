// Реальные контакты и реквизиты — .website/brief.md. Плейсхолдеры (ИНН/ОГРН и т.п.) не выводятся.
export const COMPANY = {
  name: 'ООО "САП-АВТОМАТИКА"',
  shortName: 'САП-АВТОМАТИКА',
  descriptor: 'промышленная автоматизация',
  tagline: 'САП-АВТОМАТИКА · Пенза · работаем по всей России',
  address: 'г. Пенза, ул. Каракозова, 35',
  phones: [
    { display: '+7 (963) 109-36-36', href: 'tel:+79631093636' },
    { display: '+7 (965) 633-06-80', href: 'tel:+79656330680' },
  ],
  emails: [
    { display: 'a.nazemnov_58@mail.ru', href: 'mailto:a.nazemnov_58@mail.ru' },
    { display: 'sapozhnikovba@gmail.com', href: 'mailto:sapozhnikovba@gmail.com' },
  ],
  copyright: '© 2026 ООО "САП-АВТОМАТИКА"',
} as const;

export const SITE_URL = 'https://proeffect.ru';
