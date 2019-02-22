var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'About Page'
  }

  res.render('about', data);
});

module.exports = router;