// «О компании» (09). Только подтверждённые факты (презентация, бриф). Неизвестное = null и в разметку не выводится
// (design-system §10: год основания, число сотрудников, ИНН/КПП/ОГРН, PDF карточки, сертификаты — до подтверждения заказчиком).
import { CASE_IMAGES } from './images';
import { COMPANY } from './site';

export const ABOUT = {
  heroImage: CASE_IMAGES.testmashCabinet,
  heroCaption: 'Сборка шкафа управления стенда, ООО «Тестмаш»',
  facts: {
    foundedYear: null as string | null, // «С 20__ г. на рынке» — ждём подтверждения
    engineers: null as string | null, // «__ инженеров в штате» — ждём подтверждения
    objects: '30+',
    regions: '4',
    ownProduction: 'Собственный участок сборки ШУ и РЭА',
  },
  why: [
    { icon: 'Workflow', title: 'Полный цикл', text: 'от ПИР до ТО' },
    { icon: 'Factory', title: 'Своё производство', text: 'шкафы, РЭА, РТК' },
    { icon: 'RefreshCcw', title: 'Импортозамещение', text: 'замена Siemens и др.' },
    { icon: 'LifeBuoy', title: 'Сервис после сдачи', text: 'ТО, метрология' },
  ] as const,
  geographyLead: 'Пенза, Саранск, Балахна, Хвалынск, Н.Ломов, Заречный…',
  // Координаты городов (WGS84), не адреса предприятий. Объекты — из реестра внедрений.
  geoPoints: [
    { id: 'penza', name: 'Пенза', region: 'Пензенская обл.', object: 'Офис и участок сборки ШУ и РЭА; большинство объектов реестра', latitude: 53.19568, longitude: 45.01075, source: 'https://www.geonames.org/511565/penza.html' },
    { id: 'zarechny', name: 'Заречный', region: 'Пензенская обл.', object: 'ООО «Возрождение»: линия фасовки печенья', latitude: 53.2, longitude: 45.16667, source: 'https://en.wikipedia.org/wiki/Zarechny,_Penza_Oblast' },
    { id: 'lomov', name: 'Нижний Ломов', region: 'Пензенская обл.', object: 'АПК «Дамате»; бетонный завод «Ломовский»', latitude: 53.517, longitude: 43.667, source: 'https://en.wikipedia.org/wiki/Nizhny_Lomov' },
    { id: 'saransk', name: 'Саранск', region: 'Республика Мордовия', object: 'АО «СЗРТ»: АСУ ТП резиносмешения', latitude: 54.183, longitude: 45.183, source: 'https://en.wikipedia.org/wiki/Saransk' },
    { id: 'balakhna', name: 'Балахна', region: 'Нижегородская обл.', object: 'АО «ПолиграфКартон»: АИИС ТУЭ, 44 точки учёта', latitude: 56.480833, longitude: 43.540278, source: 'https://www.wikidata.org/wiki/Q104559' },
    { id: 'khvalynsk', name: 'Хвалынск', region: 'Саратовская обл.', object: 'ООО «Завод Электрофидер»: контроль температуры в печах полимеризации', latitude: 52.483, longitude: 48.1, source: 'https://en.wikipedia.org/wiki/Khvalynsk' },
  ] as const,
  geoNote: 'Точки обозначают города, а не точные адреса предприятий.',
  documents: [] as { title: string; meta?: string; href: string }[],
  documentsPending: 'Скан-копии лицензий, сертификатов и писем будут добавлены после согласования с заказчиком',
  requisites: {
    rows: [
      { term: 'Наименование', value: COMPANY.name },
      { term: 'ИНН / КПП', value: null as string | null },
      { term: 'ОГРН', value: null as string | null },
      { term: 'Адрес', value: COMPANY.address },
    ],
    cardPdf: null as string | null, // «Скачать карточку компании» — только при наличии реального PDF
  },
} as const;
