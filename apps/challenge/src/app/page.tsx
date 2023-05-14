import { Divider, Stack } from '@pilot/ui';
import { Suspense } from 'react';

import { PokemonAPI } from '@/api';
import { PokemonCard } from '@/components';

/* @ts-expect-error Async Server component */
const PokemonCardSkeleton = <PokemonCard id={0} loading />;

const Home = async () => {
  const pokemon = await PokemonAPI.getPokemon();

  return (
    <main className="mx-auto max-w-screen-sm">
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
    </main>
  );
};

export default Home;
