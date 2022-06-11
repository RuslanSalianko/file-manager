import { open } from 'fs/promises';
import { pathProcessing } from '../utils/helpers.mjs';

async function hash(pathFile) {
  let file;
  try {
    const path = pathProcessing(pathFile);
    const { createHash } = await import('crypto');
    const hash = createHash('sha256');
    file = await open(path);
    const fileContent = await file.readFile('utf-8');
    const hashFile = await hash.update(fileContent).digest('hex');

    process.stdout.write(`${hashFile}\n`);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  } finally {
    await file?.close();
  }
}

export default hash;
