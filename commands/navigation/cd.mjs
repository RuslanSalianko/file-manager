import path, { isAbsolute } from 'path';
import { existsSync } from 'fs';

async function cd(newPath) {
  try {
    const { currentDir } = process.env;
    let newDir;
    if (path.isAbsolute(newPath)) {
      newDir = newPath;
    } else {
      newDir = path.join(currentDir, newPath);
    }
    
    if (await existsSync(newDir)){
      process.env.currentDir = newDir;
    } else {
      throw new Error('Invalid directory path\n');
    }
  } catch (error) {
    process.stderr.write(error.message);
  }
}

export default cd;
