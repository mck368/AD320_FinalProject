var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var aboutRouter = require('./routes/about');
var blogPopcornRouter = require('./routes/blog-popcorn');
var blogVhsRouter = require('./routes/blog-vhs');
var blogFilmRouter = require('./routes/blog-filmmakers');
var blogSeattleRouter = require('./routes/blog-seattlemovies');
var contactRouter = require('./routes/contact');
var myMoviesRouter = require('./routes/my-friends');
var myFriendsRouter = require('./routes/my-movies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/blog-seattlemovies', blogPopcornRouter);
app.use('/blog-filmmakers', blogVhsRouter);
app.use('/blog-vhs', blogSeattleRouter);
app.use('/blog-filmmakers', blogFilmRouterRouter);
app.use('/my-movies', myMoviesRouter);
app.use('/my-friends', myFriendsRouter);

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
  res.render('error');
});

module.exports = app;
