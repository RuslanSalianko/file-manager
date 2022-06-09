import eol from "./eol.mjs";

function os(parameter) {
  switch (parameter) {
    case '--EOL':
      eol();
      break;
  
    default:
      break;
  }
}

export default os;
