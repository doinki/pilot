import { Suspense } from 'react';

import { PokemonAPI } from '@/api';
import { PokemonCard } from '@/components/PokemonCard';
import { PokemonList } from '@/components/PokemonList';

interface PageProps {
  params: { page: string };
}

/* @ts-expect-error Async Server component */
const PokemonCardSkeleton = <PokemonCard id={0} loading />;

const Page = async ({ params }: PageProps) => {
  const page = Number(params.page);
  const pokemon = await PokemonAPI.getPokemon(page - 1);

  return (
    <PokemonList>
      {pokemon.results.map(({ name, url }) => {
        const id = Number(url.split('/').filter(Boolean).pop());

        if (Number.isNaN(id) || id > 151) return null;

        return (
          <li key={name}>
            <Suspense fallback={PokemonCardSkeleton}>
              {/* @ts-expect-error Async Server component */}
              <PokemonCard id={id} />
            </Suspense>
          </li>
        );
      })}
    </PokemonList>
  );
};

export default Page;
