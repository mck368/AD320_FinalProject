var express = require('express');
var router = express.Router();

/* GET Blog-filmakers page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Blog Page'
  }

  res.render('blog', data);
});

router.get('/filmmakers', function(req, res, next) {

  const data = {
    title: 'Blog: Film Makers'
  }

  res.render('blog', data);
});

router.get('/vhs', function(req, res, next) {

  const data = {
    title: 'Blog: VHS'
  }

  res.render('blog', data);
});

router.get('/seattle_movies', function(req, res, next) {

  const data = {
    title: 'Blog: Movies Located In Seattle'
  }

  res.render('blog', data);
});

router.get('/popcorn', function(req, res, next) {

  const data = {
    title: 'Blog: Popcorn'
  }

  res.render('blog', data);
});

module.exports = router;
