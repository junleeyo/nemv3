var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const jwt = require('jsonwebtoken')
const cfg = require('../../../../config')
const crypto = require('crypto')
const User = require('../../../models/users')

const signToken = (id, age, lv) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id, age, lv }, cfg.jwt.secretKey, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

router.post('/in', (req, res) => {
  const { id, pwd } = req.body
  if (!id) return res.send({ success: false, msg: '아이디가 없습니다.'})
  if (!pwd) return res.send({ success: false, msg: '비밀번호가 없습니다.'})

  User.findOne({ id })
    .then((r) => {
      if (!r) throw new Error('존재하지 않는 아이디입니다.')
      // if (r.pwd !== pwd) throw new Error('비밀번호가 틀립니다.')
      const p = crypto.scryptSync(pwd, r._id.toString(), 64, { N: 1024 }).toString('hex')
      if (r.pwd !== p) throw new Error('비밀번호가 틀립니다.')
      return signToken(r.id, r.age, r.lv)
    })
    .then((r) => {
      res.send({ success: true, token: r })
    })
    .catch((e) => {
      res.send({ success: false, msg: e.message })
    })
})

router.post('/out', (req, res) => {
  res.send({ success: false, msg: '아직 준비 안됨.'})
})

router.all('*', function(req, res, next) {
  next(createError(404, '그런 api 없어'));
});

module.exports = router;