const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

// Load user model
const User = mongoose.model('users');

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        // Check if user already exists in our db
        User.findOne({ googleId: profile.id }).then(currentUser => {
          if (currentUser) {
            // already have the user
            done(null, currentUser);
          } else {
            // if not, create user in our db
            new User({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value
            })
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });
};
