import { renameSync } from 'fs';
import { pathProcessing } from '../../utils/helpers.mjs';

async function rn(pathFile, name) {
  try {
    const path = pathProcessing(pathFile);
    const newPath = `${path.split('/').slice(0, -1).join('/')}/${newName}`;

    await renameSync(path, newPath);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  }
}

export default rn;
