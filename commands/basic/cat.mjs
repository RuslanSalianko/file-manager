import { existsSync, readFileSync, statSync } from 'fs';
import { pathProcessing } from '../../utils/helpers.mjs';

async function cat(path) {
  try {
    const pathFileToRead = pathProcessing(path);

    if (await existsSync(pathFileToRead)) {
      const isFile = await statSync(pathFileToRead).isFile();

      if (isFile) {
        const textFile = await readFileSync(pathFileToRead, 'utf-8');
        process.stdout.write(textFile);
      } else {
        throw new Error('Error: this is a directory\n');
      }

    } else {
      throw new Error('Error: no such file  in directory\n');
    }
  } catch (error) {
    process.stderr.write(error.message);
  }
}

export default cat;
