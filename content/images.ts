// Реестр изображений. Пути, размеры и alt — по .website/design/assets.md и case-photos.md.
// Генерируемые файлы (A01–A07, A11–A15) могут ещё не лежать в public/images — пути зафиксированы заранее.

export type ImageAsset = { src: string; width: number; height: number; alt: string };

const gen = (file: string, width: number, height: number, alt: string): ImageAsset => ({
  src: `/images/${file}`,
  width,
  height,
  alt,
});

export const IMAGES = {
  heroControl: gen('industrial-control-hero.webp', 1800, 1200, 'Шкаф управления с ПЛК на производственном участке'),
  controlCabinet: gen('control-cabinet-plc.webp', 1200, 900, 'Шкаф управления с ПЛК, частотным преобразователем и клеммниками'),
  machineVision: gen('machine-vision-conveyor.webp', 1600, 1200, 'Камеры технического зрения над упаковочным конвейером'),
  cncModernized: gen('cnc-console-modernized.webp', 1600, 1200, 'Модернизированный пульт управления станком с ЧПУ'),
  testBench: gen('industrial-test-bench.webp', 1200, 900, 'Испытательный стенд с датчиками нагрузки и перемещения'),
  pcb: gen('pcb-electronics-closeup.webp', 1200, 900, 'Печатные платы контрактной электроники на производственном столе'),
  portalRobot: gen('portal-packing-robot.webp', 1600, 1200, 'Портальный робот-упаковщик на производственной линии'),
  cncBefore: gen('cnc-console-before.webp', 1200, 900, 'Пульт станка до модернизации'),
  cncAfter: gen('cnc-console-after.webp', 1200, 900, 'Новый пульт ЧПУ после модернизации'),
  hydraulicPress: gen('hydraulic-press-modernization.webp', 1200, 900, 'Гидравлический пресс с новым шкафом управления'),
  shaftFurnace: gen('shaft-furnace-control.webp', 1200, 900, 'Шахтная печь термообработки с современной системой управления'),
  pcbHands: gen('pcb-assembly-hands.webp', 1200, 900, 'Сборка и тестирование платы RFID-считывателя'),
} as const;

// Реальные фото и схемы из презентации (public/images/cases). Разрешение низкое — показывать через CaseFigure.
const c = (name: string, width: number, height: number, alt: string): ImageAsset => ({
  src: `/images/cases/${name}.webp`,
  width,
  height,
  alt,
});

export const CASE_IMAGES = {
  szrtScheme: c('szrt-scheme', 945, 349, 'Структура АСУ ТП резиносмешения АО «СЗРТ»: датчики, шкаф управления с ПЛК, SCADA'),
  pztgLine: c('pztg-galvanic-line', 301, 226, 'Гальваническая линия ООО «ПЗТГ»'),
  pztgScheme: c('pztg-scheme', 974, 332, 'Схема линии цинкования ООО «ПЗТГ»'),
  polygraphMetering: c('polygraph-metering', 558, 375, 'Шкаф учёта и АРМ SCADA на АО «ПолиграфКартон»'),
  damateConsole: c('damate-console', 441, 400, 'Пульт диспетчера АСОДУ, АПК «Дамате»'),
  damateScada: c('damate-scada', 567, 396, 'Экран SCADA «Обесперивание», АПК «Дамате»'),
  biosintezLine: c('biosintez-line', 608, 416, 'Упаковочная линия ПАО «Биосинтез»'),
  biosintezScheme: c('biosintez-scheme', 489, 260, 'Схема контроля фарм-кодов, ПАО «Биосинтез»'),
  bashmakovoStorage: c('bashmakovo-storage', 495, 371, 'Овощехранилище АО «Башмаковский хлеб»'),
  bashmakovoHall: c('bashmakovo-hall', 496, 372, 'Зал хранения АО «Башмаковский хлеб»'),
  bashmakovoVentilation: c('bashmakovo-ventilation', 516, 405, 'Вентиляция хранилища АО «Башмаковский хлеб»'),
  ppoRfidBoard: c('ppo-evt-rfid-board', 451, 282, 'Блок-схема RFID-считывателя, АО «ППО ЭВТ»'),
  ppoBoard: c('ppo-evt-board', 590, 330, 'Плата на микроконтроллере STM32, АО «ППО ЭВТ»'),
  ppoScheme: c('ppo-evt-rfid-scheme', 300, 202, 'Схема обмена данными RFID-системы, АО «ППО ЭВТ»'),
  rtkPro60: c('rtk-pro60', 468, 234, 'Роботизированный комплекс «ПРО-60» на Дрожжевом заводе'),
  rtkPro60Scheme: c('rtk-pro60-scheme', 458, 322, 'Схема укладки пачек РТК «ПРО-60»'),
  pztpPress1: c('pztp-press-1', 254, 414, 'Гидравлический пресс ДВ 2428, ЗАО «ПЗТП»'),
  pztpPress2: c('pztp-press-2', 431, 431, 'Гидравлический пресс ДЕ 2430, ЗАО «ПЗТП»'),
  pztpScheme: c('pztp-scheme', 645, 427, 'Электросхема модернизации прессов, ЗАО «ПЗТП»'),
  ptpaFurnaceScheme: c('ptpa-furnace-scheme', 444, 404, 'Схема шахтной печи с зонами нагрева, АО «ПензТяжПромАрматура»'),
  ptpaCabinets: c('ptpa-cabinets', 358, 453, 'Шкафы управления печами, АО «ПензТяжПромАрматура»'),
  ptpaScadaChart: c('ptpa-scada-chart', 415, 329, 'Диаграмма термообработки в SCADA, АО «ПензТяжПромАрматура»'),
  ptpaScadaPrograms: c('ptpa-scada-programs', 268, 263, 'Программы термообработки в SCADA, АО «ПензТяжПромАрматура»'),
  tehnotestBench: c('tehnotest-bench', 632, 367, 'Стенд испытаний пружин, ООО «Технотест»'),
  tehnotestSpring: c('tehnotest-spring', 627, 413, 'Схема винтовой пружины, ООО «Технотест»'),
  medinzhOld: c('medinzh-cnc-old', 487, 291, 'СЧПУ Sinumerik до модернизации, ЗАО НПП «МедИнж»'),
  medinzhMachine: c('medinzh-machine', 411, 307, 'Станок Meyer Burger TS42, ЗАО НПП «МедИнж»'),
  testmashCabinet: c('testmash-cabinet', 391, 294, 'Шкаф управления стенда, ООО «Тестмаш»'),
  testmashHmi: c('testmash-hmi', 510, 378, 'Экран HMI «Готов» стенда ТНВД, ООО «Тестмаш»'),
  testmashScheme: c('testmash-scheme', 553, 359, 'Гидросхема стенда испытаний ТНВД, ООО «Тестмаш»'),
  gaksLathe: c('gaks-lathe', 358, 434, 'Станок 1516 КСЗС, ООО НПО «ГАКС-Армсервис»'),
  gaksDrawings: c('gaks-drawings', 364, 260, 'Чертежи модернизации станка 1516 КСЗС'),
  gaksCabinet: c('gaks-cabinet', 288, 436, 'Шкаф управления станка 1516 КСЗС'),
  dobrometTower: c('dobromet-tower', 367, 407, 'Водонапорная башня Рожновского, ООО «Добромет»'),
  dobrometScheme: c('dobromet-scheme', 659, 405, 'Электросхема САУ башен, ООО «Добромет»'),
  dobrometHydro: c('dobromet-hydro', 561, 290, 'Гидросхема САУ башен, ООО «Добромет»'),
  negasPanel: c('negas-panel', 738, 433, 'Пульт управления линией, АО «Негас»'),
  negasLine: c('negas-line', 730, 430, 'Линия изоляции труб, АО «Негас»'),
} as const;
