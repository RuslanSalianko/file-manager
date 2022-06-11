import path from 'path';

function up() {
  const { currentDir } = process.env;
  process.env.currentDir = path.join(currentDir, '..');
}

export default up;
