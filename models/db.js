'user strict';

var mysql = require('mysql');

// connection config
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ilovemovies'
});

mc.connect(function(err) {
    if (err) throw err;
});

module.exports = mc;