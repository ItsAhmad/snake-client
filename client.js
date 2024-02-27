const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.20.10.2',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("connect", () => {
    console.log("Connection to server established");

    conn.write("Name: ABA");
  });

  return conn;
};

module.exports = connect;

