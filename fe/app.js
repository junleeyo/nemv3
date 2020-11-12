var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var app = express();
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, default: '', unique: true, index: true },
  age: { type: Number, default: 1 }
})
var User = mongoose.model('User', userSchema)

mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err)
  console.log('mongoose connected!')

  User.create({ name: '하하' })
      .then(r => console.log(r))
      .catch(e => console.error(e))

  /*User.find()
      .then(r => console.log(r))
      .catch(e => console.error(e))*/
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())
app.use('/api', require('./routes/api'))
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
