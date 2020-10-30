var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const us =[
    {
        name: '김김김',
        age: 14
    },
    {
        name: '이이이',
        age: 24
    }
]

router.get('/', function(req, res, next) {
    res.send({users: us});
});

router.post('/', function(req, res, next) {
    res.send({success: "true"});
});

router.put('/', function(req, res, next) {
    res.send({success: "true"});
});

router.delete('/', function(req, res, next) {
    res.send({success: "true"});
});


router.all('*', function(req, res, next) {
    next(createError(404, '그런 api 없어요.'));
});

module.exports = router;
