import { Skeleton } from '@pilot/ui';
import Image from 'next/image';

import { PokemonAPI } from '@/api';
import type { DictionaryPokemonKey, Locale } from '@/types';
import { getDictionary } from '@/utils';

const PokemonCard = async ({
  id,
  lang = 'ko',
  loading,
  name,
}: {
  id: number;
  lang?: Locale;
  loading?: boolean;
  name: string;
}) => {
  const [encodedImage, dictionary] = loading
    ? []
    : await Promise.all([
        PokemonAPI.getBase64EncodedPokemonImageByName(name),
        getDictionary(lang),
      ]);

  const pokemonName = loading
    ? ''
    : dictionary!.pokemon[id as unknown as DictionaryPokemonKey].name;

  return (
    <article className="flex gap-6 p-4">
      <div className="w-1/2 shrink-0">
        <div
          className="aspect-h-1 aspect-w-1"
          style={{
            backgroundImage: encodedImage ? `url(${encodedImage})` : undefined,
          }}
        >
          {loading ? (
            <Skeleton height="100%" variant="rounded" width="100%" />
          ) : (
            <Image
              alt={pokemonName}
              className="rounded-md transition-transform hover:scale-105"
              quality={100}
              sizes="475px"
              src={`/images/${name}.png`}
              fill
            />
          )}
        </div>
      </div>
      <section className="prose prose-neutral flex-1 dark:prose-invert lg:prose-xl">
        <i>
          {loading ? (
            <Skeleton width={64} />
          ) : (
            `#${String(id).padStart(3, '0')}`
          )}
        </i>
        <header>
          <h2 className="break-all">
            {loading ? <Skeleton width="calc(min(50%, 120px))" /> : pokemonName}
          </h2>
        </header>
      </section>
    </article>
  );
};

export default PokemonCard;
