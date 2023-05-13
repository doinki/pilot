'use client';

import { useExperimentalScrollRestoration } from '@pilot/hooks';
import type { FC, ReactNode } from 'react';

const Providers: FC<{ children?: ReactNode }> = ({ children }) => {
  useExperimentalScrollRestoration();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default Providers;
