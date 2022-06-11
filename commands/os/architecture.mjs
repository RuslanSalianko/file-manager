import { arch } from 'os';

function architecture() {
  process.stdout.write(`${arch()}\n`);
}

export default architecture;
