var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();
var cfg = require('../config');

/*
var jwt = require('jsonwebtoken');

var key = 'dmoejdidufi1233!@'
var token = jwt.sign({ id: 'test', email: 'test@korea.com' }, key);
console.log(token)

var decoded = jwt.verify(token, key) 
console.log(decoded) 
console.log(new Date(decoded.iat * 1000).toLocaleString())

const crypto = require('crypto');
const registPwd = '1234' // 회원가입시 1234로 등록
const dbPwd = crypto.scryptSync(registPwd, 'salt', 64, { N: 1024 }).toString('hex'); // 암호화된 문자를 디비에 저장
console.log(dbPwd)

const inputPwd = '12345' // 로그인시 12345로 들어옴
const userPwd = crypto.scryptSync(inputPwd, 'salt', 64, { N: 1024 }).toString('hex'); // 암호화된 문자로 변경

if (userPwd === dbPwd) console.log('pwd OK')
else console.log('pwd not')
*/

const mongoose = require('mongoose')
mongoose.connect(cfg.dbUrl, { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err)
  console.log('mongoose connected!')
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') app.use(cors())
app.use('/api', require('./routes/api'));
app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
