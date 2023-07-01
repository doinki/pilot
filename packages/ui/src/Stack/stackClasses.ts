import type { ClassNameValue } from '@pilot/types';

import type { StackDirection } from './stackTypes';

export const directions = {
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
} satisfies Record<StackDirection, ClassNameValue>;
