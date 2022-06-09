import { existsSync, readFileSync, statSync } from 'fs';

async function cat(file, rl) {
  try {
    const { currentDir } = process.env;
    const pathFileToRead = `${currentDir}/${file}`;

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
