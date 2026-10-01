// Данные главной, которые могут понадобиться другим страницам (метрики компании, клиенты, платформы).
export const HERO_METRICS = [
  { value: '30+', label: 'внедрённых объектов' },
  { value: '−25%', label: 'затрат на энергоресурсы', source: 'АО «ПолиграфКартон», акт внедрения' },
  { value: '+15%', label: 'производительность линии', source: 'АО «СЗРТ», акт внедрения' },
  { value: '100%', label: 'автоконтроль упаковки', source: 'ПАО «Биосинтез», акт внедрения' },
] as const;

export const HERO_CHIPS = ['АСУ ТП', 'Тех. зрение', 'Станки и прессы', 'Стенды', 'РЭА и РТК'] as const;

export const TRUSTED_CLIENTS = [
  'ПАО «Биосинтез»',
  'АПК «Дамате»',
  'АО «ПолиграфКартон»',
  'АО «СЗРТ»',
  'Дрожжевой завод Пензенский',
  'АО «ПензТяжПромАрматура»',
] as const;

export const MODERNIZATION_METRICS = [
  { value: 'в 3–5 раз*', label: 'дешевле нового аналога' },
  { value: 'от 1 мес.*', label: 'срок модернизации' },
  { value: '↓ наладка', label: 'сокращение времени переналадки' },
  { value: '↑ точность', label: 'оптические линейки, сервоприводы' },
] as const;

export const MODERNIZED_MODELS = ['1516 КСЗС', '2620 ИЗТС', '5822 МЗКРС', '2А614-1', 'Meyer Burger TS42', 'ДВ 2428 ЮУМЗ'] as const;

export const EQUIPMENT = ['Delta Electronics', 'OMRON', 'Mitsubishi', 'LEUZE', 'SCADA DataRate', 'HPMONT / TI / Siemens'] as const;
