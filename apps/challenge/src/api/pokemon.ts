import 'server-only';

import { cache } from 'react';
import sharp from 'sharp';

import type { Pokemon } from '@/types';

export const getPokemon = cache(() =>
  import('public/pokemon.json').then((module) => module.default)
);

export const getPokemonById = async (id: number | string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
    next: { revalidate: 24 * 60 * 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch pokemon');
  }

  return (await res.json()) as Pokemon;
};

export const getBase64EncodedPokemonImageById = cache(
  async (id: number | string) => {
    const url = new URL(
      `/images/${id.toString().padStart(3, '0')}.png`,
      process.env.URL
    );

    const res = await fetch(url);
    if (!res.ok) {
      return undefined;
    }

    const data = await res.arrayBuffer();

    return sharp(data)
      .resize({ height: 1, width: 1 })
      .toFormat('png')
      .toBuffer()
      .then((data) => data.toString('base64'))
      .then((data) => `data:image/png;base64,${data}`);
  }
);
