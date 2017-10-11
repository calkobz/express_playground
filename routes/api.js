var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.get('/message', function(req, res, next) {
  res.send('latitude: ' + req.query.latitude)
  res.send('longitude: ' + req.query.longitude)
  res.send('range: ' + req.query.range)
});

router.post('/message', jsonParser, function(req, res, next) {
  res.send('latitude: ' + req.body.latitude)
});
module.exports = router;
