import { createUnzip as createBrotliDecompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { basename } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { pathProcessing } from '../utils/helpers.mjs';

async function decompress(pathFile, pathDestination) {
  try {
    const pathToFile = pathProcessing(pathFile);
    const nameFile = basename(pathToFile).slice(0, -3);
    const pathToDestination = pathProcessing(pathDestination);
    const decompresses = createBrotliDecompress();
    const pipe = promisify(pipeline);

    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(`${pathToDestination}/${nameFile}`);

    await pipe(readStream, decompresses, writeStream);

  } catch (error) {
    process.stderr.write('Operation failed\n');
  }
}

export default decompress;
