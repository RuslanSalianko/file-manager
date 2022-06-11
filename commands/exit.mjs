import exitMessage from "../message/exit.mjs";

function exit({userName, rl}) {
  exitMessage(userName);
  rl.close();
}

export default exit;
