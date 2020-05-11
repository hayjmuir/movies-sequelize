
var mysql2 = require("mysql2");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql2.createConnection(process.env.JAWSDB_URL);
 } else {
    connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Winnie5760!",
  database: "movies_db"
});
  };


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection