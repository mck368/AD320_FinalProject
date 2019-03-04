var express = require('express');
var router = express.Router();

/* GET my friends page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'My friends'
  }

  res.render('my friends', data);
});

module.exports = router;