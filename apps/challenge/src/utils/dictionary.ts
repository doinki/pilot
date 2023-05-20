import 'server-only';

import { cache } from 'react';

import type { Locale } from '@/types';

export const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ko: () => import('@/dictionaries/ko.json').then((module) => module.default),
} as const;

export const getDictionary = cache(async (locale: Locale) =>
  dictionaries[locale]()
);
