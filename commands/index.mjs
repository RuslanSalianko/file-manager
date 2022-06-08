import exit from "./exit.mjs";

function run(command, data) {
  switch (command) {
    case '.exit':
      exit(data);
      break;
  
    default:
      process.stdout.write('Invalid input\n');
      break;
  }
}

export default run;
