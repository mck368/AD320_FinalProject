var express = require('express');
var router = express.Router();
const db = require('../db');

var mysql = require('mysql');

/*display contents of users table from database*/
router.get('/', function(req, res,) {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      res.send(result);
    });
  });
});

/* GET users page - listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' })
  res.send('respond with a resource');
});

module.exports = router;
