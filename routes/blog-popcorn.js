var express = require('express');
var router = express.Router();

/* GET blog-popcorn page. */
router.get('/blog-popcorn', function(req, res, next) {

  const data = {
    title: 'Blog: Popcorn'
  }

  res.render('blog-popcorn', data);
});

module.exports = router;
