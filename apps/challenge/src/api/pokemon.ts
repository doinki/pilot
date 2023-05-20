import 'server-only';

import { cache } from 'react';
import sharp from 'sharp';

import type { GetPokemonResponse, Pokemon } from '@/types';

export const getPokemon = async (page?: number | string) => {
  const offset = page ? Number(page) * 20 : 0;

  const url = new URL('https://pokeapi.co/api/v2/pokemon');
  url.searchParams.set('offset', String(offset));

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch pokemon');
  }

  return (await res.json()) as GetPokemonResponse;
};

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
