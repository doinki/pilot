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
  const [pokemon, encodedImage] = loading
    ? []
    : await Promise.all([
        PokemonAPI.getPokemonById(id),
        PokemonAPI.getBase64EncodedPokemonImageById(id),
      ]);

  return (
    <article className="flex gap-6 p-4">
      <div className="w-1/2 shrink-0">
        <div className="aspect-h-1 aspect-w-1">
          {!pokemon ? (
            <Skeleton height="100%" variant="rounded" width="100%" />
          ) : (
            <Image
              alt={pokemon.name}
              className="rounded-md"
              sizes="475px"
              src={`/images/${pokemon.id.toString().padStart(3, '0')}.png`}
              style={{
                backgroundImage: encodedImage
                  ? `url(${encodedImage})`
                  : undefined,
              }}
              fill
            />
          )}
        </div>
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
          <h2 className="break-all">
            {!pokemon ? <Skeleton width={160} /> : pokemon.name}
          </h2>
        </header>
      </section>
    </article>
  );
};

export default PokemonCard;
