'user strict';

var mysql = require('mysql');
var dbCred = require('../db.json');
var mc = mysql.createConnection(dbCred);

mc.connect(function(err) {
    if (err) throw err;
});

module.exports = mc;