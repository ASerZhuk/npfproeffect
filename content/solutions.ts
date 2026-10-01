// Страница 02 «Решения». Тексты — pages/02-resheniya.html, порядок и состав — sections.md §3.
import { CASE_IMAGES, IMAGES, type ImageAsset } from './images';
import { ROUTES } from './nav';
import { hubHref } from './direction-hubs';
import type { DirectionId } from './directions';

export type SolutionCardData = {
  id: string;
  /** маркер направления в заголовке карточки */
  direction: DirectionId;
  title: string;
  /** вкладка «По направлениям» — пункты прототипа */
  items: string[];
  href: string;
  /** миниатюра 180×136: cover — общие изображения, contain — реальные фото */
  thumb: ImageAsset;
  thumbFit: 'cover' | 'contain';
  /** вкладка «По задачам» — типовая задача клиента из 02-03 (связь 1:1) */
  task: string;
  /** вкладка «По отраслям» — отрасли, где есть подтверждённые проекты (id из PROJECT_FILTER_INDUSTRIES) */
  industries: string[];
};

export const SOLUTION_CARDS: SolutionCardData[] = [
  {
    id: 'techprocess',
    direction: 'asutp',
    title: 'Автоматизация техпроцессов',
    items: ['Качество и стабильность ТП', 'Контроль параметров', 'Предотвращение аварий', 'Диагностика оборудования'],
    href: hubHref('asu-tp'),
    thumb: IMAGES.controlCabinet,
    thumbFit: 'cover',
    task: 'Диспетчеризация и расчёт OEE',
    industries: ['rti', 'mashinostroenie', 'pishcha', 'apk'],
  },
  {
    id: 'energy',
    direction: 'asuer',
    title: 'Учёт энергоресурсов',
    items: ['Контроль качества электроэнергии', 'Учёт генерации и потребления', 'Снижение потерь', 'Ограничение мощности'],
    href: hubHref('uchet-energoresursov'),
    thumb: CASE_IMAGES.polygraphMetering,
    thumbFit: 'contain',
    task: 'Снизить затраты на электроэнергию',
    industries: ['cbp', 'zhkh'],
  },
  {
    id: 'vision',
    direction: 'stz',
    title: 'Техническое зрение',
    items: ['Обнаружение дефектов', 'Штрих-коды, даты, № партии', 'Измерение размеров, уровня налива', 'Сортировка и подсчёт'],
    href: ROUTES.vision,
    thumb: IMAGES.machineVision,
    thumbFit: 'cover',
    task: 'Убрать брак и ручной контроль',
    industries: ['farma', 'mashinostroenie'],
  },
  {
    id: 'modernization',
    direction: 'chpu',
    title: 'Модернизация станков и прессов',
    items: ['Точное позиционирование', 'Плавный пуск, рекуперация', 'Рост производительности', 'Без простоев и сбоев'],
    href: ROUTES.modernization,
    thumb: IMAGES.cncModernized,
    thumbFit: 'cover',
    task: 'Оживить старый станок / пресс',
    industries: ['mashinostroenie'],
  },
  {
    id: 'tests',
    direction: 'iis',
    title: 'Испытания и измерения',
    items: ['Управление по программам и методикам', 'Автоматическая регистрация', 'Визуализация в реальном времени', 'Быстропротекающие процессы'],
    href: hubHref('ispytatelnye-stendy'),
    thumb: IMAGES.testBench,
    thumbFit: 'cover',
    task: 'Автоматизировать испытания',
    industries: ['mashinostroenie'],
  },
  {
    id: 'rea',
    direction: 'rtk',
    title: 'РЭА и робототехника',
    items: ['Контрактная разработка электроники', 'RFID-считыватели, контроллеры', 'Портальные РТК упаковки', 'Серийное производство'],
    href: ROUTES.production,
    thumb: IMAGES.portalRobot,
    thumbFit: 'cover',
    task: 'Роботизировать упаковку',
    industries: ['pishcha', 'elektronika'],
  },
];

export const SOLUTION_TABS = [
  { id: 'directions', label: 'По направлениям' },
  { id: 'tasks', label: 'По задачам' },
  { id: 'industries', label: 'По отраслям' },
] as const;
export type SolutionTabId = (typeof SOLUTION_TABS)[number]['id'];

// Узлы инфографики 02-01: пять направлений вокруг узла «ПроЭффект». Позиции — проценты области схемы.
export const SOLUTION_MAP_NODES = [
  { id: 'techprocess', label: 'АСУ ТП и энергоучёт', short: 'АСУ ТП', direction: 'asutp', x: 50, y: 12 },
  { id: 'vision', label: 'Техническое зрение', short: 'Тех. зрение', direction: 'stz', x: 80, y: 34 },
  { id: 'modernization', label: 'Модернизация станков', short: 'Станки', direction: 'chpu', x: 72, y: 84 },
  { id: 'tests', label: 'Испытательные стенды', short: 'Стенды', direction: 'iis', x: 28, y: 84 },
  { id: 'rea', label: 'РЭА и РТК', short: 'РЭА и РТК', direction: 'rtk', x: 20, y: 34 },
] as const;

// 02-03. Типовые задачи клиентов
export type TaskCardData = { title: string; icon: 'Zap' | 'ScanSearch' | 'RefreshCcw' | 'ChartNoAxesCombined' | 'FlaskConical' | 'Bot'; href: string };

export const TASK_CARDS: TaskCardData[] = [
  { title: 'Снизить затраты на электроэнергию', icon: 'Zap', href: hubHref('uchet-energoresursov') },
  { title: 'Убрать брак и ручной контроль', icon: 'ScanSearch', href: ROUTES.vision },
  { title: 'Оживить старый станок / пресс', icon: 'RefreshCcw', href: ROUTES.modernization },
  { title: 'Диспетчеризация и расчёт OEE', icon: 'ChartNoAxesCombined', href: hubHref('asu-tp') },
  { title: 'Автоматизировать испытания', icon: 'FlaskConical', href: hubHref('ispytatelnye-stendy') },
  { title: 'Роботизировать упаковку', icon: 'Bot', href: ROUTES.production },
];
