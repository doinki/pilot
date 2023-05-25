import { Divider } from '@pilot/ui';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { PokemonAPI } from '@/api';
import type { DictionaryPokemonKey, Locale } from '@/types';
import { getDictionary } from '@/utils';

interface PageProps {
  params: { lang: Locale; name: string };
}

const Page = async ({ params: { lang, name } }: PageProps) => {
  const [pokemon, encodedImage, dictionary] = await Promise.all([
    PokemonAPI.getPokemon(),
    PokemonAPI.getBase64EncodedPokemonImageByName(name),
    getDictionary(lang),
  ]);

  const targetPokemon = pokemon.find((p) => p.name === name);

  if (!targetPokemon || !dictionary) {
    notFound();
  }

  const pokemonName =
    dictionary.pokemon[targetPokemon.id as unknown as DictionaryPokemonKey]
      .name;

  return (
    <main className="prose prose-neutral dark:prose-invert sm:prose-sm lg:prose-lg">
      <section
        className="not-prose aspect-h-1 aspect-w-1 w-full rounded-md"
        style={{ backgroundImage: `url(${encodedImage})` }}
      >
        <figure className="absolute left-1/2 top-1/2 max-h-[475px] max-w-[475px] -translate-x-1/2 -translate-y-1/2">
          <Image
            alt={pokemonName}
            sizes="475px"
            src={`/images/${name}.png`}
            fill
          />
        </figure>
      </section>
      <Divider className="!my-4 lg:!my-8" />
      <header className="flex px-4">
        <h1>{pokemonName}</h1>
      </header>
    </main>
  );
};

export default Page;
