const express = require('express');
const jwt = require('express-jwt');

const router = express.Router();

const { token } = require('../config/keys');

/* GET users listing. */
router.get('/profile', jwt({
  secret: token.key,
}), (req, res) => {
  res.send({ status: 200, user: req.user.user });
});

module.exports = router;
