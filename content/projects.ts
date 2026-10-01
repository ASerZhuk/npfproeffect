import { CASE_IMAGES, type ImageAsset } from './images';
import { caseHref } from './cases';
import type { DirectionId } from './directions';

// Фильтр направлений каталога проектов (07-02). id используются в URL: /proekty?direction=vision
export const PROJECT_FILTER_DIRECTIONS = [
  { value: 'asutp', label: 'АСУ ТП' },
  { value: 'energy', label: 'Энергоучёт' },
  { value: 'vision', label: 'Тех. зрение' },
  { value: 'modernization', label: 'Модернизация' },
  { value: 'tests', label: 'Испытания' },
  { value: 'rea-rtk', label: 'РЭА и РТК' },
] as const;
export type ProjectFilterDirection = (typeof PROJECT_FILTER_DIRECTIONS)[number]['value'];

// Фильтр отраслей: шесть значений прототипа + три, на которые ссылается главная (01-07, ?industry=…)
export const PROJECT_FILTER_INDUSTRIES = [
  { value: 'mashinostroenie', label: 'Машиностроение' },
  { value: 'pishcha', label: 'Пищевая' },
  { value: 'farma', label: 'Фарма' },
  { value: 'cbp', label: 'ЦБП' },
  { value: 'zhkh', label: 'ЖКХ' },
  { value: 'apk', label: 'АПК' },
  { value: 'rti', label: 'Резинотехника и химия' },
  { value: 'stroymaterialy', label: 'Стройматериалы' },
  { value: 'elektronika', label: 'Электроника' },
] as const;

export type Project = {
  id: string;
  year: number;
  /** Период, если проект длился несколько лет (например, «2023–25») */
  yearLabel?: string;
  /** Направление для фильтра 07-02 */
  filterDirection: ProjectFilterDirection;
  direction: DirectionId;
  /** Подпись направления в строке «год · направление» (07-02) */
  directionLabel: string;
  industryId: string;
  /** Отрасль · город (01-05) */
  place: string;
  /** Заголовок карточки на главной (01-05) */
  homeTitle?: string;
  /** Заголовок карточки в каталоге (07-02) */
  title: string;
  /** Одна строка эффекта; только подтверждённые значения */
  effect: string;
  image: ImageAsset;
  href?: string;
};

// Фото — только реальные (case-photos.md). href — страница кейса /proekty/[slug] (content/cases.ts).
const RAW_PROJECTS: Omit<Project, 'href'>[] = [
  { id: 'szrt', filterDirection: 'asutp', year: 2021, direction: 'asutp', directionLabel: 'АСУ ТП', industryId: 'rti', place: 'Резинотехника · Саранск', homeTitle: 'АСУ ТП резиносмешения, АО «СЗРТ»', title: 'Резиносмешение, АО «СЗРТ»', effect: '+20% качество смесей · +15% производительность', image: CASE_IMAGES.szrtScheme },
  { id: 'pztg', filterDirection: 'asutp', year: 2021, direction: 'ptksau', directionLabel: 'САУ', industryId: 'mashinostroenie', place: 'Машиностроение · Пенза', title: 'Гальванические линии, ООО «ПЗТГ»', effect: '22 ванны без участия оператора', image: CASE_IMAGES.pztgLine },
  { id: 'polygraph', filterDirection: 'energy', year: 2015, direction: 'asuer', directionLabel: 'Энергоучёт', industryId: 'cbp', place: 'ЦБП · Балахна', homeTitle: 'Учёт энергоресурсов, 44 точки, АО «ПолиграфКартон»', title: 'АИИС ТУЭ, «ПолиграфКартон»', effect: '−25% затрат на энергоснабжение', image: CASE_IMAGES.polygraphMetering },
  { id: 'damate', filterDirection: 'asutp', year: 2022, direction: 'asodu', directionLabel: 'Диспетчеризация', industryId: 'pishcha', place: 'Пищевая · Нижний Ломов', title: 'АСОДУ, АПК «Дамате»', effect: 'расчёт OEE, ↓ простои', image: CASE_IMAGES.damateScada },
  { id: 'biosintez', filterDirection: 'vision', year: 2018, direction: 'stz', directionLabel: 'Тех. зрение', industryId: 'farma', place: 'Фарма · Пенза', homeTitle: 'Тех. зрение фарм-кодов, ПАО «Биосинтез»', title: 'Фарм-коды, «Биосинтез»', effect: '100% автоматическая проверка упаковки', image: CASE_IMAGES.biosintezLine },
  { id: 'bashmakovo', filterDirection: 'asutp', year: 2020, direction: 'ptksau', directionLabel: 'САУ', industryId: 'apk', place: 'АПК · Белинский р-н', title: 'Микроклимат 18 000 т, «Башмаковский хлеб»', effect: '↑ сроки хранения, ↓ энергия', image: CASE_IMAGES.bashmakovoHall },
  { id: 'dobromet', filterDirection: 'asutp', year: 2023, direction: 'ptksau', directionLabel: 'ЖКХ', industryId: 'zhkh', place: 'ЖКХ · Пенза', title: 'Башни Рожновского, «Добромет»', effect: '−25–50% электроэнергии', image: CASE_IMAGES.dobrometTower },
  { id: 'tehnotest', filterDirection: 'tests', year: 2019, direction: 'iis', directionLabel: 'Испытания', industryId: 'mashinostroenie', place: 'Испытания · Пенза', title: 'ИИС испытаний пружин, «Технотест»', effect: 'автоматический цикл', image: CASE_IMAGES.tehnotestBench },
  { id: 'rtk-pro60', filterDirection: 'rea-rtk', year: 2021, direction: 'rtk', directionLabel: 'РТК', industryId: 'pishcha', place: 'Пищевая · Пенза', title: 'РТК «ПРО-60», Дрожжевой завод', effect: '60 пачек/мин', image: CASE_IMAGES.rtkPro60 },
  // Дополнительные подтверждённые записи — подгружаются кнопкой «Показать ещё» (07-02). Тексты — из прототипов 03–05 и реестра.
  { id: 'medinzh', direction: 'chpu', filterDirection: 'modernization', year: 2021, directionLabel: 'Модернизация', industryId: 'mashinostroenie', place: 'Машиностроение · Пенза', title: 'СЧПУ профильно-шлифовального станка, «МедИнж»', effect: '↑ производительность и точность', image: CASE_IMAGES.medinzhMachine },
  { id: 'pztp', direction: 'chpu', filterDirection: 'modernization', year: 2020, directionLabel: 'Модернизация', industryId: 'mashinostroenie', place: 'Машиностроение · Пенза', title: 'САУ гидропрессов для пластмасс, «ПЗТП»', effect: '↑ производительность и отказоустойчивость', image: CASE_IMAGES.pztpPress2 },
  { id: 'ptpa', direction: 'chpu', filterDirection: 'modernization', year: 2023, yearLabel: '2023–25', directionLabel: 'Модернизация', industryId: 'mashinostroenie', place: 'Машиностроение · Пенза', title: 'САУ шахтных печей термообработки, «ПензТяжПромАрматура»', effect: 'колебания температуры ±5°C', image: CASE_IMAGES.ptpaCabinets },
  { id: 'negas', direction: 'stz', filterDirection: 'vision', year: 2015, directionLabel: 'Тех. зрение', industryId: 'mashinostroenie', place: 'Трубы · Пенза', title: 'Видеоконтроль линии покрытий, «Негас»', effect: 'контроль толщины и перемещения труб', image: CASE_IMAGES.negasLine },
  { id: 'gaks', direction: 'chpu', filterDirection: 'modernization', year: 2017, directionLabel: 'Модернизация', industryId: 'mashinostroenie', place: 'Машиностроение · Пенза', title: 'Станок 1516 КСЗС, «ГАКС-Армсервис»', effect: '↑ точность обработки деталей до 1500 мм', image: CASE_IMAGES.gaksLathe },
  { id: 'testmash', direction: 'iis', filterDirection: 'tests', year: 2021, directionLabel: 'Испытания', industryId: 'mashinostroenie', place: 'Испытания · Пенза', title: 'Стенд испытаний ТНВД, «Тестмаш»', effect: '2 изделия одновременно, 0–250 МПа', image: CASE_IMAGES.testmashHmi },
  { id: 'ppo-evt', direction: 'rtk', filterDirection: 'rea-rtk', year: 2022, directionLabel: 'РЭА', industryId: 'elektronika', place: 'Электроника · Пенза', title: 'RFID-считыватели для прессов, «ППО ЭВТ»', effect: '31 единица внедрена', image: CASE_IMAGES.ppoBoard },
];

export const PROJECTS: Project[] = RAW_PROJECTS.map((p) => ({ ...p, href: caseHref(p.id) }));

export const HOME_PROJECT_IDS = ['szrt', 'polygraph', 'biosintez'] as const;
