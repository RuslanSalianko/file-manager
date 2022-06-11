import { homedir } from 'os';
import * as readline from 'readline';
import run from "./commands/index.mjs";
import exitMessage from "./message/exit.mjs";
import welcomeMessage from "./message/welcome.mjs";

function start() {
  const argv = process.argv.slice(2);
  const userName = argv[1].split('=')[1];
  welcomeMessage(userName);
  process.env.currentDir = homedir();
  process.stdout.write(`You are currently in ${process.env.currentDir}\n`);
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '-> '
  });
  

  rl.on('line', async function (line) {
    const command = line.split(' ');
    await run(command, { userName, rl });
    process.stdout.write(`You are currently in ${process.env.currentDir}\n`);
    
  })

  rl.on('SIGINT', () => {
    exitMessage(userName);
    rl.close();
  });
}

start();