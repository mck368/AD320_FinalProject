var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET friends page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'Friends Page'
  }

  res.render('friends', data);
});

/*display all contents of movie table from database*/
router.get('/api/all', function(req, res, next) {
  db.query("SELECT * FROM users", function (err, result, fields) {
    if (err) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

module.exports = router;