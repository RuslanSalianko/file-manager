import exit from "./exit.mjs";
import os from "./os/index.mjs";

function run(command, data) {
  switch (command[0]) {
    case '.exit':
      exit(data);
      break;
    case 'os':
      os(command[1])
      break;
    default:
      process.stdout.write('Invalid input\n');
      break;
  }
}

export default run;
