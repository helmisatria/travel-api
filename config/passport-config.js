const passport = require('passport');
const GoogleStategy = require('passport-google-oauth20');
const { google } = require('./keys');
const { User } = require('../models');

passport.use(new GoogleStategy({
  clientID: google.clientID,
  clientSecret: google.clientSecret,
  callbackURL: '/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    console.log('====================================');
    console.log(profile.emails);
    console.log('====================================');
    const userFound = await User.findOne({
      where: {
        googleId: profile.id,
      },
    });

    if (!userFound) {
      const newUser = await User.create({
        googleId: profile.id,
        nama: profile.displayName,
        email: profile.emails[0].value,
      });
      return done(null, newUser);
    }
    return done(null, userFound.dataValues);
  } catch (e) {
    return console.error(e);
  }
}));
