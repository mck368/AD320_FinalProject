var express = require('express');
var router = express.Router();

/* GET users page - listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' })
  res.send('respond with a resource');
});

module.exports = router;
