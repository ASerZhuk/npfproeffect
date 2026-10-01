// Статьи и новости (10). Реальных материалов пока нет: заголовки — из прототипа pages/10-stati.html (заглушки, ждут авторов).
// Дат нет (не выдумываем); href появится вместе со страницами материалов.
import { CASE_IMAGES, IMAGES, type ImageAsset } from './images';

export type ArticleType = 'stati' | 'novosti' | 'vystavki';

export type Article = { id: string; type: ArticleType; category: string; title: string; image: ImageAsset; href?: string };

export const ARTICLE_FILTERS: { value: 'all' | ArticleType; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'stati', label: 'Статьи' },
  { value: 'novosti', label: 'Новости' },
  { value: 'vystavki', label: 'Выставки' },
];

export const ARTICLES: Article[] = [
  { id: 'modernizaciya-ili-novyy-stanok', type: 'stati', category: 'Статья', title: 'Модернизировать или купить новый станок: расчёт', image: IMAGES.cncModernized },
  { id: 'snizit-zatraty-na-elektroenergiyu', type: 'stati', category: 'Статья', title: 'Как снизить затраты на электроэнергию на 25%', image: CASE_IMAGES.polygraphMetering },
  { id: 'tehnicheskoe-zrenie-20-zadach', type: 'stati', category: 'Статья', title: 'Техническое зрение: 20 задач на конвейере', image: IMAGES.machineVision },
  { id: 'zamena-siemens-chpu', type: 'stati', category: 'Статья', title: 'Чем заменить Siemens на ЧПУ', image: IMAGES.controlCabinet },
  { id: 'sau-shahtnyh-pechey', type: 'novosti', category: 'Новость', title: 'Сдали САУ шахтных печей', image: IMAGES.shaftFurnace },
  { id: 'chto-takoe-oee', type: 'stati', category: 'Статья', title: 'Что такое OEE и как его считать', image: CASE_IMAGES.damateScada },
];
