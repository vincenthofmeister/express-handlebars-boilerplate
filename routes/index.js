var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { layout: 'default', title: 'Express Template' });
});

module.exports = router;
