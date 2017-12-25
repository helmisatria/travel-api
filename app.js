const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const jwt = require('express-jwt');

const city = require('./routes/city');
const users = require('./routes/users');
const auth = require('./routes/auth');
const airport = require('./routes/airport');

require('./config/passport-config');
const { token } = require('./config/keys');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(passport.initialize());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Register routes
app.use('/api/city', [
  jwt({ secret: token.key }),
  city,
]);
app.use('/api/airport', [
  jwt({ secret: token.key }),
  airport,
]);
app.use('/user', [
  jwt({ secret: token.key }),
  users,
]);
app.use('/auth', auth);

// End of register routes

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({ message: 'invalid token' });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
