import type { OverrideProps } from '@pilot/types/react';
import type { ElementType } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerTypeMap<P = {}, D extends ElementType = 'hr'> {
  defaultComponent: D;
  props: P & {
    /**
     * @default 'hr'
     */
    component?: ElementType;

    flexItem?: boolean;

    /**
     * @default 'horizontal'
     */
    orientation?: DividerOrientation;
  };
}

export type DividerProps<
  P = {},
  D extends ElementType = DividerTypeMap['defaultComponent'],
> = OverrideProps<DividerTypeMap<P, D>, D>;
