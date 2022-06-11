import { join, isAbsolute } from 'path';

export function pathProcessing(path) {
  const { currentDir } = process.env;

  if (isAbsolute(path)) {
    return path;
  }

  return join(currentDir, path);
}
