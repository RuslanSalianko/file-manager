import { rmSync } from 'fs';
import { pathProcessing } from "../../utils/helpers.mjs";

async function rm(pathFile) {
  try {
    const path = pathProcessing(pathFile);
    await rmSync(path);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  }

}

export default rm;
