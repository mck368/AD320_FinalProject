var express = require('express');
var router = express.Router();

/* GET personal user page. */
router.get('/user-profile', function(req, res, next) {

  const data = {
    title: 'My Profile'
  }
  res.render('index', data);
});

module.exports = router;
