var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Contact Us'
  }

  res.render('contact', data);
});

module.exports = router;
