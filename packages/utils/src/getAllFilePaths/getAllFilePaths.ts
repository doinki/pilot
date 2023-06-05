import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

function* getAllFilePaths(path: string): IterableIterator<string> {
  const dirents = readdirSync(path, { withFileTypes: true });

  for (let i = 0; i < dirents.length; i += 1) {
    const dirent = dirents[i];

    if (dirent.isDirectory()) {
      yield* getAllFilePaths(resolve(path, dirent.name));
    } else {
      yield resolve(path, dirent.name);
    }
  }
}

export default getAllFilePaths;
