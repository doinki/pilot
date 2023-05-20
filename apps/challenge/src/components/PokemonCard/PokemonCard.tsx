import { Skeleton } from '@pilot/ui';
import Image from 'next/image';

import { PokemonAPI } from '@/api';

const PokemonCard = async ({
  id,
  loading,
}: {
  id: number;
  loading?: boolean;
}) => {
  const pokemon = loading ? null : await PokemonAPI.getPokemonById(id);

  return (
    <article className="flex gap-6 p-4">
      <div className="relative aspect-square w-1/2">
        {!pokemon ? (
          <Skeleton height="100%" variant="rounded" width="100%" />
        ) : (
          <Image
            alt={pokemon.name}
            sizes="475px"
            src={`/images/${pokemon.id.toString().padStart(3, '0')}.png`}
            fill
          />
        )}
      </div>
      <section className="prose prose-neutral dark:prose-invert lg:prose-xl">
        <i>
          {!pokemon ? (
            <Skeleton width={64} />
          ) : (
            `#${String(pokemon.id).padStart(4, '0')}`
          )}
        </i>
        <header>
          <h2>{!pokemon ? <Skeleton width={160} /> : pokemon.name}</h2>
        </header>
      </section>
    </article>
  );
};

export default PokemonCard;
