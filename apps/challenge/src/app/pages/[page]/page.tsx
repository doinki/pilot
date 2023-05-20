import { Suspense } from 'react';

import { PokemonCard } from '@/components/PokemonCard';
import { PokemonList } from '@/components/PokemonList';

const LIMIT = 20;

interface PageProps {
  params: { page: string };
}

/* @ts-expect-error Async Server component */
const PokemonCardSkeleton = <PokemonCard id={0} loading />;

const Page = async ({ params }: PageProps) => {
  const page = Number(params.page);

  return (
    <PokemonList>
      {Array.from({ length: LIMIT }).map((_, index) => {
        const id = (page - 1) * LIMIT + index + 1;

        if (id > 151) return null;

        return (
          <li key={id}>
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

export async function generateStaticParams() {
  return Array.from({ length: 8 }).map((_, index) => ({
    page: (index + 1).toString(),
  }));
}

export default Page;
