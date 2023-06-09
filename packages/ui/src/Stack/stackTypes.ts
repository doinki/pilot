import type { OverrideProps } from '@pilot/types/react';
import type { ElementType, ReactElement } from 'react';

export type StackDirection =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export interface StackTypeMap<P = {}, D extends ElementType = 'div'> {
  defaultComponent: D;
  props: P & {
    /**
     * @default 'div'
     */
    component?: ElementType;

    /**
     * @default 'column'
     */
    direction?: StackDirection;

    divider?: ReactElement;
  };
}

export type StackProps<
  P = {},
  D extends ElementType = StackTypeMap['defaultComponent'],
> = OverrideProps<StackTypeMap<P, D>, D>;
