var db = require('mysql');
var dbCred = require('../db_creds.json');
var connection = db.createConnection(dbCred);

/*
 *Remember to make a db_creds.json file in the ../ directory
 *The file should look like this:
 {
  "host"      : "localhost",
  "user"      : "root",
  "password"  : "root",
  "database"  : "ilovemovies"
  }
  *obviously, the password will be different on each computer
*/

module.exports = connection;
