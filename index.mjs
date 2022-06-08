import welcome from "./utils/welcome.mjs";

function start() {
  const argv = process.argv.slice(2);
  const userName = argv[1].split('=')[1];
  welcome(userName);

}

start();