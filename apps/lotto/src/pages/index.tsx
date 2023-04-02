import { readFile } from 'fs/promises';
import type { GetStaticProps, NextPage } from 'next';

import { defaultLotto } from '@/constants';
import type { Lotto } from '@/types';

interface HomeProps {
  lotto?: Record<string, Lotto>;
}

const Home: NextPage<HomeProps> = ({ lotto = {} }) => {
  const latestRound = Object.keys(lotto)
    .sort((a, b) => Number(a) - Number(b))
    .at(-1);
  const { round, winningNumbers } = latestRound
    ? lotto[latestRound]
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
    const lotto = JSON.parse(
      await readFile('public/lotto.json', 'utf-8')
    ) as Record<string, Lotto>;

    return { props: { lotto } };
  } catch {
    return { props: {} };
  }
};

export default Home;
