const passport = require('passport');
const express = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieSession = require('cookie-session');
const keys = require('../config/keys.js');

const mongoose = require('mongoose');

const User = mongoose.model('users');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 3600 * 1000
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    })
})

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, (accessToken, refreshToken, profile, done) => {
                // console.log('access token: ',accessToken);
                // console.log('refresh token: ',refreshToken);
                // console.log('profile: ',profile);
                // console.log('done ',done);
                User.findOne({
                    googleId:profile.id
                }).then((existingUser) => {
                    if(!(existingUser)){
                        new User({
                            googleId: profile.id,
                            email: profile.emails[0].value
                        }).save().then(
                            user => done(null, user)
                        );
                    }
                })

        }
    )
);