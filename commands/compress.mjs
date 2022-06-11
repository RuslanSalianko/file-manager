import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import { basename } from 'path';
import { promisify } from 'util';
import { pathProcessing } from '../utils/helpers.mjs';

async function compress(pathFile, pathDestination) {
  try {
    const pathToFile = pathProcessing(pathFile);
    const nameFile = basename(pathToFile);
    const pathToDestination = pathProcessing(pathDestination);
    const compresses = createGzip();
    const pipe = promisify(pipeline);
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(
      `${pathToDestination}/${nameFile}.gz`
    );

    await pipe(readStream, compresses, writeStream);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  }
}

export default compress;
