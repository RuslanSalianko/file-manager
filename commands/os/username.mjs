import { userInfo } from 'os';

function username() {
  const name = userInfo().username;

  process.stdout.write(`${name}\n`);
}

export default username;
