import cpus from "./cpus.mjs";
import eol from "./eol.mjs";

function os(parameter) {
  switch (parameter) {
    case '--EOL':
      eol();
      break;
    case '--cpus':
      cpus();
    break;
    default:
      break;
  }
}

export default os;
