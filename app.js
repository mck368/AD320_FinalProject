var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');
var friendsRouter = require('./routes/friends');
var user_ProfileRouter = require('./routes/user_profile');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var usersRouter = require('./routes/users');

var my_MoviesRoter = require('./routes/my_movies');
var my_FriendsRouter = require('./routes/my_friends');

var blog_FilmRouter = require('./routes/blog_filmmakers');
var blog_VhsRouter = require('./routes/blog_vhs');
var blog_PopcornRouter = require('./routes/blog_popcorn');
var blog_SeattleRouter = require('./routes/blog_seattlemovies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// connects router to the webpages
app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/friends', friendsRouter);
app.use('/user_profile', user_ProfileRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/users', usersRouter);
app.use('/my_movies', my_MoviesRoter);
app.use('/my_friends', my_FriendsRouter);
app.use('/blog_filmmakers', blog_FilmRouter);
app.use('/blog_vhs', blog_VhsRouter);
app.use('/blog_popcorn', blog_PopcornRouter);
app.use('/blog_seattlemovies', blog_SeattleRouter);

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

// localhost:3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})

module.exports = app;
