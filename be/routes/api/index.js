var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const jwt = require('jsonwebtoken');
const cfg = require('../../../config');

router.use('/sign', require('./sign'));
router.use('/manage', require('./manage'));

const verifyToken = (t) => {
    return new Promise((resolve, reject) => {
        if (!t) resolve({ id: 'guest', name: '손님', lv: 3 })
        if (t.length < 10) resolve({ id: 'guest', name: '손님', lv: 3 })
        jwt.verify(t, cfg.jwt.secretKey, (err, v) => {
            if (err) reject(err)
            resolve(v)
        })
    })
}

router.all('*', function(req, res, next) {
    // 토큰 검사
    const token = req.headers.authorization
    verifyToken(token)
    .then(v => {
        console.log(v)
        req.user = v
        next()
    })
    .catch(e => res.send({ success: false, msg: e.message }))  
});

/*
router.get('/hello', function(req, res, next) {
    res.send({msg:'hello', a:1});
});

router.use('/test', require('./test'));*/
router.use('/user', require('./user'));
router.use('/page', require('./page'));

/*
router.all('*', function(req, res, next) {
    next(createError(404, '그런 api 없어요.'));
});
*/

router.all('*', function(req, res, next) {
    // 또 검사해도 됨
    if (req.user.lv > 2) return res.send({ success: false, msg: '권한이 없습니다.' })
    next()
})

module.exports = router;
