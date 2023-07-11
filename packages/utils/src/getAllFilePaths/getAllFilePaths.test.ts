import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import getAllFilePaths from './getAllFilePaths';

const currentDirectory = fileURLToPath(dirname(import.meta.url));

describe('getAllFilePaths', () => {
  test.each(Array.from(getAllFilePaths(join(currentDirectory, '..'))))(
    '%s ends with .ts',
    (path) => {
      expect(path.endsWith('.ts')).toBe(true);
    },
  );
});
