var express = require('express');
var router = express.Router();

/* GET Blog-SeattleMovies page. */
router.get('/blog-seattlemovies', function(req, res, next) {

  const data = {
    title: 'Blog: Movies Located In Seattle'
  }

  res.render('blog-seattlemovies', data);
});

module.exports = router;
