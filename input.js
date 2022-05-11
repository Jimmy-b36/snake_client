let connection;
const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("Thanks for playing!");
    process.exit();
  }
  if (data === "\u0077") {
    connection.write("Move: up");
  }
  if (data === "\u0061") {
    connection.write("Move: left");
  }
  if (data === "\u0073") {
    connection.write("Move: down");
  }
  if (data === "\u0064") {
    connection.write("Move: right");
  }
  if (data === "t") {
    connection.write("Say: yo wassup homies");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};
