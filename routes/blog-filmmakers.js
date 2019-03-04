var express = require('express');
var router = express.Router();

/* GET Blog-filmakers page. */
router.get('/blog-filmmakers', function(req, res, next) {

  const data = {
    title: 'Blog: Film Makers'
  }

  res.render('blog-filmmakers', data);
});

module.exports = router;
