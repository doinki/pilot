import type { dictionaries } from '@/utils';

export type Locale = 'en' | 'ko';

export type Dictionary = Awaited<ReturnType<typeof dictionaries.ko>>;

export type DictionaryPokemonKey = keyof Dictionary['pokemon'];
