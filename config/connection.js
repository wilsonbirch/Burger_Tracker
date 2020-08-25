// connection.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "3Strong13!",
    database: "burgers_db"
});
  
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return; 
    };
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;