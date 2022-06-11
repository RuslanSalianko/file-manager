import { createBrotliCompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import { basename } from 'path';
import { promisify } from 'util';
import { pathProcessing } from '../utils/helpers.mjs';

async function compress(pathFile, pathDestination) {
  const pathToFile = pathProcessing(pathFile);
    const nameFile = basename(pathToFile);
    const pathToDestination = pathProcessing(pathDestination);
    const brotli = createBrotliCompress();
    const pipe = promisify(pipeline);
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(
      `${pathToDestination}/${nameFile}.br`
    );
  try {
    

    await pipe(readStream, brotli, writeStream);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  }
}

export default compress;
