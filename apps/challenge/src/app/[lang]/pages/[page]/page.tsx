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
      canonical: new URL(`/pages/${page}`, process.env.URL).href,
      languages: { en: `/en/pages/${page}`, ko: `/ko/pages/${page}` },
    },
  };
};

const LIMIT = 20;

interface PageProps {
  params: { lang: Locale; page: string };
}

/* @ts-expect-error Async Server component */
const PokemonCardSkeleton = <PokemonCard id={0} loading />;

const Page = async ({ params }: PageProps) => {
  const page = Number(params.page);
  const pokemon = await PokemonAPI.getPokemon();
  const offset = (page - 1) * LIMIT;

  return (
    <main>
      <PokemonList>
        {pokemon.slice(offset, offset + LIMIT).map((_, index) => {
          const { id, name } = pokemon[offset + index];

          if (id > 151) return null;

          return (
            <li key={name}>
              <Link href={`/pokemon/${name}` as Route}>
                <Suspense fallback={PokemonCardSkeleton}>
                  {/* @ts-expect-error Async Server component */}
                  <PokemonCard id={id} lang={params.lang} />
                </Suspense>
              </Link>
            </li>
          );
        })}
      </PokemonList>
    </main>
  );
};

export async function generateStaticParams() {
  return Array.from({ length: 8 }).map((_, index) => ({
    page: (index + 1).toString(),
  }));
}

export default Page;
