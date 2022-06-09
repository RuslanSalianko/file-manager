import invalidMessage from "../message/invalid.mjs";
import cat from "./basic/cat.mjs";
import exit from "./exit.mjs";
import cd from "./navigation/cd.mjs";
import ls from "./navigation/ls.mjs";
import up from "./navigation/up.mjs";
import os from "./os/index.mjs";

async function run(command, data) {
  switch (command[0]) {
    case '.exit':
      exit(data);
      break;
    case 'os':
      os(command[1])
      break;
    case 'up':
      up();
      break;
    case 'ls':
      await ls();
      break;
    case 'cd':
      await cd(command[1]);
      break;
    case 'cat':
      await cat(command[1], data.rl);
      break;
    default:
      invalidMessage();
      break;
  }
}

export default run;
