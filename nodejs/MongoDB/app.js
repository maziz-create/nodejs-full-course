var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');

var app = express();

mongoose.connect('mongodb://localhost/FirstRobo')
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => console.log("MongoDB bağlantı hatası! ", err));
/*
farklı bir then catch yapısı =>
mongoose.connect('mongodb://localhost/FirstRobo'); //bağlantı şekli üsttekiyle aynı.
mongoose.connection.on('open', () => console.log("MongoDB bağlantısı başarılı!")); //eventEmitter kullanıyoruz işte.
mongoose.connection.on('error', (err) => console.log("MongoDB bağlantı hatası! ", err));
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
