import type { FC } from 'react';
import { memo } from 'react';

import type { DrawerResultProps } from './drawerResultTypes';

const DrawerResult: FC<DrawerResultProps> = (props) => {
  const { round, winningNumbers } = props;

  return (
    <article className="space-y-4 border p-4">
      <h2 className="text-2xl">{round || '-'}회 당첨번호</h2>
      <strong className="flex flex-wrap gap-4">
        {winningNumbers.map((number, index) => (
          <span
            key={number}
            className={`inline-flex h-16 w-16 items-center justify-center rounded-full border ${
              index === winningNumbers.length - 1 ? 'text-blue-500' : ''
            }`}
          >
            {number || '-'}
          </span>
        ))}
      </strong>
    </article>
  );
};

export default memo(DrawerResult);
