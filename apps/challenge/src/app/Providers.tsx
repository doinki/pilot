'use client';

import { useExperimentalScrollRestoration } from '@pilot/hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';

const Providers: FC<{ children?: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  useExperimentalScrollRestoration();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
