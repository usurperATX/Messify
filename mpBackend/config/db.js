const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "atxrocks7",
    database:"messify",
});

module.exports = mySqlPool;
