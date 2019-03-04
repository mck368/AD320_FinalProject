var express = require('express');
var router = express.Router();

/* GET Blog-filmakers page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Blog: Film Makers'
  }

  res.render('blog_filmmakers', data);
});

module.exports = router;
