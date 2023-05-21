import type { FC } from 'react';

import type { Locale } from '@/types';

interface PageProps {
  params: { lang: Locale; name: string };
}

const Page: FC<PageProps> = ({ params: { name } }) => {
  return <main>{name}</main>;
};

export default Page;
