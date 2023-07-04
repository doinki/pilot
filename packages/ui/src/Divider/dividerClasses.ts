import type { ClassNameValue } from '@pilot/types/react';

import type { DividerOrientation } from './dividerTypes';

export const orientations = {
  horizontal: 'h-0 border-0 border-b',
  vertical: 'h-full w-0 border-0 border-r',
  'vertical-flexItem': 'h-auto self-stretch border-0 border-r',
} satisfies Record<DividerOrientation | 'vertical-flexItem', ClassNameValue>;
