import type { Locale } from './locales';

const dictionaries = {
  en: () => import('./en.json').then((m) => m.default),
  zh: () => import('./zh.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
