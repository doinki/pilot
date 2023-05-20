import { Divider, Stack } from '@pilot/ui';
import type { FC, ReactNode } from 'react';

const PokemonList: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Stack
      component="ul"
      divider={
        <li aria-hidden>
          <Divider />
        </li>
      }
    >
      {children}
    </Stack>
  );
};

export default PokemonList;
