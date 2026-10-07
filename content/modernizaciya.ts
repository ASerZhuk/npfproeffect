// Страница 04 «Модернизация». Тексты — pages/04-modernizaciya.html; sections.md §5.
import { CASE_IMAGES, IMAGES, type ImageAsset } from './images';
import { caseHref } from './cases';

export const MODERN_ROLES = [
  { role: 'Оператор', was: 'Ручные операции, ошибки, простои', now: 'Автоматический цикл, блокировка ошибок' },
  { role: 'Программист', was: 'Длительная обработка программ', now: 'Сокращение времени обработки УП' },
  { role: 'Наладчик', was: 'Долгая наладка и переналадка', now: 'Сокращение времени наладки' },
  { role: 'Энергетик', was: 'Пиковые нагрузки при пуске', now: 'Плавный пуск, рекуперация энергии' },
];

// Миниатюра 120×92: общее изображение, реальное фото кейса (contain) либо иконка
export type ModernClass = { title: string; models: string; thumb?: { image: ImageAsset; fit: 'cover' | 'contain' }; icon?: 'Factory' };

export const MODERN_CLASSES: ModernClass[] = [
  { title: 'Токарные и карусельные', models: '1516 КСЗС', thumb: { image: IMAGES.cncModernized, fit: 'cover' } },
  { title: 'Расточные и шлифовальные', models: '2620, 2А614-1, 2В622Ф4, 5822, Meyer Burger TS42', thumb: { image: CASE_IMAGES.medinzhMachine, fit: 'contain' } },
  { title: 'Гидравлические прессы', models: 'ДВ 2428, ДЕ 2430, ДГ 2432 ЮУМЗ — 10 ед.', thumb: { image: IMAGES.hydraulicPress, fit: 'cover' } },
  { title: 'Печи и прокатные станы', models: 'Шахтные печи +1000°C ±5°C, станы НС44', thumb: { image: IMAGES.shaftFurnace, fit: 'cover' } },
];

export const MODERN_INCLUDES = [
  { icon: 'Cpu', title: 'СЧПУ', text: 'Delta 4 оси + шпиндель вместо Siemens 1981 г.' },
  { icon: 'Gauge', title: 'Привод', text: 'Серводвигатели, ПЧ, замена ДПТ на асинхронные' },
  { icon: 'Ruler', title: 'Измерения', text: 'Оптические линейки, энкодеры' },
  { icon: 'PanelTop', title: 'Шкафы и пульты', text: 'Собственная сборка, HMI-панель' },
] as const;

export const MODERN_COMPARE = [
  {
    title: 'Новый станок',
    highlight: false,
    items: [
      { icon: 'CircleDollarSign', text: 'Стоимость: 100%' },
      { icon: 'Clock3', text: 'Поставка 6–12 мес.*' },
      { icon: 'Scale', text: 'Новый фундамент и обучение' },
    ],
  },
  {
    title: 'Модернизация с САП-АВТОМАТИКА',
    highlight: true,
    items: [
      { icon: 'CircleDollarSign', text: 'Стоимость: 20–35%*' },
      { icon: 'Clock3', text: 'Срок: от 1 мес.*' },
      { icon: 'Scale', text: 'Станина и оснастка остаются, персонал обучаем' },
    ],
  },
] as const;

// Сноска: формулировка согласована со сноской главной (01-04); «цифры требуют уточнения» из прототипа — служебная пометка.
export const MODERN_FOOTNOTE = '* Ориентировочные значения, точная оценка — после обследования станка';

export type ModernCase = { id: string; meta: string; title: string; effect: string; image: ImageAsset; href?: string };

export const MODERN_CASES: ModernCase[] = [
  { id: 'medinzh', meta: '2021 · МедИнж', title: 'СЧПУ профильно-шлифовального станка', effect: '↑ производительность и точность', image: CASE_IMAGES.medinzhMachine, href: caseHref('medinzh') },
  { id: 'pztp', meta: '2020 · ПЗТП', title: 'САУ гидропрессов для пластмасс', effect: '↑ производительность и отказоустойчивость', image: CASE_IMAGES.pztpPress2, href: caseHref('pztp') },
  { id: 'ptpa', meta: '2023–25 · ПензТяжПромАрматура', title: 'САУ шахтных печей термообработки', effect: 'колебания температуры ±5°C', image: CASE_IMAGES.ptpaCabinets, href: caseHref('ptpa') },
];
