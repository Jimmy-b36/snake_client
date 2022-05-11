const { conn } = require("./client");

const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("Thanks for playing!");
    process.exit();
  }
  if (data === "\u0077") {
    conn.write("Move: up");
  }
  if (data === "\u0061") {
    conn.write("Move: left");
  }
  if (data === "\u0073") {
    conn.write("Move: down");
  }
  if (data === "\u0064") {
    conn.write("Move: right");
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
