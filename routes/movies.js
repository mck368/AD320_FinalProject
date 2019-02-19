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

/* GET movies page. */
router.get('/', function(req, res, next) {
  res.render('movies', { title: 'Movies' });
});

/*display contents of movie table from database*/

  connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM movieInfo", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });



module.exports = router;
