import { readFile } from 'fs/promises';
import type { GetStaticProps, NextPage } from 'next';

import { DrawerResult } from '@/components';
import { RandomNumbers } from '@/components/RandomNumbers';
import { defaultLotto } from '@/constants';
import type { Lottos } from '@/types';

interface HomeProps {
  lottos?: Lottos;
}

const Home: NextPage<HomeProps> = ({ lottos = {} }) => {
  const latestRound = Object.keys(lottos)
    .sort((a, b) => Number(a) - Number(b))
    .at(-1);
  const latestLotto = latestRound ? lottos[latestRound] : defaultLotto;

  return (
    <main className="grid h-screen place-content-center gap-6 p-4">
      <RandomNumbers />
      <DrawerResult {...latestLotto} />
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const lottos = JSON.parse(
      await readFile('public/lottos.json', 'utf-8')
    ) as Lottos;

    return { props: { lottos } };
  } catch {
    return { props: {} };
  }
};

export default Home;
