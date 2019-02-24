var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  
  const data = {
    title: 'Blog Page'
  }

  res.render('blog', data);
});

module.exports = router;