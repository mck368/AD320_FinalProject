var express = require('express');
var router = express.Router();
var mc = require('../models/db');

/* GET movies page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'Movies Page'
  }

  res.render('movies', data);
});

/*display contents of movie table from database*/
router.get('/', function(req, res, next) {
  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM movieInfo", function (err, result, fields) {
      if (err) throw err;
      res.send(result);
    });
  });
});

module.exports = router;