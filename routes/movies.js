var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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

/* GET movies page.*/
router.get('/', function(req, ress, next) {
  ress.render('movies', { title: 'Movies' });
});


module.exports = router;