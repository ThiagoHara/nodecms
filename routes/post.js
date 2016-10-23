var express = require('express');
var router = express.Router();

/* make a POST. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Nova Postagem' });
});

module.exports = router;
