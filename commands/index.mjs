import exit from "./exit.mjs";

function run(command, data) {
  switch (command) {
    case '.exit':
      exit(data);
      break;
  
    default:
      break;
  }
}

export default run;
