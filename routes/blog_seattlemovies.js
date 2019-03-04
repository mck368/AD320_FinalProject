var express = require('express');
var router = express.Router();

/* GET Blog-SeattleMovies page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Blog: Movies Located In Seattle'
  }

  res.render('blog_seattlemovies', data);
});

module.exports = router;
