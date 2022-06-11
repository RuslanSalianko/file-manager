import { appendFileSync, existsSync } from 'fs';
import path from 'path';

async function add(name) {
  try {
    const { currentDir } = process.env;
    const pathFile = path.join(currentDir, name);

    if (!(await existsSync(pathFile))) {
      await appendFileSync(pathFile, '');
    } else {
      throw new Error('Error: file exists in directory\n');
    }
  } catch (error) {
    process.stderr.write(error.message);
  }
}

export default add;
