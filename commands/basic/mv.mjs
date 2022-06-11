import { renameSync } from 'fs';
import { pathProcessing } from '../../utils/helpers.mjs';

async function mv(pathFile, newName) {
  try {
    const path = pathProcessing(pathFile);
    const newPath = pathProcessing(newName);

    await renameSync(path, newPath);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  }
}

export default mv;
