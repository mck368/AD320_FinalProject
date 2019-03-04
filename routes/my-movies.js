var express = require('express');
var router = express.Router();

/* GET movies page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'My movies'
  }

  res.render('my movies', data);
});

module.exports = router;