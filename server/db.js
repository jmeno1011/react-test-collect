const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "0000",
  database: "opentutorials",
});

module.exports = db;
