var express = require('express');
var router = express.Router();

/* GET blog-popcorn page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Blog: Popcorn'
  }

  res.render('blog_popcorn', data);
});

module.exports = router;
