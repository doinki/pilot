import { Skeleton } from '@pilot/ui';
import Image from 'next/image';

import { PokemonAPI } from '@/api';
import type { DictionaryPokemonKey, Locale } from '@/types';
import { getDictionary } from '@/utils';

const PokemonCard = async ({
  id,
  lang = 'ko',
  loading,
}: {
  id: number;
  lang?: Locale;
  loading?: boolean;
}) => {
  const [pokemon, encodedImage, dictionary] = loading
    ? []
    : await Promise.all([
        PokemonAPI.getPokemonById(id),
        PokemonAPI.getBase64EncodedPokemonImageById(id),
        getDictionary(lang),
      ]);

  return (
    <article className="flex gap-6 p-4">
      <div className="w-1/2 shrink-0">
        <div className="aspect-h-1 aspect-w-1">
          {!pokemon ? (
            <Skeleton height="100%" variant="rounded" width="100%" />
          ) : (
            <Image
              alt={
                dictionary!.pokemon[id as unknown as DictionaryPokemonKey].name
              }
              className="rounded-md"
              sizes="475px"
              src={`/images/${pokemon.name}.png`}
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
      <section className="prose prose-neutral flex-1 dark:prose-invert lg:prose-xl">
        <i>
          {!pokemon ? (
            <Skeleton width={64} />
          ) : (
            `#${String(pokemon.id).padStart(3, '0')}`
          )}
        </i>
        <header>
          <h2 className="break-all">
            {!pokemon ? (
              <Skeleton width="calc(min(50%, 120px))" />
            ) : (
              dictionary!.pokemon[id as unknown as DictionaryPokemonKey].name
            )}
          </h2>
        </header>
      </section>
    </article>
  );
};

export default PokemonCard;
