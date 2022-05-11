let connection;
let interval;
let speed = 1000;
const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("Thanks for playing!");
    process.exit();
  }
  clearInterval(interval);
  if (data === "1") {
    speed = 500;
  }
  if (data === "2") {
    speed = 250;
  }
  if (data === "3") {
    speed = 100;
  }

  if (data === "w") {
    interval = setInterval(() => {
      connection.write("Move: up");
    }, speed);
  }
  if (data === "a") {
    interval = setInterval(() => {
      connection.write("Move: left");
    }, speed);
  }
  if (data === "s") {
    interval = setInterval(() => {
      connection.write("Move: down");
    }, speed);
  }
  if (data === "d") {
    interval = setInterval(() => {
      connection.write("Move: right");
    }, speed);
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
