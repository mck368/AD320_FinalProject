var express = require('express');
var router = express.Router();

/* GET friends page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'Friends Page'
  }

  res.render('friends', data);
});

module.exports = router;