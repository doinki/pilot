import Link from 'next/link';
import type { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

import { PokemonAPI } from '@/api';

interface LayoutProps {
  children?: ReactNode;
  params: { page: string };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const page = Number(params.page);

  if (Number.isNaN(page) || page < 1) {
    throw new Error('Invalid page number');
  }

  const pokemon = await PokemonAPI.getPokemon(page - 1);

  if (pokemon.results.length === 0) {
    throw new Error('Invalid page number');
  }

  const isMinPage = pokemon.previous === null;
  const isMaxPage = pokemon.next === null;

  return (
    <main className="mx-auto max-w-screen-sm">
      {children}
      <section className="flex justify-between pb-24 pt-16">
        <Link
          aria-disabled={isMinPage}
          className={twJoin(
            'rounded-md border px-4 py-2 transition',
            isMinPage
              ? 'pointer-events-none cursor-not-allowed border-gray-300 text-gray-300'
              : 'border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-105'
          )}
          href={{
            pathname: isMinPage
              ? null
              : `/pages/${encodeURIComponent(page - 1)}`,
          }}
          prefetch={!isMinPage}
        >
          Prev
        </Link>
        <Link
          aria-disabled={isMaxPage}
          className={twJoin(
            'rounded-md border px-4 py-2 transition',
            isMaxPage
              ? 'pointer-events-none cursor-not-allowed border-gray-300 text-gray-300'
              : 'border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-105'
          )}
          href={{
            pathname: isMaxPage
              ? null
              : `/pages/${encodeURIComponent(page + 1)}`,
          }}
          prefetch={!isMaxPage}
        >
          Next
        </Link>
      </section>
    </main>
  );
};

export default Layout;
