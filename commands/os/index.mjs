import cpus from "./cpus.mjs";
import eol from "./eol.mjs";
import homedir from "./homedir.mjs";

function os(parameter) {
  switch (parameter) {
    case '--EOL':
      eol();
      break;
    case '--cpus':
      cpus();
    break;
    case '--homedir':
      homedir();
      break;
    default:
      break;
  }
}

export default os;
