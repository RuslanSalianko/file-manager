import {homedir as home} from 'os';

function homedir() {
  process.stdout.write(`${home()}\n`);
}

export default homedir;
