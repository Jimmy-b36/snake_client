const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    conn.write("Name: JAB");
    console.log("You have been connected!");
    // let delay = 0;
    // const a = setInterval(() => {
    //   if (delay === 5) clearInterval(a);
    //   conn.write("Move: down");
    //   delay++;
    // }, 50);
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
