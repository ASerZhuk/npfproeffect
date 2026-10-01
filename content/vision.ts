// Страница 03 «Техническое зрение». Тексты — pages/03-napravlenie.html; sections.md §4.
import { CASE_IMAGES, type ImageAsset } from './images';
import { caseHref } from './cases';
import type { FaqItem } from './faq';

export type VisionTask = { label: string; icon: 'ScanLine' | 'Ruler' | 'Barcode' | 'TextSearch' | 'Thermometer' | 'Palette' | 'PackageCheck' };

// 20 задач в порядке прототипа; иконка — по смысловой группе, повторяется внутри группы
export const VISION_TASKS: VisionTask[] = [
  { label: 'Контроль перемещений', icon: 'ScanLine' },
  { label: 'Контроль контура и формы', icon: 'ScanLine' },
  { label: 'Контроль положения', icon: 'ScanLine' },
  { label: 'Инспекция поверхностей', icon: 'ScanLine' },
  { label: 'Инспекция покрытий', icon: 'ScanLine' },
  { label: 'Инспекция крышки', icon: 'ScanLine' },
  { label: 'Обнаружение дефектов', icon: 'PackageCheck' },
  { label: 'Метки на брак', icon: 'PackageCheck' },
  { label: 'Сортировка', icon: 'PackageCheck' },
  { label: 'Подсчёт количества', icon: 'PackageCheck' },
  { label: 'Проверка герметичности', icon: 'PackageCheck' },
  { label: 'Детекция цвета', icon: 'Palette' },
  { label: 'Детекция наличия', icon: 'PackageCheck' },
  { label: 'Измерение размеров', icon: 'Ruler' },
  { label: 'Уровень налива', icon: 'Ruler' },
  { label: 'Измерение температуры', icon: 'Thermometer' },
  { label: 'Считывание штрих-кодов', icon: 'Barcode' },
  { label: 'Проверка даты и № партии', icon: 'Barcode' },
  { label: 'Распознавание текста', icon: 'TextSearch' },
  { label: 'Распознавание образов', icon: 'TextSearch' },
];

export const VISION_METRICS = [
  { value: '100%', label: 'продукции проверяется автоматически' },
  { value: 'до 400', label: 'упаковок в минуту' },
  { value: '0', label: 'упаковок без кода в готовой продукции' },
  { value: 'архив', label: 'данные о каждой единице' },
] as const;

// Источник — презентация, проект САУ идентификацией фарм-кодов (BOSCH CTK 3040 — до 400 коробок/мин)
export const VISION_METRICS_SOURCE = 'Результаты по проекту ПАО «Биосинтез», 2018 г.';

export const VISION_LEVELS = [
  { n: 'Уровень 1', icon: 'Camera', icon2: 'ScanBarcode', text: 'Камеры, сканеры, датчики, исполнительные механизмы' },
  { n: 'Уровень 2', icon: 'PanelTop', icon2: null, text: 'Шкаф управления: ПЛК, панель оператора, отбраковка' },
  { n: 'Уровень 3', icon: 'ServerCog', icon2: 'MonitorDot', text: 'Сервер, SCADA, архив, отчёты, АРМ' },
] as const;

export type VisionProject = { id: string; meta: string; title: string; effect: string; image: ImageAsset; href?: string };

export const VISION_PROJECTS: VisionProject[] = [
  { id: 'biosintez', meta: 'Фарма', title: 'Фарм-коды на 3 линиях BOSCH, «Биосинтез»', effect: 'до 400 коробок/мин, 100% контроль', image: CASE_IMAGES.biosintezLine, href: caseHref('biosintez') },
  { id: 'negas', meta: 'Трубы', title: 'Видеоконтроль линии покрытий, «Негас»', effect: 'контроль толщины и перемещения труб', image: CASE_IMAGES.negasLine, href: caseHref('negas') },
];

/** Третье место прототипа («+ кейс / Место под следующий кейс») — зарезервированный слот в данных, на странице не выводится до подтверждённого материала. */
export const VISION_RESERVED_SLOT = { meta: '+ кейс', title: 'Место под следующий кейс' } as const;

// В прототипе только вопросы. Ответы — из презентации (проекты «Биосинтез», «Негас») и G-03; требуют согласования с заказчиком.
export const VISION_FAQ: FaqItem[] = [
  {
    q: 'Встанет ли система на нашу старую линию?',
    a: 'Да. Система «Биосинтеза» внедрена на трёх упаковочных машинах 1986, 1989 и 1992 годов выпуска: BOSCH CTK 3040, BOSCH PH3-CS4 и Famar A3123K.',
  },
  {
    q: 'Сколько длится внедрение?',
    a: 'Срок зависит от линии и состава работ. Инженер бесплатно выезжает на объект в Пензенской области и рассчитывает стоимость за 3 рабочих дня.',
  },
  {
    q: 'Что если код не считался?',
    a: 'Система сравнивает код с эталоном и останавливает машину при несовпадении, поэтому упаковка и инструкция без читаемого фарм-кода не попадают в готовую продукцию.',
  },
  {
    q: 'Какие камеры используете?',
    a: 'Под задачу: на линиях «Биосинтеза» — 2D-сканеры штрих-кода LEUZE, на линии «Негас» — видеокамеры и датчики. Данные собирает SCADA DataRate.',
  },
];
