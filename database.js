const mysql = require('mysql2');


const connection = mysql.createPool({
    host: 'localhost',
    user: 'valkib',
    password: 'porkkana',
    database: 'test_db'
});

module.exports = connection;

