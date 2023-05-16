import 'server-only';

import type { GetPokemonResponse, Pokemon } from '@/types';

export const getPokemon = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');

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