import '@testing-library/jest-dom';

import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';

const reactTestingLibrarySerializer: jest.SnapshotSerializerPlugin = {
  print: (val, serialize) =>
    serialize((val as RenderResult).container.firstChild),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  test: (val) => val && Object.prototype.hasOwnProperty.call(val, 'container'),
};

initStoryshots({
  snapshotSerializers: [reactTestingLibrarySerializer],
  test: multiSnapshotWithOptions({ renderer: render }),
});
