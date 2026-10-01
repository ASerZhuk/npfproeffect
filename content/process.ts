// Полный цикл работ — 01-06 (шесть шагов главной). Иконки — имена lucide-react.
export type ProcessStep = { n: string; icon: 'Search' | 'FileCog' | 'MonitorCog' | 'PanelTop' | 'Wrench' | 'ShieldCheck'; title: string; text: string };

export const PROCESS_STEPS: ProcessStep[] = [
  { n: '01', icon: 'Search', title: 'Обследование', text: 'Выезд, аудит, ТЗ' },
  { n: '02', icon: 'FileCog', title: 'ПИР, КД, ТД', text: 'Проект и документация' },
  { n: '03', icon: 'MonitorCog', title: 'ПО и SCADA', text: 'ПЛК, HMI, DataRate' },
  { n: '04', icon: 'PanelTop', title: 'Сборка ШУ', text: 'Шкафы и пульты собств. производства' },
  { n: '05', icon: 'Wrench', title: 'Монтаж и ПНР', text: 'Пусконаладка, обучение персонала' },
  { n: '06', icon: 'ShieldCheck', title: 'ТО и метрология', text: 'Гарантия и сервисный контракт' },
];
