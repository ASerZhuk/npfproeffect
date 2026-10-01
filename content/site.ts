// Реальные контакты и реквизиты — .website/brief.md. Плейсхолдеры (ИНН/ОГРН и т.п.) не выводятся.
export const COMPANY = {
  name: 'ООО «НПФ ПроЭффект»',
  shortName: 'НПФ ПроЭффект',
  descriptor: 'промышленная автоматизация',
  tagline: 'НПФ ПроЭффект · Пенза · работаем по всей России',
  address: 'г. Пенза, ул. Каракозова, 35',
  phones: [
    { display: '+7 (963) 109-36-36', href: 'tel:+79631093636' },
    { display: '+7 (965) 633-06-80', href: 'tel:+79656330680' },
  ],
  emails: [
    { display: 'a.nazemnov_58@mail.ru', href: 'mailto:a.nazemnov_58@mail.ru' },
    { display: 'sapozhnikovba@gmail.com', href: 'mailto:sapozhnikovba@gmail.com' },
  ],
  copyright: '© 2026 ООО «НПФ ПроЭффект»',
} as const;

export const SITE_URL = 'https://proeffect.ru';
