import { ROUTES } from './nav';
import { hubHref } from './direction-hubs';
import { IMAGES, type ImageAsset } from './images';

// Коды направлений и цвета маркеров (design-system §2). Цвет — только класс-маркер, не текст/фон.
export type DirectionId = 'rtk' | 'asutp' | 'ptksau' | 'asuer' | 'asodu' | 'stz' | 'iis' | 'chpu' | 'skud';

export const DIRECTIONS: Record<DirectionId, { code: string; markerClass: string }> = {
  rtk: { code: 'РТК', markerClass: 'bg-dir-rtk' },
  asutp: { code: 'АСУ ТП', markerClass: 'bg-dir-asutp' },
  ptksau: { code: 'ПТК САУ', markerClass: 'bg-dir-ptksau' },
  asuer: { code: 'АСУЭР', markerClass: 'bg-dir-asuer' },
  asodu: { code: 'АСОДУ', markerClass: 'bg-dir-asodu' },
  stz: { code: 'СТЗ', markerClass: 'bg-dir-stz' },
  iis: { code: 'ИИС', markerClass: 'bg-dir-iis' },
  chpu: { code: 'ЧПУ', markerClass: 'bg-dir-chpu' },
  skud: { code: 'СКУД', markerClass: 'bg-dir-skud' },
};

export type DirectionCardData = {
  id: string;
  direction: DirectionId;
  icon: 'ScanLine' | 'Gauge' | 'Cpu' | 'PanelTop' | 'CircuitBoard' | 'Bot' | 'Activity';
  title: string;
  text: string;
  href: string;
  image: ImageAsset;
};

// 01-03. «Что мы делаем» — пять направлений
export const HOME_DIRECTIONS: DirectionCardData[] = [
  { id: 'asutp', direction: 'asutp', icon: 'Gauge', title: 'АСУ ТП и учёт энергоресурсов', text: 'Контроль процесса, диспетчеризация, АИИС ТУЭ', href: hubHref('asu-tp'), image: IMAGES.controlCabinet },
  { id: 'vision', direction: 'stz', icon: 'ScanLine', title: 'Техническое зрение', text: 'Дефекты, штрих-коды, размеры, сортировка', href: ROUTES.vision, image: IMAGES.machineVision },
  { id: 'modernization', direction: 'chpu', icon: 'PanelTop', title: 'Модернизация станков и прессов', text: 'ЧПУ, привод, САУ — дешевле нового станка', href: ROUTES.modernization, image: IMAGES.cncModernized },
  { id: 'stands', direction: 'iis', icon: 'Activity', title: 'Испытательные стенды', text: 'САУ испытаний и измерений, ИИС', href: hubHref('ispytatelnye-stendy'), image: IMAGES.testBench },
  { id: 'rea-rtk', direction: 'rtk', icon: 'Bot', title: 'Производство РЭА и РТК', text: 'Контрактная электроника, роботы-упаковщики', href: ROUTES.production, image: IMAGES.pcb },
];

// Отрасли (01-07) — те же значения будут фильтром проектов
export const INDUSTRIES = [
  { id: 'mashinostroenie', label: 'Машиностроение и металлообработка', icon: 'Factory' },
  { id: 'pishcha', label: 'Пищевая промышленность', icon: 'Wheat' },
  { id: 'apk', label: 'АПК и хранение', icon: 'Wheat' },
  { id: 'farma', label: 'Фармацевтика', icon: 'Pill' },
  { id: 'cbp', label: 'ЦБП и полиграфия', icon: 'Newspaper' },
  { id: 'rti', label: 'Резинотехника и химия', icon: 'FlaskConical' },
  { id: 'zhkh', label: 'Водоснабжение и ЖКХ', icon: 'Droplets' },
  { id: 'stroymaterialy', label: 'Стройматериалы', icon: 'BrickWall' },
  { id: 'elektronika', label: 'Электроника', icon: 'CircuitBoard' },
] as const;
