// Квиз «Расчёт стоимости проекта» (12). Шаг 1 и подписи шагов — дословно из pages/12-kviz-spasibo.html.
// Варианты шагов 2–3 в прототипе не заданы: шаг 2 = отрасли сайта (content/directions.ts), шаг 3 = нейтральные формулировки
// без цифр и цен — требуют утверждения заказчиком (см. .website/code-stage2b.md).
import { INDUSTRIES } from './directions';

export type QuizIcon = 'Workflow' | 'Zap' | 'RefreshCcw' | 'ScanLine' | 'FlaskConical' | 'CircuitBoard';

export const QUIZ = {
  title: 'Расчёт стоимости проекта',
  lead: '4 вопроса · 1 минута · ответ инженера за 1 день',
  total: 4,
  stepNames: ['Что нужно сделать?', 'Отрасль', 'Сроки и бюджет', 'Контакты + файл'],
  upcoming: ['Шаг 2: отрасль', 'Шаг 3: сроки и бюджет', 'Шаг 4: контакты + файл'],
  goal: [
    { value: 'process', label: 'Автоматизировать техпроцесс', icon: 'Workflow' },
    { value: 'energy', label: 'Учёт энергоресурсов', icon: 'Zap' },
    { value: 'modernization', label: 'Модернизировать станок / пресс', icon: 'RefreshCcw' },
    { value: 'vision', label: 'Контроль качества (тех. зрение)', icon: 'ScanLine' },
    { value: 'stand', label: 'Испытательный стенд', icon: 'FlaskConical' },
    { value: 'electronics', label: 'Разработать электронику / РТК', icon: 'CircuitBoard' },
  ] as { value: string; label: string; icon: QuizIcon }[],
  industry: [...INDUSTRIES.map((i) => ({ value: i.id, label: i.label })), { value: 'other', label: 'Другая отрасль' }],
  timing: [
    { value: 'urgent', label: 'Срочно, до 1 месяца' },
    { value: 'quarter', label: '1–3 месяца' },
    { value: 'later', label: 'Более 3 месяцев' },
    { value: 'unknown', label: 'Пока не определились' },
  ],
  budget: [
    { value: 'approved', label: 'Бюджет утверждён' },
    { value: 'planning', label: 'Бюджет формируется — нужна оценка' },
    { value: 'unknown', label: 'Пока не определились' },
  ],
  attachLabel: 'Прикрепить ТЗ',
  attachHint: 'Можно приложить ТЗ, фото оборудования или паспорт станка',
  submitLabel: 'Получить расчёт',
  // Бонус «чек-лист подготовки к модернизации» (PDF) и «презентация PDF» — только при наличии реальных файлов в public/
  bonusPdf: null as string | null,
  presentationPdf: null as string | null,
} as const;
