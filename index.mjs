import * as readline from 'readline';
import run from "./commands/index.mjs";
import exitMessage from "./message/exit.mjs";
import welcome from "./utils/welcome.mjs";

function start() {
  const argv = process.argv.slice(2);
  const userName = argv[1].split('=')[1];
  welcome(userName);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', function (line) {
    run(line, {userName, rl});
  })
  
  rl.on('SIGINT', () => {
    exitMessage(userName);
    rl.close();
  });
}

start();