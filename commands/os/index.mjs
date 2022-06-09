import architecture from "./architecture.mjs";
import cpus from "./cpus.mjs";
import eol from "./eol.mjs";
import homedir from "./homedir.mjs";
import username from "./username.mjs";

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
    case '--username':
      username();
      break;
    case '--architecture':
      architecture();
      break;
    default:
      break;
  }
}

export default os;
