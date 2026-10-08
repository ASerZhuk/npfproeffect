// Новости. ВРЕМЕННЫЕ тексты собраны из фактов карточек проектов (content/cases.ts) — заменить настоящими новостями.
// Порядок в массиве = порядок на сайте (новые сверху). date — ISO «2026-03-12»; без реальной даты не заполнять (не выдумываем).
import { CASE_IMAGES, IMAGES, type ImageAsset } from './images';

export type NewsItem = {
  slug: string;
  title: string;
  /** краткий анонс для карточек и meta description */
  excerpt: string;
  image: ImageAsset;
  /** абзацы текста новости */
  body: string[];
  date?: string;
  /** связанный проект: /proekty/<slug> */
  projectSlug?: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: 'uchet-energoresursov-poligrafkarton',
    title: 'Запустили систему учёта электроэнергии на 44 точки для «ПолиграфКартон»',
    excerpt: 'АИИС ТУЭ для АО «ПолиграфКартон» (Балахна): затраты на энергоснабжение снизились на 25%.',
    image: CASE_IMAGES.polygraphMetering,
    body: [
      'Для АО «ПолиграфКартон» в Балахне внедрена система технического учёта электроэнергии на 44 точки.',
      'Система даёт почасовое планирование потребления, затраты на энергоснабжение снизились на 25%.',
    ],
    projectSlug: 'uchet-energoresursov-poligrafkarton',
  },
  {
    slug: 'dispetcherizaciya-asodu-damate',
    title: 'Диспетчеризация линий переработки индейки для «Дамате»',
    excerpt: 'АСОДУ для АПК «Дамате» (Нижний Ломов): учёт простоев, расчёт OEE и контроль качества из единого диспетчерского пункта.',
    image: CASE_IMAGES.damateScada,
    body: [
      'Для АПК «Дамате» в Нижнем Ломове создана АСОДУ линий убоя и переработки индейки.',
      'Из единого диспетчерского пункта ведётся учёт простоев, расчёт OEE и контроль качества продукции.',
    ],
    projectSlug: 'dispetcherizaciya-asodu-damate',
  },
  {
    slug: 'tehnicheskoe-zrenie-biosintez',
    title: 'Автоматическая проверка фарм-кодов на упаковочных машинах «Биосинтез»',
    excerpt: 'Система технического зрения проверяет до 400 коробок в минуту на 3 упаковочных машинах.',
    image: IMAGES.machineVision,
    body: [
      'На 3 упаковочных машинах BOSCH и Famar ПАО «Биосинтез» (Пенза) работает САУ идентификации фарм-кодов.',
      'Проверяется 100% продукции, производительность — до 400 коробок в минуту.',
    ],
    projectSlug: 'tehnicheskoe-zrenie-biosintez',
  },
];

export const getNews = (slug: string) => NEWS.find((n) => n.slug === slug);
export const HOME_NEWS_COUNT = 3;

/** «12 марта 2026» из ISO-даты */
export const formatNewsDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
