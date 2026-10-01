// Страница 05 «Производство РЭА и РТК». Тексты — pages/05-rea-rtk.html; sections.md §6.
import { CASE_IMAGES, IMAGES, type ImageAsset } from './images';
import { caseHref } from './cases';

export const PRODUCTION_CARDS: { id: string; title: string; items: string[]; image: ImageAsset }[] = [
  {
    id: 'rea',
    title: 'Контрактное производство РЭА',
    items: [
      'Разработка схем, КД и прошивок с исходным кодом',
      'RFID-считыватели, контроллеры, модули ввода-вывода',
      'Монтаж плат и сборка в корпус',
      'Внедрение на объекте (напр., 31 пресс)',
    ],
    image: IMAGES.pcb,
  },
  {
    id: 'rtk',
    title: 'Роботизированные комплексы РТК',
    items: ['Формирователи и укладчики коробов', 'Заклейщики, укладка пергамента', 'До 60 пачек/мин (РТК «ПРО-60»)', 'Проектирование, сборка, ПНР, ТО'],
    image: IMAGES.portalRobot,
  },
];

export const PRODUCTION_STEPS: { n: string; icon: 'FileCheck2' | 'CircuitBoard' | 'Box' | 'FlaskConical' | 'Factory' | 'LifeBuoy'; title: string; text: string }[] = [
  { n: '01', icon: 'FileCheck2', title: 'ТЗ', text: 'Требования' },
  { n: '02', icon: 'CircuitBoard', title: 'Разработка', text: 'Схема, КД, прошивка' },
  { n: '03', icon: 'Box', title: 'Прототип', text: 'Опытный образец' },
  { n: '04', icon: 'FlaskConical', title: 'Испытания', text: 'Отладка' },
  { n: '05', icon: 'Factory', title: 'Серия', text: 'Производство' },
  { n: '06', icon: 'LifeBuoy', title: 'Поддержка', text: 'Гарантия, ТО' },
];

// У проекта «Возрождение» в презентации нет фото — слот без изображения (стоковые/сгенерированные картинки для заказчиков запрещены).
export const PRODUCTION_PROJECTS: { id: string; meta: string; title: string; effect: string; image?: ImageAsset; href?: string }[] = [
  { id: 'ppo-evt', meta: '2022 · ППО ЭВТ', title: 'RFID-считыватели для прессов', effect: '31 единица внедрена', image: CASE_IMAGES.ppoBoard, href: caseHref('ppo-evt') },
  { id: 'rtk-pro60', meta: '2021 · Дрожжевой завод', title: 'Портальный РТК «ПРО-60»', effect: '60 пачек/мин, без ручного труда', image: CASE_IMAGES.rtkPro60, href: caseHref('rtk-pro60') },
  { id: 'vozrozhdenie', meta: 'Возрождение, Заречный', title: 'Укладка пергамента в гофрокороб', effect: '8 коробов/мин' },
];
