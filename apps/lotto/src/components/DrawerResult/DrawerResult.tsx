import type { FC } from 'react';
import { memo } from 'react';

import type { DrawerResultProps } from './drawerResultTypes';

const DrawerResult: FC<DrawerResultProps> = (props) => {
  const { round, winningNumbers } = props;

  return (
    <article className="space-y-6">
      <h2 className="text-center text-4xl">{round || '-'}회 당첨번호</h2>
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
    </article>
  );
};

export default memo(DrawerResult);
