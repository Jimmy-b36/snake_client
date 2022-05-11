const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("You have been connected!");
  });
  conn.on("disconnect", () => {
    console.log("You ded");
  });
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {
  connect,
};
