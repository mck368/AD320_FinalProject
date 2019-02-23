var express = require('express');
var router = express.Router();

/* GET BLog-vhs page. */
router.get('/blog-vhs', function(req, res, next) {

  const data = {
    title: 'Blog: VHS'
  }

  res.render('blog-vhs', data);
});

module.exports = router;
