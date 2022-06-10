import { existsSync } from 'fs';
import { pathProcessing } from '../../utils/helpers.mjs';

async function cd(newPath) {
  try {

    const path = pathProcessing(newPath);
    
    if (await existsSync(path)){
      process.env.currentDir = path;
    } else {
      throw new Error('Invalid directory path\n');
    }
  } catch (error) {
    process.stderr.write(error.message);
  }
}

export default cd;
