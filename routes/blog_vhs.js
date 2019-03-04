var express = require('express');
var router = express.Router();

/* GET BLog-vhs page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Blog: VHS'
  }

  res.render('blog_vhs', data);
});

module.exports = router;
