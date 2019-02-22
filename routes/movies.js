var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET movies page.*/
router.get('/', function(req, res, next) {
  res.render('movies', { title: 'Movies' });
});

//connect to database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'iLoveMovies'
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
