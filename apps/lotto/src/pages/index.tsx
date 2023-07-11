import { readFile } from 'fs/promises';
import type { GetStaticProps, NextPage } from 'next';

import { DrawerResult } from '@/components';
import { RandomNumbers } from '@/components/RandomNumbers';
import { defaultLotto } from '@/constants';
import type { Lottos } from '@/types';

interface HomeProps {
  lottos?: Lottos;
  ranking?: Record<number, number>;
}

const Home: NextPage<HomeProps> = ({ lottos = {}, ranking = {} }) => {
  const latestRound = Object.keys(lottos)
    .sort((a, b) => Number(a) - Number(b))
    .at(-1);
  const latestLotto = latestRound ? lottos[latestRound] : defaultLotto;

  return (
    <main className="grid min-h-screen place-content-center gap-6 p-4">
      <RandomNumbers />
      <DrawerResult {...latestLotto} />
      <table>
        <thead>
          <tr className="child:text-start">
            <th>번호</th>
            <th>당첨 횟수</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(ranking).map(([number, count]) => (
            <tr key={number}>
              <td>{number}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const lottos = JSON.parse(
      await readFile('public/lottos.json', 'utf-8'),
    ) as Lottos;

    const ranking = Object.values(lottos).reduce(
      (ranking, { winningNumbers }) => {
        winningNumbers.slice(0, -1).forEach((number) => {
          if (ranking.has(number)) {
            ranking.set(number, ranking.get(number)! + 1);
          } else {
            ranking.set(number, 1);
          }
        });

        return ranking;
      },
      new Map<number, number>(),
    );

    return { props: { lottos, ranking: Object.fromEntries(ranking) } };
  } catch {
    return { props: {} };
  }
};

export default Home;
