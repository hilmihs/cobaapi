var express = require('express');
var router = express.Router();

module.exports = function (db) {
  router.get('/', function (req, res, next) {
    const collection = db.collection('documents');
    res.render('index', { title: 'Express' });
  });

  return router;
}
