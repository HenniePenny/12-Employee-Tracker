const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "123HmachtnunServer!*",
    database: "employee_db",
  },
  console.log(`Connected to employee_db database.`)
);

module.exports = db;
