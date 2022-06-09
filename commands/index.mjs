import invalidMessage from "../message/invalid.mjs";
import exit from "./exit.mjs";
import up from "./navigation/up.mjs";
import os from "./os/index.mjs";

function run(command, data) {
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
    default:
      invalidMessage();
      break;
  }
}

export default run;
