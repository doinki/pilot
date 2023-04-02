import { readFile } from 'fs/promises';
import type { GetStaticProps, NextPage } from 'next';

import { defaultLotto } from '@/constants';
import type { Lottos } from '@/types';

interface HomeProps {
  lottos?: Lottos;
}

const Home: NextPage<HomeProps> = ({ lottos = {} }) => {
  const latestRound = Object.keys(lottos)
    .sort((a, b) => Number(a) - Number(b))
    .at(-1);
  const { round, winningNumbers } = latestRound
    ? lottos[latestRound]
    : defaultLotto;

  return (
    <main className="grid h-screen place-content-center gap-6">
      <h1 className="text-center text-4xl">{round || '-'}회 당첨번호</h1>
      <strong className="block space-x-6 text-center">
        {winningNumbers.map((number, index) => (
          <span
            key={number}
            className={
              index === winningNumbers.length - 1 ? 'text-blue-500' : undefined
            }
          >
            {number || '-'}
          </span>
        ))}
      </strong>
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
