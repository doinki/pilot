import type { ClassNameValue } from '@pilot/types';

import type { DividerOrientation } from './dividerTypes';

const orientations: Record<DividerOrientation, () => ClassNameValue> = {
  horizontal: () => 'h-0 w-auto border-0 border-b',
  vertical: () => 'h-full w-0 border-0 border-r',
};

const dividerClasses = { orientations };

export default dividerClasses;
