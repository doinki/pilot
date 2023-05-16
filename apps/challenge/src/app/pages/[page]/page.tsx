import type { FC } from 'react';

import { PokemonList } from '@/components';

interface PageProps {
  params: { page: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const page = Number(params.page);

  // @ts-expect-error Async Server component
  return <PokemonList page={page - 1} />;
};

export default Page;
