var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user= 'caleb';
  res.render('index', { title: 'Express', thing: 'Hello', user: user });
});

module.exports = router;
