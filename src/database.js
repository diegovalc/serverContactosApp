const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 50,
    host: 'bctrt8a8oufpr5qmxlli-mysql.services.clever-cloud.com',
    user: 'uriql2prirsvyum4',
    password: 'MbVTYRSXrCXVy0NqDbkh',
    database: 'bctrt8a8oufpr5qmxlli'
})

/* pool.getConnection( function(err, connection){
    if (err) throw err;
    console.log('DB is Conected!');
}) */

module.exports = pool;