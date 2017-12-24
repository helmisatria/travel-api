const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

const { token } = require('../config/keys');

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
  prompt: 'select_account',
}));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/',
  session: false,
}), (req, res) => {
  jwt.sign({ user: req.user }, token.key, {
    expiresIn: '30m',
  }, (err, newToken) => {
    if (!err) {
      res.status(200).send({ token: newToken });
    }
  });

  // res.redirect('/user/profile');
});

router.get('/logout',  (req, res) => {
  res.redirect('/');
});

module.exports = router;
