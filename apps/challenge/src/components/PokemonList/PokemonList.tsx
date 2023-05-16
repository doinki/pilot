import { Divider, Stack } from '@pilot/ui';
import { Suspense } from 'react';

import { PokemonAPI } from '@/api';

import { PokemonCard } from '../PokemonCard';

/* @ts-expect-error Async Server component */
const PokemonCardSkeleton = <PokemonCard id={0} loading />;

interface PokemonListProps {
  page?: number | string;
}

const PokemonList = async ({ page = 0 }: PokemonListProps) => {
  const pokemon = await PokemonAPI.getPokemon(page);

  return (
    <Stack
      component="ul"
      divider={
        <li aria-hidden>
          <Divider />
        </li>
      }
    >
      {pokemon.results.map(({ name, url }) => {
        const id = url.split('/').filter(Boolean).pop();

        if (!id) return null;

        return (
          <li key={name}>
            <Suspense fallback={PokemonCardSkeleton}>
              {/* @ts-expect-error Async Server component */}
              <PokemonCard id={Number(id)} />
            </Suspense>
          </li>
        );
      })}
    </Stack>
  );
};

export default PokemonList;
