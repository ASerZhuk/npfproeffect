// Страница 06 «Услуги». Тексты — pages/06-uslugi.html; sections.md §7.
export const SERVICES: { n: string; icon: 'Search' | 'FileCog' | 'CodeXml' | 'PanelTop' | 'Truck' | 'Wrench' | 'Gauge' | 'GraduationCap' | 'LifeBuoy'; title: string; text: string }[] = [
  { n: '01', icon: 'Search', title: 'Обследование и ПИР', text: 'Выезд на объект, аудит оборудования, ТЗ и проектно-изыскательские работы' },
  { n: '02', icon: 'FileCog', title: 'Разработка КД и ТД', text: 'Конструкторская и техническая документация: схемы, шкафы, спецификации' },
  { n: '03', icon: 'CodeXml', title: 'Программирование ПЛК, SCADA', text: 'ПО контроллеров, панелей HMI и SCADA DataRate: сбор данных, архив, отчёты' },
  { n: '04', icon: 'PanelTop', title: 'Сборка шкафов и пультов (ШУ)', text: 'Шкафы и пульты управления на собственном участке сборки в Пензе' },
  { n: '05', icon: 'Truck', title: 'Поставка оборудования', text: 'Delta Electronics, OMRON, Mitsubishi, LEUZE, Siemens и импортозамещение' },
  { n: '06', icon: 'Wrench', title: 'Монтаж и ПНР', text: 'Монтаж на объекте, пусконаладка и сдача системы в эксплуатацию' },
  { n: '07', icon: 'Gauge', title: 'Метрологическое сопровождение', text: 'Метрологическое сопровождение измерительных каналов и стендов' },
  { n: '08', icon: 'GraduationCap', title: 'Обучение персонала', text: 'Обучение операторов, наладчиков и энергетиков работе с системой' },
  { n: '09', icon: 'LifeBuoy', title: 'Техническое обслуживание', text: 'Гарантия и сервисный контракт: осмотры, выезды, ЗИП, обновление ПО' },
];

// Цены в прототипе — «от ___ ₽/мес» (контентный блокер): до письменного согласования показываем «Стоимость по запросу».
export const TARIFF_PRICE_LABEL = 'Стоимость по запросу';

export const TARIFFS: { id: string; name: string; highlight: boolean; items: { icon: 'ShieldCheck' | 'Headset' | 'Clock3' | 'Boxes' | 'RefreshCw' | 'Gauge'; text: string }[] }[] = [
  {
    id: 'base',
    name: 'Базовый',
    highlight: false,
    items: [
      { icon: 'ShieldCheck', text: 'Плановые осмотры' },
      { icon: 'Headset', text: 'Удалённая поддержка' },
    ],
  },
  {
    id: 'standard',
    name: 'Стандарт',
    highlight: true,
    items: [
      { icon: 'Clock3', text: 'Выезд в течение 24 ч' },
      { icon: 'Boxes', text: 'Резерв ЗИП' },
    ],
  },
  {
    id: 'full',
    name: 'Полный',
    highlight: false,
    items: [
      { icon: 'RefreshCw', text: 'Модернизация ПО' },
      { icon: 'Gauge', text: 'Метрология' },
    ],
  },
];

export const TARIFF_NOTE = 'Пример: ТО САУ микроклимата «Башмаковский хлеб» с 2021 г. по н.в.';
