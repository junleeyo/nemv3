var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send({msg:'hello', a:2});
});

router.get('/hello', function(req, res, next) {
    res.send({msg:'hello', a:22});
});

router.all('*', function(req, res, next) {
    next(createError(404, '그런 api 없어요.'));
});

module.exports = router;
