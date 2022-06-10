import { copyFileSync, constants } from 'fs';
import { pathProcessing } from "../../utils/helpers.mjs";

async function cp(pathFile, newPathFile) {
  try {
    const path = pathProcessing(pathFile);
    const newPath = pathProcessing(newPathFile);

    await copyFileSync(path, newPath, constants.COPYFILE_EXCL);
  } catch (error) {
    process.stderr.write('Operation failed\n');
  }
}

export default cp;
