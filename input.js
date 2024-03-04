let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Quitting game");
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
    console.log("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
    console.log("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
    console.log("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
    console.log("Move: right");
  }
  if (key === '1') {
    connection.write("Say: I'm gonna win!");
  }
  if (key === '2') {
    connection.write("Say: I gotta catch up!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput, handleUserInput };

