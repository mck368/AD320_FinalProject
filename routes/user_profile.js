var express = require('express');
var router = express.Router();

/* GET personal user page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'My Profile'
  }
  res.render('user_profile', data);
});

module.exports = router;
