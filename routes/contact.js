var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET contact page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'Contact Us'
  }
  res.render('contact', data);
  res.render('contact', {qs: req.query});
});

router.post('/', urlencodedParser, function(req, res, next) {
  console.log(req.body);
  const data = {
    title: 'Contact Us'
  }

  res.render('contact', data);
  res.render('thanks', {qs: req.query});
});

module.exports = router;
