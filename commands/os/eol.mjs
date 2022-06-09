import { EOL } from 'os';

function eol() {
  process.stdout.write(`${JSON.stringify(EOL)}\n`)
}

export default eol;
