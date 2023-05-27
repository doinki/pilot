import type { Metadata, Route } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

import { PokemonAPI } from '@/api';
import { PokemonCard } from '@/components/PokemonCard';
import { PokemonList } from '@/components/PokemonList';
import type { Locale } from '@/types';

export const generateMetadata = ({ params: { page } }: PageProps): Metadata => {
  return {
    alternates: {
      languages: {
        en: new URL(`/en/pages/${page}`, process.env.URL).href,
        ko: new URL(`/ko/pages/${page}`, process.env.URL).href,
      },
    },
  };
};

export const generateStaticParams = async () => {
  return Array.from({ length: 8 }).map((_, index) => ({
    page: (index + 1).toString(),
  }));
};

const LIMIT = 20;

interface PageProps {
  params: { lang: Locale; page: string };
}

/* @ts-expect-error Async Server component */
const PokemonCardSkeleton = <PokemonCard loading />;

const Page = async ({ params }: PageProps) => {
  const page = Number(params.page);
  const offset = (page - 1) * LIMIT;
  const pokemon = await PokemonAPI.getPokemon();

  return (
    <main>
      <PokemonList>
        {pokemon.slice(offset, offset + LIMIT).map((_, index) => {
          const { id, name } = pokemon[offset + index];

          if (id > 151) return null;

          return (
            <li key={name}>
              <Link
                className="tap-highlight-transparent"
                href={`/${params.lang}/pokemon/${name}` as Route}
              >
                <Suspense fallback={PokemonCardSkeleton}>
                  {/* @ts-expect-error Async Server component */}
                  <PokemonCard id={id} lang={params.lang} name={name} />
                </Suspense>
              </Link>
            </li>
          );
        })}
      </PokemonList>
    </main>
  );
};

export default Page;
