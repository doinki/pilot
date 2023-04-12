import type { ClassNameValue } from '@pilot/types';

import type { DividerOrientation } from './dividerTypes';

const orientations = {
  horizontal: 'h-0 border-0 border-b',
  vertical: 'h-full w-0 border-0 border-r',
  'vertical-flexItem': 'h-auto self-stretch border-0 border-r',
} satisfies Record<DividerOrientation | 'vertical-flexItem', ClassNameValue>;

const dividerClasses = { orientations };

export default dividerClasses;
